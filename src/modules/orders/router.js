import express from 'express'
import controller from './controller.js'

// Router
const router = express.Router()

// Router methods
router.post('/orders', controller.post)
      .delete('/orders', controller.delete)
      .get('/orders', controller.get)
      .put('/orders', controller.put)      
      
export default router