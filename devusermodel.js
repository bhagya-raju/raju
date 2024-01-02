import mongoose from "mongoose";

const userSchema= new mongoose.Schema(
    {
        fullname:{
            type:String,
            required:true
        },
        email:{
            type:String,
            required:true,
            unique:true
        },
        mobile:{
            type:Number,
            required:true
        },
        gender:{
            type:String,
            required:true
        },
        dob:{
            type:Date,
            required:true
        },
        role:{
            type:String,
            required:true
        },
        review:{
            type:Boolean,
            default:false
        },
        password:{
            type:String,
            default:null    
        },
        assignedto:{
            type:String,
            default:null
        },
        active:{
            type:Boolean,
            default:false
        },
        reviewed:{
            type:Boolean,
            default:null
        },
        secretkey:{
            type:String,
            required:true
        },
        image:{
            type:String,
            required:true
        },
        doj: {
            type: Date,
            default: Date.now
        },
        position:{
            type:String,
            required:true
        },
        address: {
            type: String,
            default: true
        }
    }
)

const devuser=mongoose.model("devuser",userSchema)

export default devuser;