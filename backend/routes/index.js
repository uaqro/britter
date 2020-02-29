const router = require('express').Router();
const User = require("../models/User");
const axios = require("axios");
const baseHSBC = "https://mwiuw3q1fj.execute-api.us-east-1.amazonaws.com/dev";
const service = axios.create({ withCredentials: true, baseHSBC });


router.get('/', (req, res, next) => {
  res.status(200).json({ msg: 'Working' });
});
router.post("/new-goal", (req, res)=> {
  const {goal, object} = req.body
  const usr = User.findById(req.user._id)
  usr.spendGoals.push({
    object,
    goal,
    currentSavings:0
  })
  await usr.save()
  res.status(201).json({usr})
})

router.post("/update-goal", (req, res) => {
  const {idx, sav} = req.body
  const usr = User.findById(req.user._id)
  usr.spendGoals[idx].currentSavings = usr.spendGoals[idx].currentSavings+sav
  if (usr.spendGoals[idx].currentSavings === usr.spendGoals[idx].goal){
    const sms = {mobilePhoneNumber:usr.mobilePhoneNumber, message:`Felicidades ${usr.name}! Has logrado tu objetivo. Aquí tienes un 10% de descuento para comprar tu nuev@ ${usr.spendGoals[idx].object}`}
    service.post("/v1/sandbox/messaging-services/sms", sms)
    usr.spendGoals[idx].status = true
  }
  await usr.save()
  res.status(201).json({usr})
})

module.exports = router;
