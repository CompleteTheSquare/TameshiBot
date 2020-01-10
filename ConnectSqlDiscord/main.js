const Discord = require('discord.js');//requires module discord.js

const client = new Discord.Client();

const { prefix, token } = require('./botconfig.json');
//program runs, tells me how many ppl, how many servers it is on in console
client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    console.log(`Bot has started, with 
  ${client.users.size} users, in 
  ${client.channels.size} channels of 
  ${client.guilds.size} server(s).`);
    console.log(`token: `, token);
    console.log(`prefix: `, prefix);
});




client.on('message', async message => {
    var EntireMessage = message.content
    var Part1 = "-wiki" // the command for wiki
    var Part2 = EntireMessage.slice(6, 100);

    Part2 = Part2.replace(/ /g, "_")

    console.log("Entire Message: ", EntireMessage);


    if (message.content.includes("-wiki")) {

        var Part2 = EntireMessage.slice(6, 100);

        Part2 = Part2.replace(/ /g, "_")
        console.log("Search Term ", Part2);

        message.channel.send("https://en.wikipedia.org/wiki/" + Part2)

    }

    if (message.content.includes("-def")) {

        var Part2 = EntireMessage.slice(5, 100);

        Part2 = Part2.replace(/ /g, "-")
        console.log("Search Term ", Part2);
        message.channel.send("https://www.dictionary.com/browse/" + Part2)

    }


    else if (message.content === ("-info")){
        message.channel.send("Tameshibot")
    }

    else if (message.content === ("-help")){
        message.channel.send("wiki <_______> to search something on wikipedia . org")
        message.channel.send("def <_______> to search something on dictionary .com")
    }


}
)





;

client.login(token); 