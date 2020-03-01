import axios from 'axios';
let baseURL;

process.env.NODE_ENV === 'production'
	? (baseURL = 'here should be your production endpoint')
	: (baseURL = 'http://localhost:3000');

const serviceNode = axios.create({ withCredentials: true, baseURL });
const serviceFlask = axios.create({
	withCredentials: true,
	baseURL: 'FLASK ENDPOINT'
});

const MY_SERVICE = {
	test: async () => {
		return await serviceNode.get('/');
	},
	signup: async user => {
		return await serviceNode.post('/signup', user);
	},
	login: async user => {
		return await serviceNode.post('/login', user);
	},
	logOut: async () => {
		return await serviceNode.get('/logout');
	},
	isLogged: async () => {
		return await serviceNode.get('/loggedin');
	},
	congratz: async () => {
		return await serviceNode.post('/congratz');
	},
	getUser: async () => {
		return await serviceNode.get('/loggedin');
	},
	recommendations: async frm => {
		return await serviceFlask.post('/get-recommendations', frm);
	},
	location: async location => {
		return await serviceFlask.post('/loc', location);
		// return await serviceFlask.post("/get-recommendations", frm);
	},
	newGoal: async gls => {
		return await serviceNode.post('/new-goal', gls);
	},
	checkGoalObject: async obj => {
		return await serviceFlask.post('/check', { object: obj });
	},
	updateGoal: async (gl, sv) => {
		return await serviceNode.post('/update-goal', { goal: gl, sav: sv });
	},
	getGoalStats: async gls => {
		return await serviceNode.post('/calc-goal', { budget: gls });
	}
};

export default MY_SERVICE;
