const { Client, Events, GatewayIntentBits, Guild } = require('discord.js'); //import discord.js
const telegram = require('../controllers/telegramBot');

class discordBot {
    start() {
        this.client = new Client({
            intents: [
                GatewayIntentBits.Guilds,
                GatewayIntentBits.GuildMessages,
                GatewayIntentBits.MessageContent,
                GatewayIntentBits.GuildMembers,
            ]
        });
        this.client.once(Events.ClientReady, c => {
            console.log(`Ready! Logged in as ${c.user.tag}`);

        });
        this.client.on(Events.MessageCreate, msg => {
            let { content, channelId } = msg;
            if(process.env.DISCORD_CHANNEL_ID == channelId && !msg.author.bot){
                telegram.sendMessage(process.env.TELEGRAM_GROUP_ID, `${msg.author.username}:\n${content}`);
            }
            // console.log(msg);//DEBUG

        })
        //make sure this line is the last line
        this.client.login(process.env.DISCORD_TOKEN); //login bot using token
    }
}
module.exports = discordBot