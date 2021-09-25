require("dotenv").config()
const { Client, Intents } = require("discord.js")

// specifying intents
const setup_intents = new Intents()
setup_intents.add(Intents.FLAGS.GUILDS, Intents.FLAGS.DIRECT_MESSAGES, Intents.FLAGS.GUILD_MESSAGES)
const client = new Client( {intents: setup_intents} )

// actions
client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}!`)
})

client.on("message", msg => {
    if (msg.content === "ping") {
        msg.reply("peng")
    }
})

client.login(process.env.DISCORDJS_BOT_TOKEN)