import bodyParser from 'body-parser'
import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'
import mongoose from 'mongoose'
import { AuthRoute } from './src/Routes/authRoute.js'
import { UserRoute } from './src/Routes/userRoute.js'
import { ProductRouter } from './src/routes/ProductRoute.js'

const app = express()

app.use(express.json())
// app.use(express.json())
app.use(cors())
app.use(bodyParser.json())

dotenv.config()

app.use("/", AuthRoute)
app.use("/", UserRoute)
app.use("/", ProductRouter)



const port = process.env.PORT
const url = process.env.CONNECTION_URL.replace("<password>", process.env.PASSWORD)

mongoose.connect(url)
    .then(() => console.log("connected"))
    .catch(error => console.log(error))

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})