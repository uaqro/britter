import MY_SERVICE from "../services";
import React, { useState } from "react";

const GoalModalObj = ({
  handleInputs,
  goal,
  stepping,
  checkBudget,
  handleClose
}) => {
  const [goal, setGoal] = useState({ daysToGoal: 0, object: "" });

  const handleInputs = evt =>
    setGoal({ ...goal, [evt.target.name]: evt.target.value });

  return (
    <div className={handleShow}>
      <p>¿Qué te quieres comprar?</p>
      <input
        type="text"
        name="object"
        list="prods"
        onChange={evt => handleInputs(evt)}
      />
      <datalist id="prods">
        <option value="Moto" />
        <option value="Coche" />
        <option value="Viaje" />
        <option value="Computadora" />
        <option value="Consumo" />
      </datalist>
      <button
        onClick={() => {
          stepping(false);
          checkBudget(goal);
        }}
      >
        Next Step
      </button>
      <button onClick={() => handleClose()}>Close</button>
    </div>
  );
};

export default GoalModalObj;
