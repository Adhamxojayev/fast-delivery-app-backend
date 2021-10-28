import controller from './controller.js'
import express from 'express'

// Router
const router = express.Router()

// Router methods
router.route('/categories')
        .get(controller.get)
        .post(controller.post)
        .put(controller.put)
        .delete(controller.delete)
        

export default router