const axios = require('axios');

exports.sendMessage = async function(chat_id,message){
    let  response = await axios.post(`https://api.telegram.org/bot${process.env.TELEGRAM_TOKEN}/sendMessage`, { chat_id: chat_id, text: message });
    try{
        return response.data;
    }catch (e){
        console.log(e);
        return;
        
    }       

}
exports.setWebhook = async function(url){
    let  response = await axios.post(`https://api.telegram.org/bot${process.env.TELEGRAM_TOKEN}/setWebhook`, { url: url });
    try{
        console.log(response.data)
    }catch (e){
        console.log(e);       
        
    }       

}