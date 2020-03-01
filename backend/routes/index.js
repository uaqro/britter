const router = require('express').Router();
const User = require('../models/User');
const axios = require('axios');
const spendGoal = require('../models/spendGoal');
const baseHSBC = 'https://mwiuw3q1fj.execute-api.us-east-1.amazonaws.com/dev';
// const instance = axios.create();

// instance.defaults.baseURL =
// 	'https://mwiuw3q1fj.execute-api.us-east-1.amazonaws.com/dev/';
// instance.defaults.headers.common['x-api-key'] =
// 	'UFN0vZMOV18e1xzmRQGrn5yqGpjLmTuj39FlvQDG';
// instance.defaults.headers.common['x-User'] = 'TEAM1';
// instance.defaults.headers.common['x-Client'] =
// 	'0425c644a72d4ec7bdf15c5d29b705b6';
// instance.defaults.headers.common['x-Password'] =
// 	'4d0313fcB8f54387bbfa67Da4E8eb7Ea';

router.get('/', (req, res, next) => {
	res.status(200).json({ msg: 'Working' });
});
router.post('/test', (req, res) => {
	// const { email, password, accountNumber } = req.body;
	// instance
	// 	.get('/v1/sandbox/checking-accounts/profile', {
	// 		params: {
	// 			accountNumber: 4077641009
	// 		}
	// 	})
	// 	.then(response => {
	// let userData = JSON.parse(response);
	// userData = response.data.response;
	// console.log(response);
	// res.status(200).json({
	// 	response
	// });
	// const newUser = {
	// 	email,
	// 	name: userData.fistHolder,
	// 	rfc: userData.rfc,
	// 	balance: userData.balance,
	// 	currency: userData.currency,
	// 	originalBalance: userData.originalBalance,
	// 	level: 1,
	// 	coins: 0,
	// 	accountNumber: accountNumber,
	// 	welcome: false
	// };
	// User.register(newUser, password)
	// 	.then(user => {
	// 		res.status(201).json({ user });
	// 	})
	// 	.catch(err => {
	// 		res.status(500).json({ err });
	// 	});
	// })
	// .catch(err => {
	// 	console.log(err);
	// });
});
// router.post('/new-goal', async (req, res) => {
// 	const { goal, object, daysToGoal } = req.body;
// 	const goal2 = await spendGoal.create({ object, goal, daysToGoal });
// 	const usr = await User.findByIdAndUpdate(req.user._id, {
// 		$push: { spendGoals: goal._id }
// 	}).populate('spendGoals');
// 	res.status(201).json({ usr });
// });
router.post('/new-goal', async (req, res) => {
	const { goal, object } = req.body;
	const usr = await User.findById(req.user._id);
	usr.spendGoals.push({
		object,
		goal,
		currentSavings: 0
	});
	usr.save();
	res.status(201).json({ usr });
});

router.post('/update-goal', async (req, res) => {
	const { idx, sav } = req.body;
	const usr = await User.findById(req.user._id);
	usr.spendGoals[idx].currentSavings = usr.spendGoals[idx].currentSavings + sav;
	if (usr.spendGoals[idx].currentSavings === usr.spendGoals[idx].goal) {
		const sms = {
			mobilePhoneNumber: usr.mobilePhoneNumber,
			message: `Felicidades ${usr.name}! Has logrado tu objetivo. Aquí tienes un 10% de descuento para comprar tu nuev@ ${usr.spendGoals[idx].object}`
		};
		service.post('/v1/sandbox/messaging-services/sms', sms);
		usr.spendGoals[idx].status = true;
	}
	usr.save();
	res.status(201).json({ usr });
});

module.exports = router;
