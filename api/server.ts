import express, { Application, Request, Response } from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import db from './sequelize/config/database.config'

dotenv.config()

const app: Application = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

try {
  db.authenticate()
  console.log('Connection has been established')
} catch (error) {
  console.error('Unable to connect', error)
}

const PORT = process.env.PORT;

app.get('/', (req: Request, res: Response) => {
  res.send({ msg: 'Welcome to first request' })
})

app.post('/create', (req: Request, res: Response) => {
  console.log(req.body)
  return res.send('Functional route')
})

app.listen(PORT, () => {
  console.log(`Server is up and running at: ${PORT}`)
})