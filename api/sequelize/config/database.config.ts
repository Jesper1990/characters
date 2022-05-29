import { Sequelize } from 'sequelize';
import dotenv from 'dotenv'

dotenv.config()

const { DB_HOST, DB_USER, DB_PASS, DB_NAME } = process.env;
const db = new Sequelize(DB_NAME as string, DB_USER as string, DB_PASS as string, {
  host: DB_HOST as string,
  dialect: 'postgres',
  logging: false
})

const modelDefiners = []

export default db;