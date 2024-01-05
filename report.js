import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  client: { type: mongoose.Types.ObjectId, ref: "client" },
  camname: { type:String, },
  location: { type:String },
  violationtype: { type:String },
  tags: { type:String },
  assignedto: { type:String },
  status: { type:String },
  imagepath: { type:String },
  time: {
    type: Date,
    default: Date.now
},
  live: { type: String, enum: ["yes", "no"] },
  comments: [
    {
      user: { type: mongoose.Types.ObjectId, ref: "user" },
      message: { type:String },
      time: {
        type: Date,
        default: Date.now
    },
    },
  ],
});

const report = mongoose.model("report", userSchema);

export default report;
