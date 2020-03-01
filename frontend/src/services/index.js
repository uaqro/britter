import axios from 'axios';
let baseURL;

process.env.NODE_ENV === 'production'
	? (baseURL = 'here should be your production endpoint')
	: (baseURL = 'http://localhost:3000');

let config = {
	headers: {'Access-Control-Allow-Origin': '*'}
};

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
	getUser: async () => {
		return await serviceNode.get('/loggedin');
	},
	getRecommendations: async (lat, lng, query) => {
		return await serviceNode.get(`/data/${lat}/${lng}/${query}`);
	},
	newGoal: async gls => {
		return await serviceNode.post('/new-goal', gls);
	},
	checkGoalObject: async obj => {
		return await serviceNode.post('/check', { obj });
	},
	updateGoal: async (gl, sv) => {
		const goal = { gl, sv };
		return await serviceNode.post('/update-goal', { goal });
	},
	getGoalStats: async gls => {
		return await serviceNode.post('/calc-goal', { gls });
	}
};

export default MY_SERVICE;
