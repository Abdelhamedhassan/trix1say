﻿const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "1"; 

client.on('ready', () => {
  console.log(`Welcome Bro ${client.user.tag}!`); 
});

client.on('ready', async() => { 
var server = "466202032844308481"; 
var channel = "515248689061822464";
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('```INCR_iSryManYT SPAAAAM ~ INCR_iSryManYT SPAAAAM ~ INCR_iSryManYT SPAAAAM ~ INCR_iSryManYT SPAAAAM ~ INCR_iSryManYT SPAAAAM ~ INCR_iSryManYT SPAAAAM ~ INCR_iSryManYT SPAAAAM ~ INCR_iSryManYT SPAAAAM ~ INCR_iSryManYT SPAAAAM ~ ') 
    },305);
})

client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "say") {
if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('?|**\`ADMINISTRATOR\`ليس لديك صلاحيات`**');
   message.channel.sendMessage(args.join("  "))
   message.delete()
  }
 });

 
client.login(process.env.BOT_TOKEN); // هنا لا تعدل شي
