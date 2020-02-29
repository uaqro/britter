import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Concierge = props => {
  const [val, setVal] = useState(0);
  const [activity, setActivity] = useState("");
  useEffect(async () => {
    //   MY_SERVICE.getTodaysBudget().then(data=> setVal(data.budget))
  }, []);
  useEffect(async () => {
    // const map = new mapboxgl.Map({
    //   container: this.mapContainer,
    //   style: "mapbox://styles/mapbox/streets-v11",
    //   center: [this.state.lng, this.state.lat],
    //   zoom: this.state.zoom
    // });
  }, []);

  return (
    <Concierge>
      <p>Tu presupuesto para hoy es de {val}$MXN</p>
      <p>¿Qué quieres hacer hoy?</p>
      {/* Aquí tendríamos que poner algunos iconos de las cosas principales que actúen como inputs radiales del form */}
      <form>
        <input
          type="text"
          name="activity"
          onChange={evt => setActivity(evt.value)}
        />
        <input
          type="number"
          name="qty"
          onChange={evt =>
            setSaveGoal({ ...signUpForm, [evt.name]: evt.value })
          }
        />
        <button>Set me up</button>
      </form>
    </Concierge>
  );
};

export default FirstGoal;
