import React, { useState, useEffect, useContext, createContext } from "react";
import MY_SERVICE from "../../services/index";
import styled from "styled-components";
const GoalCard = styled.div``;

const Goals = props => {
  const [modalHandler, setModal] = useState(false);
  return (
    <GoalsLayout>
      {ctx.user.spendGoals.map(element => (
        <>
          <GoalCard goal={element} />
          <button onClick={() => MY_SERVICE.updateGoal(element._id, dayli)}>
            {`Add ${dailySaving}`}
          </button>
        </>
      ))}
      {ctx.user.spendGoals.length < 3 ? (
        <GoalModal
          show={modalHandler}
          handle={setModal}
          onClick={() => setModal(!modalHandler)}
        />
      ) : (
        <></>
      )}
    </GoalsLayout>
  );
};
export default Goals;
