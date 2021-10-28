import fetch from "../../lib/postgres.js"

export default{
    get: async ()=>{
        try {
            let status = 'active'
            return await fetch(false,`select * from categories where status = $1`, status)  
        } catch (error) {
            console.error(error);
        }
    },

    post:( {name} )=>{
        try {
            return fetch(false,`insert into categories ( name ) values ($1) returning *`,name) 
        } catch (error) {
            console.error(error);
        }
    },

    put:( { id, name} )=>{
        try {
            return fetch(false,`update categories set name = $2 where id = $1 returning *`, id, name) 
        } catch (error) {
            console.error(error);
        }
    },

    delete:( { id,status } )=>{
        try {
            return fetch(false,`update categories set status = $2 where id = $1 returning *`, id, status) 
        } catch (error) {
            console.error(error);
        }
    }

}