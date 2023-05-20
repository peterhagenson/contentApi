import express from 'express'
import { Request, Response } from 'express'
const router = express.Router();

router.get('/', (req: Request, res: Response) => {
    console.log('in get all items')
  res.send('in  get all items')
})

router.get('/:id', (req: Request, res: Response) => {
    console.log('in get item by id l')
  res.send('in  get item by id')
})

export default router