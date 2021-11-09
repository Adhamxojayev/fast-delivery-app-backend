import express from 'express'
import cookieParser from 'cookie-parser'
import { PORT } from './config.js'
import router from './modules/index.js'
import cors from 'cors'

const app = express()

app.use(cors())
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(router)

app.listen(PORT, () => {
    console.log(`server run http://localhost:${PORT}`)
})