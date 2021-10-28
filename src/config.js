import dotenv from 'dotenv'
import path from 'path'

const config = dotenv.config({
    path:path.resolve(process.cwd(), 'src', '.env')
})

const PORT = process.env.SERVER_PORT


const pgConfig = {
  user: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
  host: process.env.PG_HOST,
  port: process.env.PG_PORT,
  database: process.env.PG_DATABASE,
}

export {
  PORT,
  pgConfig
}