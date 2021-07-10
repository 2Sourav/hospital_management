const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema.Types


const patientSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    pin:{
        type:String,
        required:true
    },
    number:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    
    postedBy:{
        type:ObjectId,
        ref:"User"
    }
})

mongoose.model("Patient",patientSchema)