import fetch from "../../lib/postgres.js"

export default{
    get: async ()=>{
        try {
            let status = 'enabled'
            return await fetch(false,`select * from drivers where status = $1`, status)  
        } catch (error) {
            console.error(error);
        }
    },              

    post:( {name, birth, phone, car_number, car_name} )=>{
        try {
            return fetch(false,`
                                insert into drivers ( name, birth, phone, car_number, car_name) values ($1, $2, $3, $4, $5) returning *`, name, birth, phone, car_number, car_name) 
        } catch (error) {
            console.error(error);
        }
    },

    put:( { id, name} )=>{
        try {
            return fetch(false,`update categories set 
                                                        name = $2,
                                                        birth = $3,
                                                        phone = $4,
                                                        car_number = $5,
                                                        car_name = $6

                                                    where id = $1 returning *`, id,name, birth, phone, car_number, car_name) 
        } catch (error) {
            console.error(error);
        }
    },

    delete:( { id,status } )=>{
        try {
            return fetch(false,`update drivers set status = $2 where id = $1 returning *`, id, status) 
        } catch (error) {
            console.error(error);
        }
    }

}