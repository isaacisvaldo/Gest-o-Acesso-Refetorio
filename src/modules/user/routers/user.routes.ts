import { Router } from 'express';
import * as userController from "../controllers/user.controller";

const userRouter = Router()

userRouter.post('/login',userController.login)
userRouter.get('/logout',userController.logout)
userRouter.get('/dashboard',userController.dashboard)
userRouter.post('/user',userController.create)
export {userRouter}; 