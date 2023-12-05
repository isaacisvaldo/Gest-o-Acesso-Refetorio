import { Router } from 'express';
import * as financeController from "../controllers/finance.controller";
import { userAuth } from '../../util/middlewares/session';
const financeRouter = Router()
financeRouter.get('/getFinancial',userAuth,financeController.getFinancial)
financeRouter.post('/dataOfFinancial',financeController.dataOfFinancial)

export {financeRouter};