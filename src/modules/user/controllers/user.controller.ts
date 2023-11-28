
import { Request, Response, NextFunction } from "express";
import { autenticationService } from "../../util/authentication/authentication";
import { userRepository } from "../repository/user.repository";



export async function login(req: Request, res: Response) {
  try {
    const { username, password } = req.body
    const find = await userRepository.findByUsername(username)
    if(find){
      const auth = await autenticationService.passConfirmation(find.password, password)
      if(auth){
        res.redirect("/dashboard")
      }
    }
   
  
    
  } catch (error) {
    console.log(error);
  }
  }
  export async function dashboard(req:Request, res:Response){
    try {
      res.render("template/dashboard")
    } catch (error) {
      console.log(error);
    }
  }
  