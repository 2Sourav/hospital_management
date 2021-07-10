const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
// const requireLogin = require('../middleware/requireLogin')
const Patient = mongoose.model("Patient")




router.post('/addpatient',(req,res)=>{
    const {name,pin, number, address, email} = req.body
    if(!name || !number || !address){
        return res.status(422).json({error:"please add all the fields"})
    }
        // req.user.password = undefined

    const patient = new Patient({
        name,
        pin,
        number,
        address,
        email,
        postedBy:req.user
    })
    patient.save().then(result=>{
        res.json({patient:result})
    })
    .catch(err=>{
        console.log(err)
    })
})

// router.get('/patientno',(req,res)=>{
//     Patient.find()
//     // .populate("postedBy","_id name")
//     .then(patients=>{
//         res.json({patients})
//     })
//     .catch(er=>{
//         console.log(err)
//     })
// })
router.get('/patientno',(req,res)=>{
    Patient.find()
    
    .then(patients=>{
        res.json({patients})
    })
    .catch(err=>{
        console.log(err)
    })
})


router.get('/allpatients',(req,res)=>{
    Patient.find()
    // .populate("postedBy","_id name")
    .then(patients=>{
        res.json({patients})
    })

    .catch(err=>{
        console.log(err)
    })
})
    
 







module.exports = router