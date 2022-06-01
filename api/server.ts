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