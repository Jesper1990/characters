import express, { Application, Request, Response } from 'express'
import dotenv from 'dotenv'

dotenv.config()

const app: Application = express()
const PORT = process.env.PORT;

app.get('/', (req: Request, res: Response) => {
  res.send({ msg: 'Testing another message' })
})

app.listen(PORT, () => {
  console.log(`Server is up and running at: ${PORT}`)
})