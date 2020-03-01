require('dotenv').config();
const express = require('express');
const router = express.Router();
const User = require('../models/User');
const passport = require('../config/passport');
const axios = require('axios');
const CircularJSON = require('circular-json');
const baseHSBC = 'https://mwiuw3q1fj.execute-api.us-east-1.amazonaws.com/dev';

const instance = axios.create();

instance.defaults.baseURL =
	'https://mwiuw3q1fj.execute-api.us-east-1.amazonaws.com/dev/';
instance.defaults.headers.common['x-api-key'] =
	'UFN0vZMOV18e1xzmRQGrn5yqGpjLmTuj39FlvQDG';
instance.defaults.headers.common['x-User'] = 'TEAM1';
instance.defaults.headers.common['x-Client'] =
	'0425c644a72d4ec7bdf15c5d29b705b6';
instance.defaults.headers.common['x-Password'] =
	'4d0313fcB8f54387bbfa67Da4E8eb7Ea';

router.get('/get-user', (req, res) => {
	instance
		.get('/v1/sandbox/checking-accounts/profile', {
			params: {
				accountNumber: 4077641025
			}
		})
		.then(response => {
			return response;
		})
		.then(json => {
			const data = json.data.accountProfile;
			res.status(200).json(data);
		})
		.catch(err => {
			console.log(err);
		});
});

router.post('/signup', (req, res) => {
	const { email, password, accountNumber } = req.body;
	console.log(email);
	console.log(password);
	console.log(accountNumber);

	instance
		.get('/v1/sandbox/checking-accounts/profile', {
			params: {
				accountNumber: accountNumber
			}
		})
		.then(response => {
			return response;
		})
		.then(json => {
			const data = json.data;
			const newUser = {
				email,
				name: data.fistHolder,
				rfc: data.rfc,
				balance: data.balance,
				currency: data.currency,
				originalBalance: data.originalBalance,
				level: 1,
				coins: 0,
				accountNumber: accountNumber,
				welcome: false
			};
			User.register(newUser, password)
				.then(user => {
					res.status(201).json({ user });
				})
				.catch(err => {
					res.status(500).json({ err });
				});
		})
		.catch(err => {
			console.log(err);
		});
});

router.post('/login', (req, res) => {
	const { email, password } = req.body;
	User.findOne({ email })
		.then(user => {
			res.status(200).json({ user });
		})
		.catch(err => {
			console.log(err);
		});
});

router.get('/logout', (req, res, next) => {
	req.logout();
	res.status(200).json({ msg: 'Logged out' });
});

router.get('/profile', isAuth, (req, res, next) => {
	User.findById(req.user._id)
		.then(user => res.status(200).json({ user }))
		.catch(err => res.status(500).json({ err }));
});

// router.get('/loggedin', (req, res, next) => {
// 	User.findById(req.user._id)
// 		.then(user => res.status(200).json({ user }))
// 		.catch(err => res.status(500).json({ err }));
// });

function isAuth(req, res, next) {
	req.isAuthenticated()
		? next()
		: res.status(401).json({ msg: 'Log in first' });
}

module.exports = router;
