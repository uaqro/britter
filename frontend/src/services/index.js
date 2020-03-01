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
	congratz: async () => {
		return await serviceNode.post('/congratz');
	},
	getUser: async () => {
		return await serviceNode.get('/loggedin');
	},
	getRecommendations: async () => {
		return await serviceNode.get('/data');
	},
	// recommendations: async (giro,long,lat,mts) => {
	// 	return await serviceInegi.get(`/${giro}/${long}/${lat}/${mts}/ad9ce3af-2c72-43f6-ab2e-f3f806b602a1`, { crossdomain: true });
	// },
	location: async location => {
		return await serviceFlask.post('/loc', location);
		// return await serviceFlask.post("/get-recommendations", frm);
	},
	newGoal: async gls => {
		return await serviceNode.post('/new-goal', gls);
	},
	checkGoalObject: async obj => {
		return await serviceFlask.post('/check', obj);
	},
	updateGoal: async (gl, sv) => {
		return await serviceNode.post('/update-goal', { goal: gl, sav: sv });
	}
};

export default MY_SERVICE;
