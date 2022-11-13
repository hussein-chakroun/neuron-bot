const express = require('express')
const expressApp = express()
const axios = require("axios");
const path = require("path")
const port = process.env.PORT || 3000;
expressApp.use(express.static('static'))
expressApp.use(express.json());
require('dotenv').config();

const { Telegraf } = require('telegraf');

const bot = new Telegraf(process.env.BOT_TOKEN);

expressApp.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'));
});

bot.launch()

bot.command('start', ctx => {
    console.log(ctx.from)
    bot.telegram.sendMessage(ctx.chat.id, 'Hello there! Welcome to the Neuron telegram bot.\n use /help to get all the commands i respond on', {
    })
  })

  bot.command('help', ctx => {
    console.log(ctx.from)
    bot.telegram.sendMessage(ctx.chat.id, 'Commands i respond on :\n /start \n /help \n /courses \n /cryptoprices', {
    })
  })

  bot.command('courses', ctx => {
    console.log(ctx.from)
    bot.telegram.sendMessage(ctx.chat.id, 'One of our best Free services is a Free Udemy Courses channel, join and get to work \n https://t.me/+HKgjy1tF-lxlM2M0', {
    })
  })
  
  bot.command('cryptoprices', ctx => {
    var rate;
    console.log(ctx.from)
    axios.get(`https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd`)
    .then(response => {
      console.log(response.data)
      rate = response.data.bitcoin
      const message = ` BTC price is ${rate.usd}USD`
      bot.telegram.sendMessage(ctx.chat.id, message, {
      })
    })
    axios.get(`https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd`)
    .then(response => {
      console.log(response.data)
      rate = response.data.ethereum
      const message = `ETH price is ${rate.usd}USD`
      bot.telegram.sendMessage(ctx.chat.id, message, {
      })
    })
    axios.get(`https://api.coingecko.com/api/v3/simple/price?ids=solana&vs_currencies=usd`)
    .then(response => {
      console.log(response.data)
      rate = response.data.solana
      const message = `SOL price is ${rate.usd}USD`
      bot.telegram.sendMessage(ctx.chat.id, message, {
      })
    })
    axios.get(`https://api.coingecko.com/api/v3/simple/price?ids=ripple&vs_currencies=usd`)
    .then(response => {
      console.log(response.data)
      rate = response.data.ripple
      const message = `XRP price is ${rate.usd}USD`
      bot.telegram.sendMessage(ctx.chat.id, message, {
      })
    })
    axios.get(`https://api.coingecko.com/api/v3/simple/price?ids=binancecoin&vs_currencies=usd`)
    .then(response => {
      console.log(response.data)
      rate = response.data.binancecoin
      const message = `BNB price is ${rate.usd}USD`
      bot.telegram.sendMessage(ctx.chat.id, message, {
      })
    })
  })

 

