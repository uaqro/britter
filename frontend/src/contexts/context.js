import React, { Component, createContext } from 'react';
import MY_SERVICE from '../services/index';

export const MyContext = createContext();

class MyProvider extends Component {
	state = {
		user: {
			name: '',
			cc: '',
			email: '',
			balance: '',
			clientNumber: '',
			fixedIncome: 0,
			fixedSpend: 0,
			SavingObj: 0,
			level: 0,
			spendGoals: []
		},
		loginForm: {
			email: '',
			password: ''
		},
		formSignup: {
			email: '',
			password: '',
			cc: ''
		},
		location: { longitude: 0, latitude: 0 },
		loggedUser: {}
	};

	componentDidMount() {
		if (document.cookie) {
			MY_SERVICE.getUser()
				.then(({ msg }) => {
					console.log(msg);
					this.setState({ loggedUser: true });
				})
				.catch(err => console.log(err));
		}
	}

	componentDidMount() {}

	async isLogged() {
		const user = await MY_SERVICE.isLogged();
		this.setState({ user });
	}

	handleLocation(longitude, latitude) {
		this.setState({
			location: { longitude, latitude }
		});
	}

	handleProductSubmit = async e => {
		e.preventDefault();
		console.log(this.state.location);
		await MY_SERVICE.uploadProduct(this.state.location);
	};

	update = (prevState, payload) => {
		this.setState({
			...prevState,
			// formSignup:{
			//     ...prevState.formSignup,
			//     ...payload
			// },
			loginForm: {
				...prevState.loginForm,
				...payload
			}
		});
	};

	render() {
		return (
			<MyContext.Provider
				value={{
					handleLocation: this.handleLocation,
					state: this.state,
					user: this.state.user,
					isLogged: this.isLogged,
					updateAction: this.update
				}}
			>
				{this.props.children}
			</MyContext.Provider>
		);
	}
}

export default MyProvider;