import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
// import charactersData from '../data/characters.js'
import CharactersController from '../controllers/characters.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const router = express.Router()

// router.get('/', (req, res) => {
//   res.status(200).json(charactersData)
// })

router.get('/', CharactersController.getCharacters)

router.get('/:charactersId', (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, '../../client/public/character.html'))
})

export default router