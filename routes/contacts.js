const routes=require('express').Router();
const controller=require("../controllers/control"); 

routes.get('/', controller.getAll);
routes.get('/:id', controller.getSingle);

module.exports= routes;