const routes=require('express').Router();
const controller=require("../controllers/control"); 

routes.get('/', controller.testRoute1);
routes.get('/2', controller.testRoute2);
routes.get('/3', controller.testRoute3);

module.exports= routes;