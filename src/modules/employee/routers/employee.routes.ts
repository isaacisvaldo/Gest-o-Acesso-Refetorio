import { Router } from 'express';
import * as employeeController from "../controllers/employee.controller";
import configureMulter from '../../util/middlewares/fileUpload';
import multer from 'multer';
import { userAuth } from '../../util/middlewares/session';
const upload = multer(configureMulter());

const employeeRouter = Router()
employeeRouter.get('/ImportFileRegisterEnter',userAuth,employeeController.ImportFileRegister)
employeeRouter.get('/controlRegisterEmployee',userAuth,employeeController.controlRegisterEmployee)
employeeRouter.get('/employeePayment/:cod',userAuth,employeeController.employeePayment)
employeeRouter.get('/findEmployee/:cod',userAuth,employeeController.findEmployee)
employeeRouter.get('/ImportFileEmployee',userAuth,employeeController.ImportFileEmployee)
employeeRouter.get('/InsertDataFile/:name/:cod',employeeController.InsertDataFile)
employeeRouter.post('/uploadFile',upload.single('file'),employeeController.uploadFile)
employeeRouter.post('/employeePaymentRegister',userAuth,employeeController.employeePaymentRegister)
employeeRouter.get('/listEmployee',userAuth,employeeController.listEmployee)
employeeRouter.get('/printFicha/:cod',userAuth,employeeController.printFicha)

export {employeeRouter}; 