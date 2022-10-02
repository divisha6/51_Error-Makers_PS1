const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 8000;
app.use(cors());
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));
app.use(require("./routes/InsertData"));
app.use(require("./routes/FindJobs"));



var bodyParser = require('body-parser')
// To connect with your mongoDB database
const mongoose = require("mongoose");
const PORT = 8000;
var request = require('request');


// get driver connection
const dbo = require("./db/conn");

app.listen(port, () => {
  // perform a database connection when server starts
  dbo.connectToServer(function (err) {
    if (err) console.error(err);

  });
  console.log(`Server is running on port: ${port}`);
});


/*const axios = require("axios");

const options = {
  method: 'POST',
  url: 'https://linkedin-jobs-search.p.rapidapi.com/',
  headers: {
    'content-type': 'application/json',
    'X-RapidAPI-Key': '7fcc37b7abmshfde372926916fcfp17314cjsnd13bfae390ed',
    'X-RapidAPI-Host': 'linkedin-jobs-search.p.rapidapi.com'
  },
  data: '{"search_terms":"python programmer","location":"30301","page":"1"}'
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});*/