
import { Request, Response, NextFunction } from "express";
import { autenticationService } from "../../util/authentication/authentication";
import { userValidate } from "../../util/validation/user.service.validate";
import { hash } from 'bcryptjs';
import fs from 'fs';
import { readFileExcel } from "../../util/readFile";
import { domain } from "../../../config/domain/domain.url";
import { employeeRepository } from "../../employee/repository/employee.repository";
import { formatte } from "../../employee/util/formatte";
import { registoPagamentoRepository } from "../repository/payment.repository";


export async function ImportFileRegister(req: Request, res: Response) {
    try {
        const user = req.session.user;
        console.log(user)
        res.render("template/form/importFileRegister",{
          user,
          domain,
          error: req.flash("error"),
          warning: req.flash("warning"),
          sucess: req.flash("sucess"),
        }) 
     
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: "Failed to create user." });
    }
  }
  export async function ImportFileEmployee(req: Request, res: Response) {
    try {
        const user = req.session.user;
        console.log(user)
        res.render("template/form/importFileEmployee",{
          user,
          domain,
          error: req.flash("error"),
          warning: req.flash("warning"),
          sucess: req.flash("sucess"),
        }) 
     
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: "Failed to create user." });
    }
  }
export async function uploadFile(req: Request, res: Response) {
    try {
      const file = req.file
      return res.status(200).json({ filename: file?.filename});
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: "Failed to create user." });
    }
}
 export async function InsertDataFile(req: Request, res: Response) {
  try {
    const {name,cod}=req.params
    console.log(name,cod)
    const nomeDoArquivo = `public/uploads/${name}`;
    const data = await  readFileExcel(nomeDoArquivo)
    if(!data.error) {
      // Vou inserir na Bd os dados lidos
      // Depois vou deletar
      if(cod=="EM"){
        const dataFormatte = await formatte(data)
        console.log(dataFormatte)
          if(dataFormatte){
            dataFormatte.map(async (data:any)=>{
                const verify= await  employeeRepository.findBycod(data.cod)
                if(!verify){
                    const employee = await employeeRepository.addData(data)
                }else{
                 console.log(data.cod,"Ja esta cadastrado !")
                }
          
            })
          fs.unlink(nomeDoArquivo, (err: NodeJS.ErrnoException | null) => {
            if (err) {
              console.error('Ocorreu um erro ao excluir o arquivo:', err);
              return res.status(500).json({ error: "Error interno !" });
            }
            req.flash("sucess", "Adicionado com sucesso!");
            return res.status(200).json({ succes: "Arquivo removido com sucesso!" });
          });
        }else{
          return res.status(500).json({ error: "Error interno !" });
        }
        
      }else if(cod == "RG"){
        console.log("Registos de entrada ")
        fs.unlink(nomeDoArquivo, (err: NodeJS.ErrnoException | null) => {
          if (err) {
            console.error('Ocorreu um erro ao excluir o arquivo:', err);
            return res.status(500).json({ error: "Error interno !" });
          }
          req.flash("sucess", "Adicionado com sucesso!");
          return res.status(200).json({ succes: "Arquivo removido com sucesso!" });
        });
      }
   

    }else{
      return res.status(500).json({ error: "Error interno !" });
    }
   
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Failed to create user." });
  }
}
export async function listEmployee(req: Request, res: Response) {
  try {
      const user = req.session.user;
      const employeer = await employeeRepository.findAll()
      console.log(user)
      res.render("template/listEmployee",{
        user,
        domain,
        employeer,
        error: req.flash("error"),
        warning: req.flash("warning"),
        sucess: req.flash("sucess"),
      }) 
   
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Failed to create user." });
  }
}
export async function controlRegisterEmployee(req: Request, res: Response) {
  try {
      const user = req.session.user;
      const historyPayment = await registoPagamentoRepository.findAll()
      console.log(historyPayment)
      res.render("template/controlemployee",{
        user,
        domain,
        historyPayment,
        error: req.flash("error"),
        warning: req.flash("warning"),
        sucess: req.flash("sucess"),
      }) 
   
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Failed to create user." });
  }
}
export async function employeePayment(req: Request, res: Response) {
  try {
    const {cod}=req.params
    const user = req.session.user;
    const formatte =parseInt(cod)
    console.log(formatte)
  
   const employee = await employeeRepository.findBycod(formatte)
   console.log(employee)
   if(employee){
    res.render("template/form/employeePayment",{
      user,
      employee,
      domain,
      error: req.flash("error"),
      warning: req.flash("warning"),
      sucess: req.flash("sucess"),
    }) 
   }else{
    return res.status(500).json({ error: "Estes dados não Existem !" });
   }

    
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Failed to create user." });
  }
}
export async function findEmployee(req:Request,res:Response){
  try {
    const {cod}=req.params
    const formatte =parseInt(cod)
    console.log(formatte)
  
   const employee = await employeeRepository.findBycod(formatte)
   console.log(employee)
   if(employee){
    return res.status(200).json({ employee}); 
   }else{
    return res.status(200).json({ error: "Funcionario Não correspondente !" }); 
   }
  
    
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Failed to create user." }); 
  }
}
  