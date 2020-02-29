import MY_SERVICE from "../services";
import React, { useState } from "react";

const MailModal = ({ show, handleClose, producto }) => {

<form onSubmit={() => MY_SERVICE.newGoal(goal)}>
          <input
            type="text"
            name="object"
            onChange={evt => handleInputs(evt)}
            onBlur={evt => checkBudget(evt.target.value)}
          />
          <input
            type="number"
            name="goal"
            onChange={evt => handleInputs(evt)}
          />
          <input
            type="number"
            name="daysToGoal"
            onChange={evt => handleInputs(evt)}
          />
        </form>