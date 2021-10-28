import express from 'express'
import controller from './controller.js'

// Router
const router = express.Router()

// Router methods
router.post('/categories/subcategory/productcategory', controller.post)
      .delete('/categories/subcategory/productcategory', controller.delete)
      .get('/categories/subcategory/productcategory', controller.get)
      .put('/categories/subcategory/productcategory', controller.put)      
      
export default router