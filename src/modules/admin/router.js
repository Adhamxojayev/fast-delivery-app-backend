import express from 'express'
import controller from './controller.js'

// Router
const router = express.Router()

// Router methods
router.post('/admin', controller.post)
      .delete('/admin', controller.delete)
      .get('/admin', controller.get)
      .put('/admin', controller.put)
      .post('/login', controller.login)
      
      
export default router