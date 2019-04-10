import mongoose from 'mongoose';
const Schema = mongoose.Schema;

//Create Goal Schema
const GoalSchema = Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
  },
  reward: {
    type: String,
    required: true
  },
  complete: {
    type: Boolean,
  },
  specific: {
    type: Boolean,
    required: true
  },
  measurable: {
    type: Boolean,
    required: true
  },
  achievable: {
    type: Boolean,
    required: true
  },
  timely: {
    type: Boolean,
    required: true
  },
  habits: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Habit'
  }]
})

const Goal = mongoose.model("goal", GoalSchema, 'goals');
export default Goal;