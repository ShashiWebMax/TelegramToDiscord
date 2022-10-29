const express = require('express');
const bodyParser = require('body-parser');
require("dotenv").config();
const axios = require('axios');

const telegram = require('./controllers/teligramBot');

var app = express();

// const { licenseAPI, licenseRegister, licenseReport, clear } = require('./controllers/licenseAPI');
// const setup = require('./controllers/setup').setup;

app.use(express.json());
app.use(bodyParser.raw());
app.use(bodyParser.text()); app.use(express.urlencoded({ extended: true }));

app.get('/test', async (req, res) => {
    // console.log("🚀 ~ file: index.js ~ line 14 ~ app.post ~ req", req);   
    // process.env.TELEGRAM_TOKEN
    // console.log(process.env.TELEGRAM_TOKEN)
    let data = await telegram.sendMessage('-1001531844466',"group test");
    console.log("🚀 ~ file: index.js ~ line 22 ~ app.get ~ data", data)
    res.json({ state: "ok", msg: "" });
})
app.post('/telegram_wh', async (req, res) => {
    console.log("---------------");   
    console.log(req.body);   
    // process.env.TELEGRAM_TOKEN
    // console.log(process.env.TELEGRAM_TOKEN)
    
    res.sendStatus(200);
})

telegram.setWebhook(process.env.SERVER_ADDRESS+"/telegram_wh");
app.listen(process.env.PORT);
// lt --port 80 --subdomain swmaxtel