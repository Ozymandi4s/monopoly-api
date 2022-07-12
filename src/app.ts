import express from 'express'
import cors from 'cors'
import { router } from './routes/index'

/**
 * Create app
 */
export const app = express()

/**
 *  Configure middleware
 */
app.use(express.json())
app.use(cors())

/**
 * Set endpoint at app 
 */
app.use('api/v1/', router)
