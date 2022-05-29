import { Request, Response } from 'express'
import { CharacterInstance } from '../../../sequelize/models';

async function getAll(req: Request, res: Response) {
  try {
    const created = await CharacterInstance.findAll()
    return res.json({ created, msg: 'Successfully fetched all characters' })
  } catch (e) {
    return res.json({ msg: 'Failed to create character', status: 500, route: '/getAll' })
  }
}

async function getById(req: Request, res: Response) {
  const id = req.body.id
  try {
    const created = await CharacterInstance.findByPk(id)
    return res.json({ created, msg: 'Successfully fetched character by id' })
  } catch (e) {
    return res.json({ msg: `Character with id: ${id} does not exist`, status: 404, route: '/getById' })
  }
}

async function create(req: Request, res: Response) {
  try {
    const created = await CharacterInstance.create({ ...req.body })
    return res.json({ created, msg: 'Successfully created character ' })
  } catch (e) {
    return res.json({ msg: 'Failed to create character', status: 500, route: '/create' })
  }
}

export default { getAll, getById, create }