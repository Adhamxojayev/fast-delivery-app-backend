import fetch from '../../lib/postgres.js'
import md5 from 'md5';

export default {
    post: async ({name, password}) => {
        try {
            return await fetch(false, `insert into admin (name, password) values ($1, $2) returning *`, name, md5(password))
        } catch (error) {
            console.error(error);
        }
    },
    delete: async ({id,status}) => {
        try {
            return await fetch(false, `update admin set status = $2 where id = $1 returning *`, id, status)
        } catch (error) {
            console.error(error);
        }
    },
    get: async () => {
        try {
            let geted = 'active'
            return await fetch(false, `select * from admin where status = $1`, geted)
        } catch (error) {
            console.error(error);
        }
    },
    put: async ({id,name,password}) => {
        try {
            return await fetch(false, 
            `update admin set name = $2, password = $3 where id = $1 returning *`, id, name, md5(password))
        } catch (error) {
            console.error(error);
        }
    },
    login: async ({name,password}) => {
        try {
            return await fetch(false, 
            `select * from admin where name = $1 and password = $2`, name, md5(password))
        } catch (error) {
            console.error(error);
        }
    }
}

