import express from 'express'
import controller from './controller.js'

// Router
const router = express.Router()

// Router methods
router.post('/products', controller.post)
      .delete('/products', controller.delete)
      .get('/products', controller.get)
      .put('/products', controller.put)      
      
export default router