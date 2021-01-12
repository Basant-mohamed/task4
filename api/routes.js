const express = require('express')
const movieArr = require('./control')
const rout = express.Router()

rout.get('/movies', (req,res)=>{
    try{
       console.log('hhhhhh')
        res.send(movieArr)
    }
    catch(e){
         res.send(e)
    }
       
    
})

module.exports = rout