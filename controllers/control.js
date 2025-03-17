const mongodb=require('../database/connect');
const ObjectId= require('mongodb').ObjectId;

const testRoute1=(req, res) => {
    res.send("Hello, use the route /contacts to access all the contacts or /contacts/id to access a single contact");
  };
const getSingle=async (req, res) => {
  const userId= new ObjectId(req.params.id);
  const result= await mongodb.getDB().db().collection('contacts').find({ _id: userId });
  result.toArray().then((contacts)=>
      {
          res.setHeader('Content-Type', 'application/json');
          res.status(200).json(contacts[0]);
      });
  };
const getAll= async (req, res) => {
  const result= await mongodb.getDB().db().collection('contacts').find();
  result.toArray().then((contacts)=>
      {
          res.setHeader('Content-Type', 'application/json');
          res.status(200).json(contacts);
      });
  };  
module.exports = {
    testRoute1,
    getSingle,
    getAll
};