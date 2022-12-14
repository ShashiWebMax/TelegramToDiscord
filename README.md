# Telegram to Discord Bot
## Node.js bot to connect Telegram chat to Discord Channel
This simple program uses a telegram bot and discord bot to relay chat messages between Discord and Telegram

![banner](bot-img.jpg)
## How to use?
1. Clone the repository
2. run `npm install`
3. Create Telegram Bot using BotFather and obtain the API Token.
   (*If you are using a group add the bot to the group as an admin*)
4. Create a Discord Bot and obtain the Token. Then add the bot to the server you want to connect and give message read, write and list member permissions
5. Rename `.env.example` file to `.env` and update the values. (You can assign your own `GATEWAY_PASS`)
   
    ```bash
    TELEGRAM_TOKEN='xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
    TELEGRAM_GROUP_ID=-123456789101112
    DISCORD_TOKEN='xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
    DISCORD_CHANNEL_ID='123456789101112'
    SERVER_ADDRESS='https://site.url'
    PORT=80
    GATEWAY_PASS="gateway_password"
    ```
6. Host on HTTPS public accessible server by running node `index.js`.

## Libraries Used
- [Express.js](https://expressjs.com/) framework is used to build the http server.
- [Discord.js](https://discord.js.org/) library is is used to create the discord bot

