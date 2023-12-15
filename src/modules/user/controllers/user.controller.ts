
import { Request, Response, NextFunction } from "express";
import { autenticationService } from "../../util/authentication/authentication";
import { userRepository } from "../repository/user.repository";
import { UserDTO, UserLogDTO } from "../dto/user.dto";
import { hash } from 'bcryptjs';
import fs from 'fs';
import { readFileExcel } from "../../util/readFile";
import { domain } from "../../../config/domain/domain.url";
import { employeeRepository } from "../../employee/repository/employee.repository";
import { formatte } from "../../employee/util/formatte";
import { registoPagamentoRepository } from "../../employee/repository/payment.repository";
import { perfilRepository } from "../repository/perfil.repository";
import { logsRepository } from "../repository/log.repository";
import { UserService } from "../user.service";
interface UserSessionData {
  id: string;
  nome: string;
  sobrenome: string;
  username: string;
  img: string;
  perfil:string | undefined
  grupo_Id?:string | undefined
  grupo_designacao?:string | undefined
  
}
declare module "express-session" {
  interface SessionData {
    user: UserSessionData;
  }
}


export  async function create(req: Request, res: Response){
  try {
    const sugest="admin"
    const {nome,sobrenome,username,fk_perfil,fk_grupo}= req.body
    const saltOrRounds = 10;
    const password = await hash(sugest, saltOrRounds);
    console.log(req.body);
    const data:UserDTO={
      nome: nome,
      sobrenome: sobrenome,
      username: username,
      password: password,
      fk_perfil:fk_perfil,
      fk_grupo:fk_grupo
    }
    const validate = await UserService.validationUser(data)
    if(!validate.error){
      const user = await userRepository.create(data)
      if(user){
        req.flash("sucess", "Cadastrado com sucesso!");
        return res.status(200).json({ success: "Cadastrado Com sucesso" });
      }else{
        req.flash("error", "Erro ao tentar Cadastrar");
        return res.status(500).json({ error: "Erro ao cadastrar !" });
      }
    }else{
      return res.status(500).json({ error:validate.error });
    }
   
  } catch (error) {
    throw new Error(`Erro ao Cadastrar : ${error}`);
  }
}
export async function login(req: Request, res: Response) {
  try {
    const { username, password } = req.body
    const find = await userRepository.findByUsername(username)
    console.log(find)
    if(find){
      const auth = await autenticationService.passConfirmation(password, find.password)
      console.log(auth)
      if(auth){
        req.session.user = {
            id: find.Id,
            nome: find.nome,
            sobrenome: find.sobrenome,
            username: find.username,
            img:find.img,
            perfil:find.perfil?.designacao,
            grupo_Id:find.Grupos?.Id,
            grupo_designacao:find.Grupos?.designacao
          
        };
        const data :UserLogDTO ={
          titulo: "Início de sessão",
          designacao: "Acabou de efectuar um início de sessão na sua Conta !",
          user_fk: find.Id,
        }
        const logs = await logsRepository.createlogsUser(data)
        res.redirect("/dashboard")
      }else{
        //erro ao autenticar
        console.log("erro ao autenticar")
        res.redirect("/")
      }
    }else{
      // user não encntrado
      console.log("user não encntrado")
      res.redirect("/")
    }
   
  
    
  } catch (error) {
    console.log(error);
  }
}
export async function dashboard(req:Request, res:Response){
    try {
      const user = req.session.user;
      console.log(user)
      const historyPayment = await registoPagamentoRepository.findAll()
      const employeer = await employeeRepository.findAll()
      res.render("template/dashboard",{user,historyPayment,employeer})
    } catch (error) {
      console.log(error);
    }
  }
  export async function profile(req:Request, res:Response){
    try {
      const user = req.session.user;
      const logs = await logsRepository.findLogsUserBYIdUser(user?.id)
      res.render("template/profile",{user,logs})
    } catch (error) {
      console.log(error);
    }
  }
export async function logout(req: Request, res: Response) {
    try {
      req.session.destroy;
      req.session.user = undefined;
      res.redirect("/");
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: "Failed to create user." });
    }
  }
  export async function listUser(req: Request, res: Response) {
    try {
        const user = req.session.user;
        const perfil= await perfilRepository.findAll()
        const grupos =await perfilRepository.FindAllGroup()
        const users = await userRepository.findAll()
        console.log(users)
        res.render("template/listUser",{
          user,
          domain,
          grupos,
          perfil,
          users,
          error: req.flash("error"),
          warning: req.flash("warning"),
          sucess: req.flash("sucess"),
        }) 
     
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: "Failed to create user." });
    }
  }
