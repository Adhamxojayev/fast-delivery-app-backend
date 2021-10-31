import fetch from '../../lib/postgres.js'
import moment from 'moment'

export default {
    post: async ({user_id,driver_id,product_id,product_count}) => {
        try {
            let time = moment().format('LLLL')
            return await fetch(false, `insert into orders (user_id,driver_id,product_id,product_count,time) values ($1, $2, $3, $4, $5) returning *`,user_id,driver_id,product_id,product_count,time)
        } catch (error) {
            console.error(error);
        }
    },
    delete: async ({id,status}) => {
        try {
            return await fetch(false, `update orders set status = $2 where id = $1 returning *`, id, status)
        } catch (error) {
            console.error(error);  
        }
    },
    get: async () => {
        try {
            return await fetch(true, `select * from orders`)
        } catch (error) {
            console.error(error);
        }
    },
    put: async ({id,product_id,product_count}) => {
        try {
            return await fetch(false, 
            `update orders set product_id = $2 , product_count = $3 where id = $1 returning *`, id,product_id,product_count)
        } catch (error) {
            console.error(error);
        }
    }
}




