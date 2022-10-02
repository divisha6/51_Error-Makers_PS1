const express = require("express");

// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const recordRoutes = express.Router();

// This will help us connect to the database
const dbo = require("../db/conn");

// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;

const Cryptr = require('cryptr');
const cryptr = new Cryptr('myTotallySecretKey');

const { createHash, publicDecrypt } = require('crypto');




// This section will help you get a single record by id
recordRoutes.route("/InsertData").post(function (req, res) {
  let db_connect = dbo.getDb();
  let gender=parseInt(req.body.gender,10);
  let age=parseInt(req.body.age,10);
  let financial_situation=parseInt(req.body.financialCondition,10);
  let education= parseInt(req.body.educationalBackground,10);
  let employment_status=parseInt(req.body.employmentStatus,10);
  let submission_state=req.body.state



  let myobj={gender:gender,age:age,financial_situation:financial_situation,education:education,employment_status:employment_status,submission_state:submission_state}
  db_connect.collection("Dataset").insertOne(myobj, function(err, res) {
    if (err) out="fail"
    else out="success"
    console.log("1 document inserted");
  })
  res.send("success")
})
  

  
module.exports = recordRoutes;
