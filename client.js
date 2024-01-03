import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name:{
    type:String,
    required:true
  },
  email:{
    type:String,
    required:true
  },
  mobile:{
    type:Number,
    required:true
  }
});

const client = mongoose.model("client", userSchema);

export default client;
