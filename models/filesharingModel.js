const mongoose = require('mongoose')

const fileSharingSchema = mongoose.Schema({
    filename:{
        type:String,
        required:true,
    },
    path:{
        type:String,
        required:true,
    },
    size:{
        type:Number,
        required:true
    },
    uuid:{
        type:String,
        required:true
    },
    sender:{
        type:String,
        required:false
    },
    receiver:{
        type:String,
        required:false
    },
})

const fileSharing = mongoose.model('fileSharing',fileSharingSchema)

module.exports = fileSharing