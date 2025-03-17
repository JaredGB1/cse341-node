const routes=require('express').Router();
const controller=require("../controllers/control"); 

routes.get('/', controller.testRoute1);
routes.use('/contacts' , require('./contacts'));


module.exports= routes;