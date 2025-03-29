const ObjectId= require('mongodb').ObjectId;

const mongodb=require('../database/connect');


const testRoute1=(req, res) => {
    res.send("Hello World");
  };

const getSingle=async (req, res) => {
  // #swagger.tags=[Contacts]
  const userId= new ObjectId(req.params.id);
  const result= await mongodb.getDB().db().collection('contacts').find({ _id: userId });
  result.toArray().then((contacts)=>
      {
          res.setHeader('Content-Type', 'application/json');
          res.status(200).json(contacts[0]);
      });
  };

const getAll= async (req, res) => {
  // #swagger.tags=[Contacts]
  const result= await mongodb.getDB().db().collection('contacts').find();
  result.toArray().then((contacts)=>
      {
          res.setHeader('Content-Type', 'application/json');
          res.status(200).json(contacts);
      });
  };
  
const createUser= async (req,res) => 
  {
    // #swagger.tags=[Contacts]
    const user=
    {
       firstName: req.body.firstName,
       lastName: req.body.lastName,
       email: req.body.email,
       favoriteColor: req.body.favoriteColor,
       birthday: req.body.birthday
    }
    const response= await mongodb.getDB().db().collection('contacts').insertOne(user);
    if(response.acknowledged > 0)
      {
        res.status(204).send();
      }
    else
      {
        res.status(500).json(response.error || "Some error occur while adding the user");
      }
  }

const updateUser= async (req,res) =>
  {
    // #swagger.tags=[Contacts]
    const userId= new ObjectId(req.params.id);
    const user=
    {
       firstName: req.body.firstName,
       lastName: req.body.lastName,
       email: req.body.email,
       favoriteColor: req.body.favoriteColor,
       birthday: req.body.birthday
    }
    const response= await mongodb.getDB().db().collection('contacts').replaceOne({ _id: userId }, user);
    if(response.modifiedCount > 0)
      {
        res.status(204).send();
      }
    else
      {
        res.status(500).json(response.error || "Some error occur while updating the user");
      }
  }
  
const deleteUser= async (req,res) =>
  {
    // #swagger.tags=[Contacts]
    const userId= new ObjectId(req.params.id);
    const response = await mongodb.getDB().db().collection('contacts').deleteOne({ _id: userId });
    if(response.deletedCount > 0)
      {
        res.status(204).send();
      }
    else
      {
        res.status(500).json(response.error || "Some error occur while deleting the user");
      }
  }

module.exports = {
    testRoute1,
    getSingle,
    getAll,
    createUser,
    updateUser,
    deleteUser
    
};