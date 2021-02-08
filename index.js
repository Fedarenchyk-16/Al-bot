const TelegramBot = require('node-telegram-bot-api')
const debug = require('./helpers');
const TOKEN = '1556709387:AAHesRUjQjOheaqz3EieaWVuqs-dJ2FrOM4'

console.log("Бот запущен....")
const bot = new TelegramBot(TOKEN,{
    polling: {
        interval: 300,
        autoStart: true,
        params: {
            timeout: 10
        }
    }
})

bot.on('message', msg => {
     const chatId = msg.chat.id
    // const { id } = msg.chat
    // console.log(msg.text)
    // if (msg.text.toLowerCase() === 'hello'){
    //      bot.sendMessage(id, `Hello, ${msg.from.first_name}`)
    // }else{
    //      bot.sendMessage(id, "Something wrong")
    // }

    if (msg.text === 'Иди кушать') {
        bot.sendMessage(chatId, "40 минут....")
    }else if (msg.text === 'Иди делай уроки') {
        bot.sendMessage(chatId, "Мне ничего не задавали")
    }else if (msg.text === 'Поздоровайся') {
        bot.sendMessage(chatId, `Привет, ${msg.from.first_name}`)
    }else if (msg.text === 'Хобби?') {
        bot.sendMessage(chatId, "Я занимаюсь хоккеем")
    }else if (msg.text === 'Расскажи о себе') {
        bot.sendMessage(chatId, "Я - ПЕС")
    }else {
        bot.sendMessage(chatId, "Попробуй выбрать тут:", {
            reply_markup: {
                keyboard: [
                    ['Иди кушать'], ['Иди делай уроки'],
                    ['Поздоровайся'], ['Хобби?'],
                    ['Расскажи о себе']
                ]
            }
        })
    }
})
