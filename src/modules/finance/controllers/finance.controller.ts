
import { Request, Response, NextFunction } from "express";
import { domain } from "../../../config/domain/domain.url";
import { employeeRepository } from "../../employee/repository/employee.repository";




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
  export async function dataOfFinancial(req: Request, res: Response) {
    try {
        const {dateStart,dateEnd,status} =req.body
        console.log(req.body)
        if(status==="all"){
            const data = await employeeRepository.findByRangeData(dateStart,dateEnd)
            return res.status(200).json({ data});
        }else{
            const formatteStatus = parseInt(status)
            console.log("Com o estado")
            const data =await employeeRepository.findByRangeDataEstado(dateStart,dateEnd,formatteStatus)
            return res.status(200).json({ data});
        }
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: "Failed to create user." });
    }
  }
