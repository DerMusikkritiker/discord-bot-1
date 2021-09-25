require("dotenv").config()
const { Client, Intents } = require("discord.js")
import fetch from 'node-fetch'

// specifying intents
const setup_intents = new Intents()
setup_intents.add(Intents.FLAGS.GUILDS, Intents.FLAGS.DIRECT_MESSAGES, Intents.FLAGS.GUILD_MESSAGES)
const client = new Client( {intents: setup_intents} )

// Console updates
client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}!`)
})

// messages
client.on("message", msg => {
    if (msg.author.bot) return
    
    if (msg.content === "numberfact") {
        getRandomFact(null).then(quote => msg.channel.send(quote))
    }

    if (msg.content === "Hello") {
        msg.reply("Hello there!")
    }
})

// random number fact
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

// logging in
client.login(process.env.DISCORDJS_BOT_TOKEN)