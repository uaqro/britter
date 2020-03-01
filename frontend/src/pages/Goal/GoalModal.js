import React, { useState, useContext } from "react";
import GoalModalObj from "./GoalModalObj";
import GoalModalSettings from "./GoalModalSettings";
import GoalModalCongratz from "./GoalModalCongratz";
import GoalModalSubmit from "./GoalModalSubmit";
import { ModalContext } from "../../contexts/modalContext";
import styled from "styled-components";

const Wrapper = styled.div`
  .display-block {
  }
  .display-none {
    display: none;
  }
`;

const GoalModal = () => {
  const modalctx = useContext(ModalContext);
  const handleShow = modalctx.show
    ? "modal display-block"
    : "modal display-none";

  return (
    <Wrapper>
      <div className={handleShow}>
        {modalctx.step === 0 ? (
          <GoalModalObj />
        ) : modalctx.step === 1 ? (
          <GoalModalSettings />
        ) : modalctx.step === 2 ? (
          <GoalModalSubmit />
        ) : modalctx.step === 3 ? (
          <GoalModalCongratz />
        ) : (
          <></>
        )}
      </div>
    </Wrapper>
  );
};

export default GoalModal;
