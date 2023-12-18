const cors = require('cors')
const express = require('express')
const mongoose = require('mongoose')

const ProductModel = require('./src/Models/ProductModel.js')
const UserModel = require('./src/Models/UserModel.js')

const ProductRoute = require('./src/Routes/ProductRoute.js')
const UserRoute = require('./src/Routes/UserRoute.js')

const app = express()
const port = 4000

app.use(express.json())
app.use(cors())

//routers
app.use("/products", ProductRoute);
app.use("/users", UserRoute);


app.get("*", async (req, res) => {
    res.send("doesn't find")
})
mongoose.connect('mongodb+srv://nihadfatiyev:nihad123@cluster0.tygkpo2.mongodb.net/')
    .then(() => console.log('Connected!'))
    .catch(() => console.log('Not Connected!'))
    
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})


