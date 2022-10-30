const express = require('express');
const bodyParser = require('body-parser');
require("dotenv").config();
const axios = require('axios');
var app = express();


//Telegram Bot
const telegram = require('./controllers/telegramBot');

//Discord Bot
const discordBot = require('./controllers/discordBot.js');
let Discord = new discordBot();
Discord.start();

app.use(express.json());
app.use(bodyParser.raw());
app.use(bodyParser.text()); app.use(express.urlencoded({ extended: true }));

app.get('/', async (req, res) => {
    res.send("ok");
})
app.post('/telegram-gateway', async (req, res) => {
    try {
        if (req.body.pass == process.env.GATEWAY_PASS) {
            let data = await telegram.sendMessage(req.body.channel, req.body.message);
        } else {
            res.json({ state: "error" });
            return;
        }
        res.json({ state: "ok", msg: "" });
    } catch (error) {
        res.json({ state: "error" });
        console.log(error);
    }
})

//Telegram Webhook handler
app.post('/telegram_wh', async (req, res) => {
    // console.log(req.body); //DEBUG
    try {
        if (req.body.message.chat.id == process.env.TELEGRAM_GROUP_ID) {
            Discord.client.channels.cache
                .get(process.env.DISCORD_CHANNEL_ID)
                .send(`**${req.body.message.from.first_name}** on *Telegram*\n${req.body.message.text}`);
        }
    } catch (error) {
        console.log(error);
    }
    res.sendStatus(200);
})


// Register telegram webhook
telegram.setWebhook(process.env.SERVER_ADDRESS + "/telegram_wh");


//start server
app.listen(process.env.PORT);


