const Discord = require('discord.js');//requires module discord.js

const client = new Discord.Client();

const {prefix, token} = require('./botconfig.json');
//program runs, tells me how many ppl, how many servers it is on in console
client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    console.log(`Bot has started, with 
  ${client.users.size} users, in 
  ${client.channels.size} channels of 
  ${client.guilds.size} server(s).`);
    client.user.setActivity('In development on Itachi#8045 server');
    console.log(`token: `, token);
    console.log(`prefix: `, prefix);
});

client.on('message', async message => {
    var holder = message.content
var content1 = "=wiki"
var content2 = holder.slice(5,100);
content2 = content2.trim ();
console.log("holder: ", holder);
console.log("content: " ,content2);
     if (message.content.includes ("=wiki"))  {
        message.channel.send("https://en.wikipedia.org/wiki/"+content2)
        message.channel.send(`------------- END OF INFORMATION -------------`);
    }


//to do: =info
    if (message.content === `${prefix} info`) {
        const taggedUser = message.mentions.users.first();
        message.channel.send(`size of usersize list: `, message.mentions.users.size)


        if (!message.mentions.users.size) {
            return message.reply('You need to tag someone');
            message.channel.send(`size of usersize list: `, message.mentions.users.size)
        }
        message.channel.send(`${taggedUser}'s information:`)

        console.log(`MEEP: `,taggedUser);
        console.log(taggedUser.username);

        message.channel.send(`------------- END OF INFORMATION -------------`);
    }

}

);

client.login(token); 