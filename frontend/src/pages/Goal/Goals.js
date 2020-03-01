import React, { useContext } from "react";
import GoalModal from "./GoalModal";
import { MyContext } from "../../contexts/context";
import { ModalContext } from "../../contexts/modalContext";
import ElementBox from "./ElementBox/ElementBox";
import { GoalsLayout } from "./GoalStyles";

const Goals = props => {
  return (
    <GoalsLayout>
      <MyContext.Consumer>
        {context => (
          <ModalContext.Consumer>
            {modalctx => (
              <>
                {context.user.spendGoals.map(element => (
                  <ElementBox goal={element} />
                ))}
                {context.user.spendGoals.length < 3 ? (
                  <button onClick={modalctx.setShow}>Añadir goal</button>
                ) : (
                  <></>
                )}
                <GoalModal />
              </>
            )}
          </ModalContext.Consumer>
        )}
      </MyContext.Consumer>
    </GoalsLayout>
  );
};
export default Goals;
