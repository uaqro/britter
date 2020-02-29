import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ElementBox from "./ElementBox";

const Concierge = props => {
  const [val, setVal] = useState(0);
  const [activity, setActivity] = useState("");
  const [ask, setAsk] = useState(false);
  const [recommendations, setRecommendations] = useState([]);
  const [location, setLocation] = useState([]);
  useEffect(async () => {
    //   MY_SERVICE.getTodaysBudget().then(data=> setVal(data.budget))
  }, []);

  handleSubmit = () => {
    // MY_SERVICE.recommendations({activity,location}).then(data=> setRecommendations(data.recommendations))
    // setAsk(!ask)
  };

  return (
    <>
      {ask ? (
        <Concierge>
          <p>Tu presupuesto para hoy es de {val}$MXN</p>
          <p>¿Qué quieres hacer hoy?</p>
          {/* Aquí tendríamos que poner algunos iconos de las cosas principales que actúen como inputs radiales del form */}
          <form>
            <input
              type="text"
              name="activity"
              onChange={evt => setActivity(evt.target.value)}
            />

            <button>GimmeGoodShit</button>
          </form>
        </Concierge>
      ) : (
        <Concierge>
          {recommendations.map(el => (
            <ElementBox element={el} />
          ))}
          {/* Lo pongo en componente a parte para facilitar el código aquí*/}
          <button onClick={() => setAsk(!ask)}>GoBack</button>
        </Concierge>
      )}
    </>
  );
};

export default FirstGoal;
