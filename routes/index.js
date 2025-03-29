const routes=require('express').Router();
const controller=require("../controllers/control"); 

routes.use('/', require('./swagger'));

routes.get('/', (req,res)=>
    {
        // #swagger.tags=[Hello World]
        res.send('Hello World');
    });

routes.use('/contacts' , require('./contacts'));


module.exports= routes;