const express=require('express')
const router=express.Router()
const usermodel=require('../Model/Usermodel')


router.post('/create',(req,res)=>{
    let Student=new usermodel({
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        age:req.body.age,
        mark:req.body.mark,
        address:req.body.address
    })
    Student.save()
    .then(resp=>res.send(resp))
    .catch(err=>res.send(err))
})

module.exports = router;
