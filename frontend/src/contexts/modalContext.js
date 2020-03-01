import React, { Component, createContext } from 'react';
import MY_SERVICE from '../services/index.js';
export const ModalContext = createContext();

class ModalProvider extends Component {
	state = {
		show: false,
		object: '',
		budget: 0,
		step: 0,
		price: 0,
		dayliPay: 0,
		daysToGoal: 0,
		credit: false,
		goal: 0,
		submitedGoal: {}
	};

	setShow = () => {
		this.setState({ show: !this.state.show });
	};

	submitGoal = () => {
		const goal = {
			object: this.state.object,
			goal: this.state.goal,
			dailyPay: this.state.dayliPay,
			currentSaving: 0,
			status: true,
			daysToGoal: this.state.daysToGoal
		};
		this.setState({ submitedGoal: goal });
		MY_SERVICE.newGoal(goal);
		MY_SERVICE.isLogged();
		MY_SERVICE.congratz();
		this.setState({ step: 3 });
	};

	checkBudget = async val => {
		this.setState({ object: val });
		const recommendation = await MY_SERVICE.checkGoalObject(val);
		this.setState({
			price: recommendation.data.price,
			step: 1,
			budget: recommendation.data.price
		});
	};

	checkGoal = async () => {
		const goalz = await MY_SERVICE.getGoalStats(this.state.budget);
		console.log(goalz);
		this.setState({
			credit: goalz.data.goal.credit,
			daysToGoal: Math.round(goalz.data.goal.daysToGoal),
			dayliPay: Math.round(goalz.data.goal.dayliPay),
			goal: goalz.data.goal.goal,
			step: 2
		});
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
					daysToGoal: this.state.daysToGoal,
					credit: this.state.credit,
					checkBudget: this.checkBudget,
					setGoal: this.setGoal,
					setShow: this.setShow,
					stateHandler: this.stateHandler,
					goal: this.state.goal,
					submitGoal: this.submitGoal,
					checkGoal: this.checkGoal,
					submitedGoal: this.state.submitedGoal
				}}
			>
				{this.props.children}
			</ModalContext.Provider>
		);
	}
}

export default ModalProvider;
