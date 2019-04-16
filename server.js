const express = require('./node_modules/express')
const app = express()
const mongoose = require('mongoose')
const morgan = require('./node_modules/morgan')
require("dotenv").config();
const path = require("path")


const PORT = process.env.PORT || 8000;

//Middleware
app.use(morgan('dev'))
app.use(express.json())
app.use(express.static(path.join(__dirname, "client", "build")))


//Routes

app.use('/bounties', require('./routes/bounties'))

//Error Handler Middleware

app.use((err, req, res, next) => {
    console.log(err)
    return res.send("There was... an unfortunate error Cap'n")
})

//Connect to the Database
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/bounties-list', { useNewUrlParser: true }, () => {
    console.log("Running smoothly, guv'nor!")
})

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

//Server
app.listen(PORT, () => {
    console.log('listening at port 8000')
})