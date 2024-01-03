import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  client: { type: mongoose.Types.ObjectId, ref: "client" },
  camname: { String },
  location: { String },
  violationType: { String },
  tags: { String },
  assigned: { String },
  status: { String },
  imagepath: { String },
  live: { type: String, enum: ["yes", "no"] },
  comments: [
    {
      user: { type: mongoose.Types.ObjectId, ref: "user" },
      message: { String },
      time: { Date },
    },
  ],
});

const devuser = mongoose.model("devuser", userSchema);

export default devuser;
