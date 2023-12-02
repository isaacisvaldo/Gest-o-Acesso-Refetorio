import { Router } from 'express';
import * as employeeController from "../controllers/employee.controller";
import configureMulter from '../../util/middlewares/fileUpload';
import multer from 'multer';
import { userAuth } from '../../util/middlewares/session';
const upload = multer(configureMulter());

const employeeRouter = Router()
employeeRouter.get('/ImportFileRegisterEnter',userAuth,employeeController.ImportFileRegister)
employeeRouter.get('/ImportFileEmployee',userAuth,employeeController.ImportFileEmployee)
employeeRouter.get('/InsertDataFile/:name/:cod',employeeController.InsertDataFile)
employeeRouter.post('/uploadFile',upload.single('file'),employeeController.uploadFile)

export {employeeRouter}; 