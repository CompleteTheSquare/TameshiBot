
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

