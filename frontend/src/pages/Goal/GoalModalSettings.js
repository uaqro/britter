import MY_SERVICE from "../services";
import React, { useState } from "react";

const GoalModalSettings = ({ credit, price, handleInputs, handleClose }) => {
  return (
    <div className={handleShow}>
      <form onSubmit={() => MY_SERVICE.newGoal(goal)}>
        <input
          type="text"
          name="object"
          onChange={evt => handleInputs(evt)}
          onBlur={evt => checkBudget(evt.target.value)}
        />
        <input type="number" name="goal" onChange={evt => handleInputs(evt)} />
        <input
          type="number"
          name="daysToGoal"
          onChange={evt => handleInputs(evt)}
        />
      </form>
    </div>
  );
};

export default GoalModalSettings;
