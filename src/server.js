import express from 'express'
import cookieParser from 'cookie-parser'
import { PORT } from './config.js'
import { adminRouter, categoriesRouter, subCategoryRouter, productCategoryRouter } from './modules/index.js'

const app = express()

app.use(cookieParser())
app.use(express.json())

app.use(adminRouter)
app.use(categoriesRouter)
app.use(subCategoryRouter)
app.use(productCategoryRouter)


app.listen(PORT, () => {
    console.log(`server run http://localhost:${PORT}`)
})