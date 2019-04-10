import mongoose from 'mongoose';
const Schema = mongoose.Schema;

//Create Habit Schema
const HabitSchema = Schema({
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
  linkObj: {
    type: String,
    required: true
  },
  connector: {
    type: String,
    required: true
  },
  goal: 
  {
    type: Schema.Types.ObjectId,
    ref: 'Goal'
  },
})

const Habit = mongoose.model("habit", HabitSchema, 'habits');
export default Habit;