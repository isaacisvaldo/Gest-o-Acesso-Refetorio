import express from "express";
import bodyParser from "body-parser";
import { config } from "dotenv";
import {financeRouter} from "./modules/finance/routes/finance.routes";
import {employeeRouter} from "./modules/employee/routers/employee.routes";
import {userRouter} from "./modules/user/routers/user.routes";
import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerOptions from "./config/swaggerOptions";
import RedisStore from "connect-redis"
import session, { SessionOptions } from 'express-session';
import {createClient} from "redis"
import flash from "express-flash"
import cors from 'cors';
import initCron from './node-cron/insert.file.excel'
const redisClient = createClient()
redisClient.connect().catch(console.error)
const redisStore = new RedisStore({
  client: redisClient,
  prefix: "Ref:",
})
config();
const main = async () => {
  //initCron(); 
  //esta função esta ser chamado para executar um script automatico para add data
  const app = express();
  app.use(flash());
  app.use(
    session({
      store: redisStore,
      secret: process.env.SESSION_PASSWORD || "Testando@##123",
      resave: false,
      saveUninitialized: false,
      cookie: {
        secure:false,
        maxAge: 60 * 60 * 1000, 
      },
    } as SessionOptions));

  app.set("view engine", "ejs");
  app.use(express.static("public"));
  app.use(express.json());
  app.use(cors());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  const swaggerSpec = swaggerJsdoc(swaggerOptions);
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  app.use(express.json());
  app.use(financeRouter);
  app.use(userRouter)
  app.use(employeeRouter)
  app.get('/', (req, res) => {
    res.render("template/form/sign")
  });
  app.use(function  (req,res,next){
    res.render("template/error/404")

}) 
  const port = process.env.PORT || 3000;
  app.listen(port, () => console.log(`http://localhost:${port}`));
};
main();


