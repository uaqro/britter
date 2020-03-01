import React, { useState } from "react";
import MY_SERVICE from "../services/index";
import styled from "styled-components";

const Presentation = styled.div``;

const Welcome = props => {
  const [goal, setGoal] = useState({
    daysToGoal: 0,
    object: "",
    goal: 0
  });
  const [redirect, setRedirect] = useState(true);
  const handleInputs = evt =>
    setGoal({ ...goal, [evt.target.name]: evt.target.value });

  const setNewGoal = () => {
    MY_SERVICE.newGoal(goal);
    setRedirect(!redirect);
  };
  return (
    <>
      {redirect ? (
        <Presentation>
          <form onSubmit={() => setNewGoal()}>
            <input
              type="text"
              name="object"
              onChange={evt => handleInputs(evt)}
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
            <button>Add goal</button>
          </form>
        </Presentation>
      ) : (
        <Redirect
          to={{
            pathname: "/concierge"
          }}
        />
      )}
    </>
  );
};

export default Welcome;
