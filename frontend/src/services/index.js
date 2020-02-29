import axios from "axios";
let baseURL;

process.env.NODE_ENV === "production"
  ? (baseURL = "here should be your production endpoint")
  : (baseURL = "http://localhost:3000");

const serviceNode = axios.create({ withCredentials: true, baseURL });
const serviceFlask = axios.create({withCredentials:true, "FLASK ENDPOINT"})

const MY_SERVICE = {
  test: async () => {
    return await serviceNode.get("/");
  },
  signup: async user => {
    return await serviceNode.post("/signup", user);
  },
  login: async user => {
    return await serviceNode.post("/login", user);
  },
  logOut: async () => {
    return await serviceNode.get("/logout");
  },
  recommendations: async frm => {
    return await serviceFlask.post("/get-recommendations", frm);
  },
  newGoal: async gls =>{
    return await serviceNode.post("/new-goal", gls)
  },
  checkGoalObject: async obj =>{
    return await serviceFlask.post("/check", obj)
  }
};

export default MY_SERVICE;
