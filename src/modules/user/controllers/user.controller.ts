
import { Request, Response, NextFunction } from "express";
import { autenticationService } from "../../util/authentication/authentication";
import { userRepository } from "../repository/user.repository";
import { UsuarioDTO } from "../dto/user.dto";
import { userValidate } from "../../util/validation/user.service.validate";
import { hash } from 'bcryptjs';
import fs from 'fs';
import { lerArquivoExcel } from "../../util/readFile";
interface UserSessionData {
  id: string;
  nome: string;
  sobrenome: string;
  username: string;
  img: string;
  
}
declare module "express-session" {
  interface SessionData {
    user: UserSessionData;
  }
}


export  async function create(req: Request, res: Response){
  try {
    const {nome,sobrenome,username,fk_perfil}= req.body
    const saltOrRounds = 10;
    const password = await hash('DTTI@123', saltOrRounds);
    console.log(req.body);
    const data:UsuarioDTO={
      nome: nome,
      sobrenome: sobrenome,
      username: username,
      password: password,
      fk_perfil:fk_perfil,
    }
    const validate = await userValidate.valiadeUser(data)
    if(!validate.error){
      const user = await userRepository.create(data)
      if(user){
        return res.status(200).json({ success: "Cadastrado Com sucesso" });
      }else{
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
            img:find.img
          
        };

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
      res.render("template/dashboard",{user})
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
  export async function ImportFile(req: Request, res: Response) {
    try {
        const user = req.session.user;
        console.log(user)
        res.render("template/form/importFile",{user}) 
     
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
    const {name}=req.params
    const nomeDoArquivo: string = `public/uploads/${name}`;
    const data = await  lerArquivoExcel(nomeDoArquivo)
    if(!data.error) {
      console.log(data);
      // Vou inserir 
      // Depois vou deletar
      fs.unlink(nomeDoArquivo, (err: NodeJS.ErrnoException | null) => {
        if (err) {
          console.error('Ocorreu um erro ao excluir o arquivo:', err);
          return;
        }
        console.log('Arquivo removido com sucesso!');
        return res.status(200).json({ succes: "Arquivo removido com sucesso!" });
      });
    }else{
      return res.status(500).json({ error: "Error interno !" });
    }
   
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Failed to create user." });
  }
}
  