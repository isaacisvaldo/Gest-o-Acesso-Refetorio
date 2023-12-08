
import { Request, Response, NextFunction } from "express";
import { domain } from "../../../config/domain/domain.url";
import { employeeRepository } from "../../employee/repository/employee.repository";
import { registoPagamentoRepository } from "../../employee/repository/payment.repository";




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
  export async function historyFinancialEm(req: Request, res: Response) {
    try {
        const {employee,status} =req.body
        console.log(req.body)
        if(status==="all"){
            const data = await employeeRepository.findByRangeEmployeeId(parseInt(employee))
            return res.status(200).json({ data});
        }else{
            const formatteStatus = parseInt(status)
            console.log("Com o estado")
            const data =await employeeRepository.findByRangeEmployeeIdEstado(employee,formatteStatus)
            return res.status(200).json({ data});
        }
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: "Failed to create user." });
    }
  }

  export async function updatehistoryFinancialEm(req: Request, res: Response) {
    try {
        const {Id} =req.params
        console.log(Id)
        const find = await registoPagamentoRepository.findAById(Id)
        console.log(find)
        if(find){
         const upd = await registoPagamentoRepository.updateAcessCodeWithIdRegister(Id,1)
         return res.status(200).json({ sucess: "Update !" });
        }else{
          return res.status(500).json({ error: "Failed to find registro" });
        }
     
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: "Failed to create user." });
    }
  }
