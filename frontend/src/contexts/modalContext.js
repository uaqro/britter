import React, { Component, createContext } from "react";
import MY_SERVICE from "../services/index.js";
export const ModalContext = createContext();

class ModalProvider extends Component {
  state = {
    show: false,
    object: "",
    budget: 0,
    step: 0,
    price: 0,
    dayliPay: 0,
    daysToGoal: 0,
    credit: false,
    goal: {}
  };

  setShow = () => {
    this.setState({ show: !this.state.show });
  };
  submitGoal = async () => {
    const goal = {
      name: this.state.object,
      goal: this.state.dayliPay * this.state.daysToPay,
      dailyPay: this.state.dayliPay,
      daysToGoal: this.state.daysToGoal
    };
    this.setState({ goal });
    await MY_SERVICE.newGoal(goal);
    MY_SERVICE.isLogged();
  };

  checkBudget = val => {
    this.setState({ object: val });
    const recommendation = MY_SERVICE.checkGoalObject(val);
    this.setState({ price: recommendation.price });
  };

  setGoal = (val, obj) => {
    const goals = MY_SERVICE.setGoal({ object: obj, budget: val });
    this.setState({
      dayliPay: goals.dayliPay,
      credit: goals.credit,
      daysToGoal: goals.daysToGoal
    });
    MY_SERVICE.congratz();
    this.setState({ step: 3 });
  };
  stateHandler = (key, val) => {
    this.setState({ [key]: val });
  };
  render() {
    return (
      <ModalContext.Provider
        value={{
          handleLocation: this.checkBudget,
          show: this.state.show,
          object: this.state.object,
          budget: this.state.budget,
          step: this.state.step,
          price: this.state.price,
          dayliPay: this.state.dayliPay,
          daysToPay: this.state.daysToPay,
          credit: this.state.credit,
          checkBudget: this.checkBudget,
          setGoal: this.setGoal,
          setShow: this.setShow,
          stateHandler: this.stateHandler,
          goal: this.state.goal,
          submitGoal: this.submitGoal
        }}
      >
        {this.props.children}
      </ModalContext.Provider>
    );
  }
}

export default ModalProvider;
