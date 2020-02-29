import MY_SERVICE from "../services";
import React, { useState } from "react";
import GoalModalObj from "./GoalModalObj";
import GoalModalSettings from "./GoalModalSettings";

const GoalModal = ({ show, handleClose }) => {
  const handleShow = show ? "modal display-block" : "modal display-none";

  const [goal, setGoal] = useState({ daysToGoal: 0, object: "", goal: 0 });
  const [priceRecommendation, setPriceRecommendation] = useState(0);
  const [creditValues, setCreditValues] = useState({
    interest: "",
    enganche: "",
    appliesForCredit: false
  });
  const [step, setStep] = useState(true);
  const handleInputs = evt =>
    setGoal({ ...goal, [evt.target.name]: evt.target.value });
  const checkBudget = val => {
    const recommendation = MY_SERVICE.checkGoalObject(val);
    setPriceRecommendation(recommendation.price);
    appliesForCredit
      ? setCreditValues({
          appliesForCredit: true,
          interest: recommendation.interest,
          enganche: recommendation.enganche
        })
      : null;
  };
  return (
    <div className={handleShow}>
      {step ? (
        <GoalModalObj
          stepping={setStep}
          checkGoal={checkGoal}
          handleInputs={handleInputs}
          checkBudget={checkBudget}
          goal={goal}
          handleClose={handleClose}
        />
      ) : (
        <GoalModalSettings
          credit={creditValues}
          price={priceRecommendation}
          handleInputs={handleInputs}
          handleClose={handleClose}
        />
      )}
    </div>
  );
};

export default GoalModal;
