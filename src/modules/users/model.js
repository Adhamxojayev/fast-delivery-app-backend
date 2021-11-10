import fetch from '../../lib/postgres.js'

export default {
    get: async () => {
        try {
            return await fetch(true, `select 
                u.id,
                u.name,
                u.phone,
                count(o.id) as count
            from users u
            join orders o on o.user_id = u.id
            group by u.name, u.phone,u.id`)
        } catch (error) {
            console.error(error);
        }
    }
}




