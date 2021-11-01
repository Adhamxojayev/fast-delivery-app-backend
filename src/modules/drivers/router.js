import controller from './controller.js'
import express from 'express'

// Router
const router = express.Router()

// Router methods
router.post('/drivers', controller.post)
      .delete('/drivers', controller.delete)
      .get('/drivers', controller.get)
      .put('/drivers', controller.put)
        

export default router