import express from 'express'
import controller from './controller.js'

// Router
const router = express.Router()

// Router methods
router.get('/users', controller.get)
     
      
export default router