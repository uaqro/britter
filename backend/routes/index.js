const router = require("express").Router();
const User = require("../models/User");
const axios = require("axios");
const spendGoal = require("../models/spendGoal");
const baseHSBC = "https://mwiuw3q1fj.execute-api.us-east-1.amazonaws.com/dev";

router.get("/", (req, res, next) => {
  res.status(200).json({ msg: "Working" });
});

router.post("/update-goal", async (req, res) => {
  const { goal, sav } = req.body;
  const goal2 = await spendGoal.findById(goal);
  goal2.currentSaving = goal.currentSaving + sav;
  if (goal2.currentSaving === goal.goal) {
    goal2.status = false;
    await goal2.save();
    const usr = await User.findById(req.user._id).populate("spendGoals");
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
router.post("/new-goal", async (req, res) => {
  const { goal, object } = req.body;
  const usr = await User.findById(req.user._id);
  usr.spendGoals.push({
    object,
    goal,
    currentSavings: 0
  });
  usr.save();
  res.status(201).json({ usr });
});

router.post("/calc-goal", (req, res) => {
  const user = User.findById(req.user._id).populate("spendGoals");
  let currentExpenses = 0;
  //POR FALTA DE DATOS NO PODEMOS PONER EL % DE INCOME ASÍ QUE ASUMIREMOS QUE SU INCOME ES DE 30.000$MXN MENSUALES
  user.spendGoals.forEach(
    e => (currentExpenses = currentExpenses + e.dailyPay * 30)
  );
  const dayliSavings = (30000 * 0.15 - currentExpenses) / 30;
  const times = budget / dayliSavings;
  if (times > 90) {
    const enganche =
      (budget * 0.3) / dayliSavings < 90 ? budget * 0.3 : budget * 0.2;
    const goal = {
      credit: true,
      daysToGoal: enganche / dayliSavings,
      dayliPay: enganche / (enganche / dayliSavings),
      goal: enganche
    };
    res.status(201).json({ goal });
  } else {
    const goal = {
      credit: false,
      daysToGoal: budget / dayliSavings,
      dayliPay: dayliSavings,
      goal: budget
    };
    res.status(201).json({ goal });
  }
});

router.post("/check", (req, res) => {
  //ESTO ES UNA RUTA PORQUE LOS 30000 TENDRÍAN QUE SER EL MONTHLYINCOME DEL INDIVIDUO
  switch (req.object) {
    case "Moto":
      res.status(201).json({ price: 0.15 * 12 * 30000 });
    case "Coche":
      res.status(201).json({ price: 0.25 * 12 * 30000 });
    case "Viaje":
      res.status(201).json({ price: 0.05 * 12 * 30000 });
    case "Computadora":
      res.status(201).json({ price: 0.05 * 12 * 30000 });
    case "Consumo":
      res.status(201).json({ price: 0.07 * 30000 });
    case "Tenis":
      res.status(201).json({ price: 0.07 * 30000 });
  }
});

module.exports = router;
