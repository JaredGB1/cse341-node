const express = require('express');
const MongoClient=require('mongodb').MongoClient;
const mongodb=require('./database/connect');
const app = express();

const port=process.env.PORT || 3000; 

app.use('/', require("./routes"))

mongodb.initDb((err,mongodb) =>
  {
      if (err)
      {
          console.log(err);
      }
      else
      {
          app.listen(port);
          console.log(`Connected to DB and listening on ${port}`);
      }
  }); 

//app.listen(process.env.PORT || port, () => {
 // console.log('Web Server is listening at port ' + (process.env.PORT || port));
//});