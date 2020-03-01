require("dotenv").config();
const express = require("express");
const router = express.Router();
const User = require("../models/User");
const passport = require("../config/passport");
const axios = require("axios");
const baseHSBC = "https://mwiuw3q1fj.execute-api.us-east-1.amazonaws.com/dev";
const service = axios.create({ withCredentials: true, baseHSBC });
const header = {
  "x-api-key": process.env.BK_PS,
  "X-User": "Team1",
  "X-Client": process.env.BK_CL,
  "X-Password": process.env.BK_PSW
};

router.post("/signup", async (req, res, next) => {
  const hsbcAccount = await service.get(
    "/v1/sandbox/checking-accounts/profile",
    {
      params: {
        query: req.body.cc
      },
      header
    }
  );
  const hsbcUserData = await service.get(
    `/v1/sandbox/clients/${hsbcAccount.accountProfile.firstHolder.clientNumber}/profile`,
    {
      header
    }
  );
  const newUser = {
    cc: req.body.cc,
    name: hsbcUserData.clientProfile.name,
    balance: hsbcAccount.accountProfile.balance,
    clientNumber: hsbcAccount.accountProfile.firstHolder.clientNumber,
    mobilePhoneNumber: hsbcUserData.clientProfile.homePhone
  };

  User.register(newUser, req.body.password)
    .then(user => res.status(201).json({ user }))
    .catch(err => res.status(500).json({ err }));
});

router.post("/login", passport.authenticate("local"), (req, res, next) => {
  const { user } = req;
  res.status(200).json({ user });
});

router.get("/logout", (req, res, next) => {
  req.logout();
  res.status(200).json({ msg: "Logged out" });
});

router.get("/profile", isAuth, (req, res, next) => {
  User.findById(req.user._id)
    .then(user => res.status(200).json({ user }))
    .catch(err => res.status(500).json({ err }));
});

router.get("/loggedin", (req, res, next) => {
  User.findById(req.user._id)
    .then(user => res.status(200).json({ user }))
    .catch(err => res.status(500).json({ err }));
});

function isAuth(req, res, next) {
  req.isAuthenticated()
    ? next()
    : res.status(401).json({ msg: "Log in first" });
}

module.exports = router;
