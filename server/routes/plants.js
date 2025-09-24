import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import plantsData from '../data/plants.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const router = express.Router()

router.get('/', (req, res) => {
  res.status(200).json(plantsData)
})

router.get('/:plantsId', (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, '../../client/public/plant.html'))
})

export default router