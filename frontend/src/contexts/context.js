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
			spendGoals: [
				{
					object: 'Air Force1 2007',
					goal: 1000,
					dayliPay: 50,
					currentSaving: 550,
					status: true,
					daysToGoal: 20
				}
			]
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
		// location: { longitude: 0, latitude: 0 },
		loggedUser: {},
		giro: ''
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

	// componentDidMount() {}

	isLogged = async () => {
		const user = await MY_SERVICE.isLogged();
		this.setState({ user });
	};

	handleLocation = (longitude, latitude) => {
		this.setState({
			location: { longitude, latitude }
		});
		// MY_SERVICE.postLocation()
	};

	handleProductSubmit = (e, activity) => {
		this.setState({
			giro: activity
		});
		console.log(activity);
		// await MY_SERVICE.uploadProduct(this.state.location);
	};

	handleLogin = (cb) => {
    // const msg = 
    console.log(this.state.loginForm)
    MY_SERVICE.login(this.state.loginForm)
      .then(({ data }) => {
        console.log(data)
        this.setState({ loggedUser: true, user: data.user })
        this.setState({ commerce: data.commerce })
        cb();
      }).catch(error => {
        this.setState({errors:error.response})
        })
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
