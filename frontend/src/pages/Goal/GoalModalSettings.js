import React, { useState, useContext } from "react";
import { ModalContext } from "../../contexts/modalContext";
const GoalModalSettings = () => {
  const modalctx = useContext(ModalContext);
  const [budget, setBudget] = useState(0);
  return (
    <div>
      <p>{`Te recomendamos gastar ${modalctx.price}$MXN en tu ${modalctx.object}`}</p>
      <p>¿Cuánto quieres gastar?</p>
      <input type="number" onChange={evt => setBudget(evt.target.value)} />
      <button
        onClick={evt => {
          modalctx.stateHandler("step", 2);
          modalctx.setGoal(modalctx.object, budget);
        }}
      >
        Continuar
      </button>
      <button onClick={() => modalctx.setShow()}>Cerrar</button>
    </div>
  );
};

export default GoalModalSettings;
