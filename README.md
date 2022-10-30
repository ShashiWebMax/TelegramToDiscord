# Telegram to Discord Bot
## Node.js bot to connect Telegram chat to Discord Channel
This simple program uses a telegram bot and discord bot to relay chat messages between Discord and Telegram

## How to use?
1. Clone the repository
2. Create Telegram Bot using BotFather and obtain the API Token.
   (*If you are using a group add the bot to the group as an admin*)
3. Create a Discord Bot and obtain the Token. Then add the bot to the server you want to connect and give message read, write and list member permissions
4. Rename `.env.example` file to `.env` and update the values. (You can assign your own `GATEWAY_PASS`)
    ```bash
    TELEGRAM_TOKEN='xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
    TELEGRAM_GROUP_ID=-123456789101112
    DISCORD_TOKEN='xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
    DISCORD_CHANNEL_ID='123456789101112'
    SERVER_ADDRESS='https://site.url'
    PORT=80
    GATEWAY_PASS="gateway_password"
    ```
5. Host on HTTPS public accessible server.
