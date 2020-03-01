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
<<<<<<< HEAD

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

router.post("/congratz", (req, res) => {
  const usr = User.findById(req.user._id);
  const sms = {
    mobilePhoneNumber: usr.mobilePhoneNumber,
    message: `Empieza tu compromiso ${usr.name}! Sé fuerte durante ${
      usr.spendGoals[usr.spendGoals.length].daysToGoal
    } días para conseguir tu ${goal.object}`
  };
  service.post("/v1/sandbox/messaging-services/sms", sms);
  res.status(201).json({ msg: "Sent!" });
});
=======
router.post("/new-goal", async (req, res)=> {
  const {goal, object} = req.body
  const usr = await User.findById(req.user._id)
  usr.spendGoals.push({
    object,
    goal,
    currentSavings:0
  })
  usr.save()
  res.status(201).json({usr})
})

router.post("/update-goal", async (req, res) => {
  const {idx, sav} = req.body
  const usr = await User.findById(req.user._id)
  usr.spendGoals[idx].currentSavings = usr.spendGoals[idx].currentSavings+sav
  if (usr.spendGoals[idx].currentSavings === usr.spendGoals[idx].goal){
    const sms = {mobilePhoneNumber:usr.mobilePhoneNumber, message:`Felicidades ${usr.name}! Has logrado tu objetivo. Aquí tienes un 10% de descuento para comprar tu nuev@ ${usr.spendGoals[idx].object}`}
    service.post("/v1/sandbox/messaging-services/sms", sms)
    usr.spendGoals[idx].status = true
  }
  usr.save()
  res.status(201).json({usr})
})
>>>>>>> 08b85ce6536f8e1c0e41fcd7c576736dcb0c5c93

module.exports = router;
