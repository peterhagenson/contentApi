import express from 'express'
import { Request, Response } from 'express'
const router = express.Router();

router.get('/', (req: Request, res: Response) => {
    console.log('in get images')
  res.send('in images')
})

export default router