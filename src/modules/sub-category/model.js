import fetch from '../../lib/postgres.js'

export default {
    post: async ({category_id, name}) => {
        try {
            return await fetch(false, `insert into sub_categories (category_id,name) values ($1, $2) returning *`, category_id, name)
        } catch (error) {
            console.error(error);
        }
    },
    delete: async ({id,status}) => {
        try {
            return await fetch(false, `update sub_categories set status = $2 where id = $1 returning *`, id, status)
        } catch (error) {
            console.error(error);
        }  
    },
    get: async () => {
        try {
            let geted = 'active'
            return await fetch(false, `select * from sub_categories where status = $1`, geted)
        } catch (error) {
            console.error(error);
        }
    },
    put: async ({id,name}) => {
        try {
            return await fetch(false, 
            `update sub_categories set name = $2 where id = $1 returning *`, id, name)
        } catch (error) {
            console.error(error);
        }
    }
}




