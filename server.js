const express = require('./node_modules/express')
const app = express()
const mongoose = require('mongoose')
const morgan = require('./node_modules/morgan')
require("dotenv").config();

const PORT = process.env.PORT || 8000;

//Middleware
app.use(morgan('dev'))
app.use(express.json())

//Routes

app.use('/bounties', require('./routes/bounties'))

//Error Handler Middleware

app.use((err, req, res, next) => {
    console.log(err)
    return res.send("There was... an unfortunate error Cap'n")
})

//Connect to the Database
mongoose.connect('mongodb://localhost:27017/bounties-list', { useNewUrlParser: true }, () => {
    console.log("Running smoothly, guv'nor!")
})



//Server
app.listen(PORT, () => {
    console.log('listening at port 9000')
})