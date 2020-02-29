import React, { useState, useEffect, useContext, createContext } from "react";
import MY_SERVICE from "../../services/index";
import styled from "styled-components";

const Goals = props => {
  const [handleModal, setModal] = useState(false);
  return (
    <GoalsLayout>
      {ctx.user.spendGoals.map(element => (
        <GoalCard goal={element} />
      ))}
      {ctx.user.spendGoals.length < 3 ? (
        <GoalModal show={handlemodal} handle={setModal} />
      ) : (
        <></>
      )}
    </GoalsLayout>
  );
};
