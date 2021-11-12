import fetch from "../../lib/postgres.js"

export default{
    get: async ()=>{
        try {
            return await fetch(false,`select * from complaint`)  
        } catch (error) {
            console.error(error);
        }
    }
}    