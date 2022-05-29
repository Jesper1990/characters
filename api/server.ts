// import express, { Application, Request, Response } from 'express'
// import dotenv from 'dotenv'
// import cors from 'cors'
// import db from './sequelize/config/database.config'
// import { CharacterInstance } from './sequelize/models'

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

import app from './express/app';
import db from './sequelize/config/database.config';

const PORT = process.env.PORT

const assertDatabaseConnectionOk = async () => {
  console.log('Checking database connection...')

  try {
    await db.authenticate()
    console.log('Database connection has been established')
  } catch (error) {
    console.log('Unable to connect to database, shutting down..', error)
    process.exit(1)
  }
}

const init = async () => {
  await assertDatabaseConnectionOk()

  app.listen(PORT, () => {
    console.log(`Server started on port: ${PORT}. Try some routes!`)
  })
}

init()