const express = require("express");
const router = express.Router();
const axios = require('axios');
// await axios.get(`https://www.inegi.org.mx/app/api/denue/v1/consulta/Buscar/${activity}/${location[0]}/${location[0]}/${1000}/ad9ce3af-2c72-43f6-ab2e-f3f806b602a1`, {crossorigin:true})
const baseURL = 'https://www.inegi.org.mx/app/api/denue/v1/consulta/Buscar';
const service = axios.create({ baseURL });

router.get("/data", async (req, res, next) => {
  console.log("AHAAA!!!!")
  // activity='sushi';
  // location = [-99.16462489999999, 19.4162303];
  // const data = await service.get(`/${activity}/${location[0]}/${location[1]}/${1000}/ad9ce3af-2c72-43f6-ab2e-f3f806b602a1`);
  // console.log(data)
  // res.status(200).json({data});
});


module.exports = router;