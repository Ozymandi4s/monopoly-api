import { Router } from 'express'
import { game } from './../controllers/gameController'

export const router = Router()

router.get('/', (req, res) => {
    res.send('Monopoly Game API')
})

router.get('/simular', (req, res) => {
    game.playGame()
})
