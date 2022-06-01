import { Request, Response } from 'express'
import { UserInstance } from '../../../sequelize/models/users/users.model'

async function getAll(req: Request, res: Response) {
  try {
    const created = await UserInstance.findAll()
    return res.json({ created, msg: 'Successfully fetched all users' })
  } catch (e) {
    return res.json({ msg: 'Failed to fetch users', status: 500, route: '/users' })
  }
}

async function getById(req: Request, res: Response) {
  const id = req.body.id
  try {
    const created = await UserInstance.findByPk(id)
    return res.json({ created, msg: `User with id: ${id} has been fetched` })
  } catch (e) {
    return res.json({ msg: `User with id: ${id} does not exist.`, status: 404, route: `/users/${id}` })
  }
}

async function create(req: Request, res: Response) {
  try {
    console.log(req.body)
    const created = await UserInstance.create({ ...req.body })
    return res.json({ created, msg: 'Successfully created user!' })
  } catch (e) {
    return res.json({ msg: 'Failed to create user', status: 500, route: '/users' })
  }
}

export default { getAll, getById, create }