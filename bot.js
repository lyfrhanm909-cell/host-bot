const express = require('express');
const app = express();
app.get('/', (req, res) => res.send('Bot is alive 24/7'));
app.listen(process.env.PORT || 10000, () => console.log('Web server running'));

const { Telegraf } = require('telegraf');
const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start((ctx) => ctx.reply('أهلا 👋 ارسل أي ملف واجيب لك رابط مباشر'));

bot.on(['photo', 'document', 'video', 'audio', 'voice'], async (ctx) => {
  try {
    let fileId = ctx.message.document?.file_id || ctx.message.photo?.[ctx.message.photo.length - 1]?.file_id || ctx.message.video?.file_id || ctx.message.audio?.file_id || ctx.message.voice?.file_id;
    const link = await ctx.telegram.getFileLink(fileId);
    await ctx.reply(`✅ رابطك المباشر:\n${link}`);
  } catch (e) {
    ctx.reply('صار خطأ: ' + e.message);
  }
});

bot.launch();
console.log('Bot started');


const express = require('express');
const app = express();
app.get('/', (req, res) => res.send('Bot is alive 24/7'));
app.listen(process.env.PORT || 10000, () => console.log('Web server running'));

const { Telegraf } = require('telegraf');
const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start((ctx) => ctx.reply('أهلا 👋 ارسل أي ملف واجيب لك رابط مباشر'));

bot.on(['photo', 'document', 'video', 'audio', 'voice'], async (ctx) => {
  try {
    let fileId = ctx.message.document?.file_id || ctx.message.photo?.[ctx.message.photo.length - 1]?.file_id || ctx.message.video?.file_id || ctx.message.audio?.file_id || ctx.message.voice?.file_id;
    const link = await ctx.telegram.getFileLink(fileId);
    await ctx.reply(`✅ رابطك المباشر:\n${link}`);
  } catch (e) {
    ctx.reply('صار خطأ: ' + e.message);
  }
});

bot.launch();
console.log('Bot started');

bot.on(['photo','document','video','audio','voice'], async (ctx) => {
  try {
    let fileId = ctx.message.document?.file_id || ctx.message.video?.file_id || ctx.message.photo?.pop().file_id || ctx.message.audio?.file_id || ctx.message.voice?.file_id;
    const link = await ctx.telegram.getFileLink(fileId);
    ctx.reply(`✅ رابطك المباشر:\n${link}`);
  } catch(e){ 
    ctx.reply('صار خطأ: '+e.message) 
  } المباشر:\n${link}`);
  } catch(e){ 
    ctx.reply('صار خطأ: '+e.message) 
  }
});

bot.launch();
console.log('Bot started');
