const express = require('express')
require('dotenv').config()
let cors = require('cors')
// const authenticationRoures = require()

const  authenticationRoutes = require('./routes/authenticationRoutes')
const filesharingRoute = require('./routes/filesharingRotes')
const app = express()



// middleware

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

// route middleware
app.use('/api/authentication',authenticationRoutes)
app.use('/api/filesharing',filesharingRoute)

module.exports = app
