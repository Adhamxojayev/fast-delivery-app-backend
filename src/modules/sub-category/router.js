import express from 'express'
import controller from './controller.js'

// Router
const router = express.Router()

// Router methods
router.post('/categories/subcategory', controller.post)
      .delete('/categories/subcategory', controller.delete)
      .get('/categories/subcategory', controller.get)
      .put('/categories/subcategory', controller.put)      
      
export default router