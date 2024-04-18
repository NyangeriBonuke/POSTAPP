const express = require('express')
const mongoose = require('mongoose')
const app = express()
require('dotenv').config()
const router = require('./routes/postRoutes')
const cors = require('cors')

mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log('Connected to mongodb')
})
.catch((error) => {
    console.log(error)
})

app.use(express.json())
app.use(cors())

app.use('/api', router)

app.listen('8000', () => {
    console.log('Server started')
})