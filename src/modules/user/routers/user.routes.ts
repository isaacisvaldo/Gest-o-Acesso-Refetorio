import { Router } from 'express';
import * as userController from "../controllers/user.controller";
import configureMulter from '../../util/middlewares/fileUpload';
import multer from 'multer';
import { userAuth } from '../../util/middlewares/session';
const upload = multer(configureMulter());

const userRouter = Router()

userRouter.post('/login',userController.login)
userRouter.get('/logout',userController.logout)
userRouter.get('/profile',userController.profile)

userRouter.get('/dashboard',userAuth,userController.dashboard)
userRouter.post('/user',userController.create)
export {userRouter}; 