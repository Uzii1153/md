

require("./media/config.js");
const { default: makeWASocket, MessageRetryMap, makeCacheableSignalKeyStore, useMultiFileAuthState, DisconnectReason, fetchLatestBaileysVersion, generateForwardMessageContent, prepareWAMessageMedia, generateWAMessageFromContent, generateMessageID, downloadContentFromMessage, makeInMemoryStore, jidDecode, getAggregateVotesInPollMessage, proto } = require("@whiskeysockets/baileys")
const pino = require('pino')
const fs = require('fs')
const { Boom } = require('@hapi/boom')
const yargs = require('yargs/yargs')
const chalk = require('chalk')
const figlet = require('figlet')
const FileType = require('file-type')
const path = require('path')
const NodeCache = require('node-cache')
const PhoneNumber = require('awesome-phonenumber')
const { imageToWebp, videoToWebp, writeExifImg, writeExifVid } = require('./library/exif')
const { smsg, isUrl, generateMessageTag, getSizeMedia, fetchJson, await, sleep } = require('./library/myfunc')
const { forks, getBuffer, start, info, success, banner, close } = require('./library/Fauzi')
const readline = require("readline");

// pairing code
const pairingCode = process.argv.includes("code")
const rl = readline.createInterface({ input: process.stdin, output: process.stdout })
const question = (text) => new Promise((resolve) => rl.question(text, resolve ))

// apacoba
let { loading } = require('./connect/starting')

var low
try {
low = require('lowdb')
} catch (e) {
low = require('./library/lowdb')
}

const { Low, JSONFile } = low
const mongoDB = require('./library/mongoDB')

global.api = (name, path = '/', query = {}, apikeyqueryname) => (name in global.APIs ? global.APIs[name] : name) + path + (query || apikeyqueryname ? '?' + new URLSearchParams(Object.entries({ ...query, ...(apikeyqueryname ? { [apikeyqueryname]: global.APIKeys[name in global.APIs ? global.APIs[name] : name] } : {}) })) : '')

const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) })

global.opts = new Object(yargs(process.argv.slice(2)).exitProcess(false).parse())
global.db = new Low(
/https?:\/\//.test(opts['db'] || '') ?
new cloudDBAdapter(opts['db']) : /mongodb/.test(opts['db']) ?
new mongoDB(opts['db']) :
new JSONFile(`media/database/database.json`)
)
global.db.data = {
users: {},
chats: {},
database: {},
game: {},
settings: {},
others: {},
sticker: {},
...(global.db.data || {})
}

// save database every 30seconds
if (global.db) setInterval(async () => {
if (global.db.data) await global.db.write()
}, 30 * 1000)



// SCAN USE CODE PAIRING
async function startfuzzy() {
const { state, saveCreds } = await useMultiFileAuthState('./media/session')
let { version } = fetchLatestBaileysVersion()
//const msgRetryCounterCache = new NodeCache()
const fuzzy = makeWASocket({
logger: pino({ level: "silent" }),
printQRInTerminal: !pairingCode,
auth: state,
keys: makeCacheableSignalKeyStore(state.keys, pino().child({ level: 'silent', stream: 'store' })),
browser: ['Linux', 'Chrome', '', ''],
// MessageRetryMap,
getMessage: async (key) => {
if(store) {
const msg = await store.loadMessage(key.remoteJid, key.id, undefined)
return msg?.message || undefined
}
return {
conversation: 'hallo im sain'
}
},
//msgRetryCounterCache
});



if(pairingCode && !fuzzy.authState.creds.registered) {
		const phoneNumber = await question('Silahkan masukin nomor Whatsapp :');
		const code = await fuzzy.requestPairingCode(phoneNumber.trim())
		console.log(`︎Kode Pairing Bot Whatsapp kamu : ${code}`)

	}

store.bind(fuzzy.ev)

const getMessage = async (key) => {
if(store) {
const msg = await store.loadMessage(key.remoteJid, key.id, undefined)
return msg?.message || undefined
}
return {
conversation: 'hallo im sain bot'
}
}
	
// Setting
fuzzy.decodeJid = (jid) => {
if (!jid) return jid
if (/:\d+@/gi.test(jid)) {
let decode = jidDecode(jid) || {}
return decode.user && decode.server && decode.user + '@' + decode.server || jid
} else return jid
}
fuzzy.public = true
fuzzy.ev.on('messages.upsert', async chatUpdate => {
try {
msg = chatUpdate.messages[0]
if (!msg.message) return
msg.message = (Object.keys(msg.message)[0] === 'ephemeralMessage') ? msg.message.ephemeralMessage.message : msg.message
if (msg.key && msg.key.remoteJid === 'status@broadcast') return
if (!fuzzy.public && !msg.key.fromMe && chatUpdate.type === 'notify') return
if (msg.key.id.startsWith('BAE5') && msg.key.id.length === 16) return
from = msg.key.remoteJid
m = smsg(fuzzy, msg, store)
require("./connect/xZiyy")(fuzzy, m, msg, chatUpdate, from, store)
} catch (err) {
console.log(err)
}
})



fuzzy.ev.on('contacts.update', update => {
for (let contact of update) {
let id = fuzzy.decodeJid(contact.id)
if (store && store.contacts) store.contacts[id] = { id, name: contact.notify }
}
})

fuzzy.setStatus = (status) => {
fuzzy.query({
tag: 'iq',
attrs: {
to: '@s.whatsapp.net',
type: 'set',
xmlns: 'status',
},
content: [{
tag: 'status',
attrs: {},
content: Buffer.from(status, 'utf-8')
}]
})
return status
}


	

fuzzy.ev.on('creds.update', saveCreds)

fuzzy.serializeM = (m) => smsg(fuzzy, m, store)
fuzzy.ev.on("connection.update", async (update) => {
const { connection, lastDisconnect } = update;
if (connection === "close") {
  let reason = new Boom(lastDisconnect?.error)?.output.statusCode;
  if (reason === DisconnectReason.badSession) {
console.log(`Bad Session File, Please Delete Session and Scan Again`); process.exit();}
else if (reason === DisconnectReason.connectionClosed) { console.log("Connection closed, reconnecting...."); startfuzzy(); }
else if (reason === DisconnectReason.connectionLost) { console.log("Connection Lost from Server, reconnecting..."); startfuzzy(); }
else if (reason === DisconnectReason.connectionReplaced) { console.log("Connection Replaced, Another New Session Opened, Please Restart Bot"); process.exit(); }
else if (reason === DisconnectReason.loggedOut) { console.log(`Device Logged Out, Please Delete Folder Session yusril and Scan Again.`); process.exit(); }
else if (reason === DisconnectReason.restartRequired) { console.log("Restart Required, Restarting..."); startfuzzy(); }
else if (reason === DisconnectReason.timedOut) { console.log("Connection TimedOut, Reconnecting..."); startfuzzy(); }
else { console.log(`Unknown DisconnectReason: ${reason}|${connection}`); startfuzzy(); } }
else if (connection === 'connecting') {
start(`1`,`conecting.......`) 
} else if (connection === "open") {
//clearing logs in terminal
console.clear()          
//start progress
   console.log(chalk.black(chalk.bgGreen('[ INFO ] wait tunggu connecting. script made by xZiyy')))
loading()

//silent for 5.5 seconds
 //displays information that it is connected
success('1', 'Done Sudah Terhubung')
}
});
return fuzzy
}

startfuzzy()
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})