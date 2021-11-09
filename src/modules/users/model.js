import fetch from '../../lib/postgres.js'

export default {
    get: async () => {
        try {
            return await fetch(true, `select * from users`)
        } catch (error) {
            console.error(error);
        }
    }
}




