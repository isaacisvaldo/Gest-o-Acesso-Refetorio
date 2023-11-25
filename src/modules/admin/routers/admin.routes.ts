import { Router } from 'express';
import * as adminController from "../controllers/admin.controller";

const financeRouter = Router()
/**
 * @swagger
 * /user:
 *   post:
 *     description:sign in
 *     responses:
 *       200:
 *         description: Sucesso
 */
financeRouter.post('/login',adminController.login)
export {financeRouter};