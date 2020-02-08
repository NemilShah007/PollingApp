//jshint esversion:6

const express = require('express');
const router = express.Router();
const Pusher = require('pusher');
require('dotenv').config();

var pusher = new Pusher({
  appId: process.env.APPID,
  key: process.env.KEY,
  secret: process.env.SECRET,
  cluster: 'ap2',
  encrypted: true
});

router.get("/",(req,res) => {
  res.send("Poll");
});

router.post("/",(req,res)=>{
  pusher.trigger('os-poll', 'os-vote', {
    points: 1,
    os: req.body.os
  });
  return res.json({success:true,message:"Thank you for voting"});
});

module.exports = router;
