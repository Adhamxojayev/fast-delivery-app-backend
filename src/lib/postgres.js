import  {pgConfig} from '../config.js'
import pg from'pg'


const pool = new pg.Pool(pgConfig)

const fetch = async (control,query, ...arr) => {
    const client = await pool.connect()
    try {
        const {rows} = await client.query(control ? query : query, arr)
        return rows
    } catch (error) {
        console.log(error.message);
    }finally{
        await client.release()
    }
    
}


export default fetch