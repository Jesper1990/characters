import express, { Application, Request, Response, NextFunction } from 'express'
import cors from 'cors'
import characters from './routes/public/characters'

const publicRoutes = {
  characters
}

const app: Application = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

function makeHandlerAwareOfAsyncErrors(handler: any) {
  return async function (req: Request, res: Response, next: NextFunction) {
    try {
      await handler(req, res)
    } catch (e) {
      next(e)
    }
  }
}

app.get('/', (req: Request, res: Response) => {
  res.json({ msg: 'Welcome to first request!' })
})

for (const [routeName, routeController] of Object.entries(publicRoutes)) {
  if (routeController.getAll) {
    app.get(
      `/api/${routeName}`,
      makeHandlerAwareOfAsyncErrors(routeController.getAll)
    )
  }
  if (routeController.getById) {
    app.get(
      `/api/${routeName}/:id`,
      makeHandlerAwareOfAsyncErrors(routeController.getById)
    )
  }
  if (routeController.create) {
    app.post(
      `/api/${routeName}`,
      makeHandlerAwareOfAsyncErrors(routeController.create)
    )
  }
}

export default app