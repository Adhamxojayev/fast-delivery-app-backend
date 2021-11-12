import controller from './controller.js'
import express from 'express'

// Router
const router = express.Router()

// Router methods
router.get('/complaint', controller.get)
        

export default router