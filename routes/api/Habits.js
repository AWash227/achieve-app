import express from 'express';
const router = express.Router();


// model
import Habit from '../../models/Habit';

// @route GET api/Habits
// @access Public
router.get("/", (req, res) => {
  Habit.find().then(habits => res.json(habits));
});

// @route POST api/habits
// @access Public
router.post("/", (req, res) => {
  const newHabit = new Habit({
    title: req.body.title,
    description: req.body.description,
    reward: req.body.reward,
    complete: req.body.complete,
    link: req.body.link,
    simplify: req.body.simplify
  });

  newHabit.save().then(habit => res.json(habit));
});

// @route DELETE api/habits
// @access Public
router.delete("/:id", (req, res) => {
  Habit.findById(req.params.id)
    .then(habit => habit.remove().then(() => res.json({ success: true})))
    .catch(err => res.status(404).json({ success: false }))
})

export default router;
