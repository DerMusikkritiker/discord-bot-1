require("dotenv").config()
const { Client, Intents } = require("discord.js")
//import fetch from 'node-fetch'

// specifying intents
const setup_intents = new Intents()
setup_intents.add(Intents.FLAGS.GUILDS, Intents.FLAGS.DIRECT_MESSAGES, Intents.FLAGS.GUILD_MESSAGES)
const client = new Client( {intents: setup_intents} )

// Console updates
client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}!`)
})

// messages
client.on("messageCreate", msg => {
    if (msg.author.bot) return

    
    
    const messageContent = msg.content.toLowerCase()

    // everything that is not a command starting with a slash below this

    if (messageContent === "hello") {
        msg.reply("Hello there!")

    // everything that is a command starting with a slash below this
    const messageSplit = msg.content.split(" ") 
    if (messageSplit[0] === "/") {
        const command = messageSplit[1]
        // if (!command) return

        if (command === "helpme") {
            msg.reply("i also like the beatles a lot!")
        }

        if (command === "numberfact") {
            getRandomFact(null).then(quote => msg.channel.send(quote))
        }
    }

   

    
    }
})

// random number fact
/*
function getRandomFact(randomNumber) {
    if (randomNumber != null) {
        request = randomNumber
    } else {
        request = "random/trivia"
    }
    return fetch("http://numbersapi.com/" + request)
    .then(res => {
        return res.json()
    })
}
*/
// logging in
client.login(process.env.DISCORDJS_BOT_TOKEN)