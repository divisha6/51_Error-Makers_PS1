const express = require("express");

// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const recordRoutes = express.Router();

// This will help us connect to the database
const dbo = require("../db/conn");

// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;

recordRoutes.route("/FindJobs").post(function (req, res) {
    let db_connect = dbo.getDb();
    let employment_status=req.body.age
    let education=req.body.education
    let financial_situation=req.body.financial_situation
    let age=req.body.age

    db_connect.collection("Survey").find({age:age, income:financial_situation,education:education,employment_status:employment_status}).toArray().then((arr)=>{
        console.log(arr);
    })
})

      
module.exports = recordRoutes;