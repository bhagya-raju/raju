import { json } from "express";
import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
  reviewproviderid: {
    type: String,
    required: true
  },
  reviewprovidername: {
    type: String,
    required: true
  },
  taskworker: {
    type: String,
    required: true
  },
  goalsAndObjectives:{
    type: String,
    required: true
  },
  achievementsAndResponsibilities:{
    type: String,
    required: true
  }
  ,significantMilestones:{
    type: String,
    required: true
  },
  lessonsLearned:{
    type: String,
    required: true
  },
  teamDynamicsChanges:{
    type: String,
    required: true
  },
  teamImprovements:{
    type: String,
    required: true
  },
  comments: {
    type: String,
    default:null
  },
  rating: {
    type: Number,
    default:null
  },
  status:{
    type:Boolean,
    default:false
  }
});

const Review = mongoose.model("Review", reviewSchema);

export default Review;
