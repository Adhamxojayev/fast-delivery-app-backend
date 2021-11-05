import express from 'express'
import cookieParser from 'cookie-parser'
import { PORT } from './config.js'
import router from './modules/index.js'

const app = express()


app.use((req,res,next) => {
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, Accept, Content-Type, Access-Control-Allow-Origin');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST, DELETE, PUT');
    next()
})

app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(router)

app.listen(PORT, () => {
    console.log(`server run http://localhost:${PORT}`)
})