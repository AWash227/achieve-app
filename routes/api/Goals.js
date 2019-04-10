import express from 'express';
const router = express.Router();


// model
import Goal from '../../models/Goal';

// @route GET api/Goal
// @access Public
router.get("/", (req, res) => {
  Goal.find().then(goals => res.json(goals));
});

// @route GET one api/Goal
// @access Public
router.get('/:id', (req,res) => {
  Goal.findById(req.params.id)
    .then((res) => {
      res.json();
    })
    .catch((err) => {
      console.log(err)
    })
})

// @route POST api/habits
// @access Public
router.post("/", (req, res) => {
  const newGoal = new Goal({
    title: req.body.title,
    description: req.body.description,
    reward: req.body.reward,
    complete: req.body.complete,
    specific: req.body.specific,
    measurable: req.body.measurable,
    achievable: req.body.achievable,
    timely: req.body.timely
  });

  newGoal.save().then(goal => res.json(goal));
});

// @route DELETE api/habits
// @access Public
router.delete("/:id", (req, res) => {
  Goal.findById(req.params.id)
    .then(goal => goal.remove().then(() => res.json({ success: true})))
    .catch(err => res.status(404).json({ success: false }))
})

export default router;
