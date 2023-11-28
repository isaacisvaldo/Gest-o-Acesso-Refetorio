import { Router } from 'express';
import * as userController from "../controllers/user.controller";

const userRouter = Router()

userRouter.post('/login',userController.login)
userRouter.get('/dashboard',userController.dashboard)
export {userRouter}; 