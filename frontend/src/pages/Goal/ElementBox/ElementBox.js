import React, { useState, useEffect } from "react";
import { ElementBoxStyles } from "./ElementBoxStyles";
import MY_SERVICE from "../../../services/index";

const ElementBox = ({ element }) => {
  return (
    <ElementBoxStyles>
      <p>{element.name}</p>
      <p>{element.goal}</p>
      <p>{element.daysToGoal}</p>
      <button
        onClick={() => MY_SERVICE.updateGoal(element._id, element.dayliPay)}
      >
        {`Deposita tus ${element.dayliPay}$MXN de hoy`}
      </button>
    </ElementBoxStyles>
  );
};

export default ElementBox;
