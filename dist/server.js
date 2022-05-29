"use strict";
// import express, { Application, Request, Response } from 'express'
// import dotenv from 'dotenv'
// import cors from 'cors'
// import db from './sequelize/config/database.config'
// import { CharacterInstance } from './sequelize/models'
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// dotenv.config()
// const app: Application = express()
// app.use(cors())
// app.use(express.json())
// app.use(express.urlencoded({ extended: true }))
// try {
//   db.authenticate()
//   console.log('Connection has been established')
// } catch (error) {
//   console.error('Unable to connect', error)
// }
// const PORT = process.env.PORT;
// app.get('/', (req: Request, res: Response) => {
//   res.send({ msg: 'Welcome to first request' })
// })
// app.post('/create', async (req: Request, res: Response) => {
//   try {
//     const created = await CharacterInstance.create({ ...req.body })
//     return res.json({ created, msg: 'Successfully created character' })
//   } catch (e) {
//     console.log(e)
//     return res.json({ msg: 'Failed to create character', status: 500, route: '/create' })
//   }
// })
// app.listen(PORT, () => {
//   console.log(`Server is up and running at: ${PORT}`)
// })
const app_1 = __importDefault(require("./express/app"));
const database_config_1 = __importDefault(require("./sequelize/config/database.config"));
const PORT = process.env.PORT;
const assertDatabaseConnectionOk = () => __awaiter(void 0, void 0, void 0, function* () {
    console.log('Checking database connection...');
    try {
        yield database_config_1.default.authenticate();
        console.log('Database connection has been established');
    }
    catch (error) {
        console.log('Unable to connect to database, shutting down..', error);
        process.exit(1);
    }
});
const init = () => __awaiter(void 0, void 0, void 0, function* () {
    yield assertDatabaseConnectionOk();
    app_1.default.listen(PORT, () => {
        console.log(`Server started on port: ${PORT}. Try some routes!`);
    });
});
init();
