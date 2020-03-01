const { Schema, model } = require("mongoose");

const spendGoal = new Schema(
  {
    object: String,
    goal: Number,
    currentSaving: { type: Number, default: 0 },
    status: { type: Boolean, default: true },
    daysToGoal: { type: Number, default: 1 },
    dailySaving: Number
  },
  {
    timestamps: true,
    versionKey: false
  }
);

module.exports = model("spendGoal", spendGoal);
