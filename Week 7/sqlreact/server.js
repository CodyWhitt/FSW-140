const express = require('express')
const app = express()
const morgan = require('morgan')
const router = require('express').Router();





//middleware
app.use(express.json())
app.use(morgan('dev'))

//Routes
app.use('/avengers', require('./routes/avengerRouter.js'))

//error handling
app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})

app.listen(9000, () => {
    console.log("The server is running on port 9000")
})