const mongoose=require('mongoose')
const userschema=mongoose.Schema({
    firstName:String,
    lastName:String,
    age:Number,
    mark:Number,
    address:String
})



const usermodel=new mongoose.model('users',userschema)

module.exports=usermodel