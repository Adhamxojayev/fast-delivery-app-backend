import model from '../products/model.js'
import jwt from '../../lib/jwt.js'

export default {
    post: async (req,res) => {
        try {
            let result = jwt.verify(req.cookies.user) 
            if(result == 'super admin'){
                let data = await model.post(req.body)
                if(data.length){
                    res.json({
                        status: 201,
                        message: 'product added',
                        data
                    })
                }
            }else{
                throw new Error('you do not have such an opportunity')
            }
        } catch (error) {
            res.json({
                status: 401,
                message: error.message,
                data: null
            })
        }
    },
    delete: async (req,res) => {
        try {
            let data = await model.delete(req.body)
            if(data.length){
                res.json({
                    status: 201,
                    message: 'product deleted',
                    data
                })
            }else throw new Error('404')
        } catch (error) {
            console.error(error);
        }
    },
    get: async (req,res) => {
        try {
            let data = await model.get()
            if(data.length){
                res.json({
                    status: 200,
                    data
                })
            }else throw new Error('404')
        } catch (error) {
            console.error(error);
        }
    },
    put: async (req,res) => {
        try {
            let data = await model.put(req.body)
            if(data.length){
                res.json({
                    status: 200,
                    message: 'product updated',
                    data
                })
            }else throw new Error('404')
        } catch (error) {
            console.error(error);
        }
    }
}