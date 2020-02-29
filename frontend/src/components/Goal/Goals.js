import React, { useState, useEffect, useContext, createContext } from "react";
import MY_SERVICE from "../../services/index";
import styled from "styled-components";

const Goals = props => {
  const [goal, setGoal] = useState({ daysToGoal: 0, object: "", goal: 0 });
  const [priceRecommendation, setPriceRecommendation] = useState(0);
  const [creditValues, setCreditValues] = useState({
    interest: "",
    enganche: ""
  });
  const handleInputs = evt =>
    setGoal({ ...goal, [evt.target.name]: evt.target.value });
  const checkBudget = val => {
    const recommendation = MY_SERVICE.checkGoalObject(val);
    setPriceRecommendation(recommendation.price);
    appliesForCredit
      ? setCreditValues({
          interest: recommendation.interest,
          enganche: recommendation.enganche
        })
      : null;
  };
  return (
    <GoalsLayout>
      {ctx.user.spendGoals.map(element => (
        <GoalCard goal={element} />
      ))}
      {ctx.user.spendGoals.length < 3 ? <GoalModal /> : <></>}
    </GoalsLayout>
  );
};
