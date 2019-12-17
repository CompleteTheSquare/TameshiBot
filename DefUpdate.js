    if (message.content.includes("-def")) {

        var Part2 = EntireMessage.slice(5, 100);

        Part2 = Part2.replace(/ /g, "-")
        console.log("Search Term ", Part2);
        message.channel.send("https://www.dictionary.com/browse/" + Part2)

    }