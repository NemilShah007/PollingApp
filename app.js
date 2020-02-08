//jshint esversion:6

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');


const app = express();

const poll = require("./routes/poll");

//Set public folder
app.use(express.static(path.join(__dirname,"public")));

//Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

//Enable CORS
app.use(cors());

app.use("/poll",poll);


//Start Server
app.listen(3000,() => console.log("Server started on port 3000"));
