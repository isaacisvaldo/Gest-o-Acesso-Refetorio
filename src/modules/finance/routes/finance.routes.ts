import { Router } from 'express';
import * as userController from "../controllers/finance.controller";

const financeRouter = Router()
/**
 * @swagger
 * /user:
 *   get:
 *     description: Lista todos os Usuários
 *     responses:
 *       200:
 *         description: Sucesso
 */
financeRouter.get('/user',userController.getUser)
export {financeRouter};