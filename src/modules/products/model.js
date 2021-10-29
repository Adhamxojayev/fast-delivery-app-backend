import fetch from '../../lib/postgres.js'

export default {
    post: async ({product_category_id,name,description,price,image}) => {
        try {
            return await fetch(false, `insert into products (product_category_id,name,description,price,image) values ($1, $2, $3, $4, $5) returning *`,product_category_id,name,description,price,image)
        } catch (error) {
            console.error(error);
        }
    },
    delete: async ({id,status}) => {
        try {
            return await fetch(false, `update products set status = $2 where id = $1 returning *`, id, status)
        } catch (error) {
            console.error(error);
        }
    },
    get: async () => {
        try {
            return await fetch(true, `select * from products`)
        } catch (error) {
            console.error(error);
        }
    },
    put: async ({id,name}) => {
        try {
            return await fetch(false, 
            `update products set name = $2 where id = $1 returning *`, id,name)
        } catch (error) {
            console.error(error);
        }
    }
}




