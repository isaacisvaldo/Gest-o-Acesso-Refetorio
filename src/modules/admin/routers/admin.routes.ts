import { Router } from 'express';
import * as adminController from "../controllers/admin.controller";

const adminRouter = Router()

adminRouter.post('/login',adminController.login)
export {adminRouter};