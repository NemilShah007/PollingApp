//jshint esversion:6

const express = require('express');
const router = express.Router();
const Pusher = require('pusher');
require('dotenv').config();

var pusher = new Pusher({
  appId: '944579',
  key: '22606a69db895ee7e54d',
  secret: 'bfa43df0c91e969ff864',
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
