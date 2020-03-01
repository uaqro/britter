const router = require("express").Router();
const User = require("../models/User");
const axios = require("axios");
const spendGoal = require("../models/spendGoal");
const baseHSBC = "https://mwiuw3q1fj.execute-api.us-east-1.amazonaws.com/dev";
const service = axios.create({ withCredentials: true, baseHSBC });

router.get("/", (req, res, next) => {
  res.status(200).json({ msg: "Working" });
});
router.post("/new-goal", async (req, res) => {
  const { goal, object, daysToGoal } = req.body;
  const goal = await spendGoal.create({ object, goal, daysToGoal });
  const usr = await User.findByIdAndUpdate(req.user._id, {
    $push: { spendGoals: goal._id }
  }).populate("spendGoals");
  res.status(201).json({ usr });
});

router.post("/update-goal", async (req, res) => {
  const { goal, sav } = req.body;
  const goal = await spendGoal.findById(goal);
  goal.currentSaving = goal.currentSaving + sav;
  if (goal.currentSaving === goal.goal) {
    goal.status = false;
    await goal.save();
    const usr = await User.findAndUpdate(req.user._id, {
      $pull: { spendGoals: goal._id }
    }).populate("spendGoals");
    const sms = {
      mobilePhoneNumber: usr.mobilePhoneNumber,
      message: `Felicidades ${usr.name}! Has logrado tu objetivo. Aquí tienes un 10% de descuento para comprar tu nuev@ ${goal.object}`
    };
    service.post("/v1/sandbox/messaging-services/sms", sms);
    res.status(201).json({ usr });
  } else {
    goal.save();
    const usr = await User.findById(req.user._id).populate("spendGoals");
    res.status(201).json({ usr });
  }
});

module.exports = router;
