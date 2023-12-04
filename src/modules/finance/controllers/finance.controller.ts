
import { Request, Response, NextFunction } from "express";
import { domain } from "../../../config/domain/domain.url";



export async function getFinancial(req: Request, res: Response) {
  try {
    const user = req.session.user;
    const finacial: any[] =[]
    res.render("template/finance",{
        user,
        finacial,
        domain,
        error: req.flash("error"),
        warning: req.flash("warning"),
        sucess: req.flash("sucess"),
      }) 
    
  } catch (error) {
    console.log(error)
    return res.status(500).json({ error: "Failed Internal." });
  }
  }
  