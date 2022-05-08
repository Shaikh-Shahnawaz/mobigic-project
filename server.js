const app = require('./app')

const mongoose = require('mongoose')

const PORT = process.env.PORT
const DB = process.env.MONGO_URL
const HOST = process.env.HOST



mongoose.connect(DB).then(data=>{
    console.log('Database Connected !!')
    app.listen(PORT,()=>{
        console.log(`Server listening to ${HOST}:${PORT}`)
    })
}).catch(err=>{
    console.log('Connection error',err)
})
