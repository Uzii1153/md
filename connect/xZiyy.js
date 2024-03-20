
require('../media/config.js');
const { default: generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, downloadContentFromMessage, areJidsSameUser, getContentType } = require("@whiskeysockets/baileys")
//const obfuscator = require('javascript-obfuscator')
var fs = require('fs')
var util = require('util')
var chalk = require('chalk')
var { exec, spawn, execSync } = require("child_process")
var axios = require('axios')
const bochil = require('@bochilteam/scraper')
const fdl = require("caliph-api")
const hx = require('hxz-api')
var path = require('path')
var os = require('os')
const ikyyClient = require('ikyy')
const Ikyy = new ikyyClient()
const menfs = require('../library/menfess')
var moment = require('moment-timezone')
var { JSDOM } = require('jsdom')
var speed = require('performance-now')
var { performance } = require('perf_hooks')
const { imageToWebp, videoToWebp, writeExifImg, writeExifVid } = require('../library/exif')
var { makeid, smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom } = require('../library/myfunc')
//━━━━━━━━━━━━━━━[ SCRAPER ]━━━━━━━━━━━━━━━━━//
const { instagram, mediafire } = require('../library/scraper/scraper');
const { UploadFileUgu, webp2mp4File, TelegraPh } = require('../library/scraper/uploader.js')

 
//━━━━━━━━━━━━━━━[ THUMBNAIL ]━━━━━━━━━━━━━━━━━//

var thumb = fs.readFileSync('./media/image/fake.jpg')
var thumbnail = fs.readFileSync('./media/image/thumbnail.jpg')
var gipt = fs.readFileSync('./media/video/ziyy.gif')


vn = true
ngetik = false

//━━━━━━━━━━━━━━━[ DATABASE ]━━━━━━━━━━━━━━━━━//
const owner =JSON.parse(fs.readFileSync('./media/database/owner.json'));
const Antilink_gc =JSON.parse(fs.readFileSync('./media/database/antilinkgc.json'));
const datagc = JSON.parse(fs.readFileSync('./media/database/group.json'))
//━━━━━━━━━━━━━━━[ MODULE EXPORTS ]━━━━━━━━━━━━━━━━━//

module.exports = async (fuzzy, msg, m, chatUpdate, from, store) => {
    const isGrouP = m.key.remoteJid.endsWith('@g.us')
    const sender = isGrouP ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
    var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') && m.message.buttonsResponseMessage.selectedButtonId ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') && m.message.listResponseMessage.singleSelectReply.selectedRowId ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') && m.message.templateButtonReplyMessage.selectedId ? m.message.templateButtonReplyMessage.selectedId : (m.mtype == 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ""
    var budy = (typeof m.text == 'string' ? m.text : '')
    const content = JSON.stringify(m.message)
    const type = Object.keys(m.message)[0];
    if (m && type == "protocolMessage") fuzzy.ev.emit("message.delete", m.message.protocolMessage.key);
    var prefix = /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "#";
    const isCmd = body.startsWith(prefix);
    const order = prefix ? body.slice(1).trim().split(' ').shift().toLowerCase() : ''
    var args = body.trim().split(/ +/).slice(1)
    var pushname = m.pushName || "No Name"
    var botNumber = await fuzzy.decodeJid(fuzzy.user.id)
    var isCreator = [botNumber, ...owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
    var itsMe = m.sender == botNumber ? true : false
    var text = q = args.join(" ")

        const fatkuns = (m.quoted || msg)
        const quoted = (fatkuns.xtype == 'buttonsMessage') ? fatkuns[Object.keys(fatkuns)[1]] : (fatkuns.xtype == 'templateMessage') ? fatkuns.hydratedTemplate[Object.keys(fatkuns.hydratedTemplate)[1]] : (fatkuns.xtype == 'product') ? fatkuns[Object.keys(fatkuns)[0]] : m.quoted ? m.quoted : msg
        const mime = (quoted.msg || quoted).mimetype || ''
        const qmsg = (quoted.msg || quoted)
        const isMedia = (quoted.msg || quoted)

    var groupMetadata = m.isGroup ? await fuzzy.groupMetadata(from).catch(e => {}) : ''
    var groupName = m.isGroup ? groupMetadata.subject : ''
    var participants = m.isGroup ? await groupMetadata.participants : ''
    var groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
    var groupOwner = m.isGroup ? groupMetadata.owner : ''
    var isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
    var isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false

    const isImage = (m.xtype === 'imageMessage')
    const isVideo = (m.xtype === 'videoMessage')
    const isSticker = (m.xtype == 'stickerMessage')
    const isAudio = (m.xtype == 'audioMessage')
    const isText = (m.xtype == 'conversation')
    const isReaction = (m.xtype == 'reactionMessage')
    const isViewOnce = (m.xtype == 'viewOnceMessage')
    const isAllMedia = (m.xtype === 'imageMessage' || m.xtype === 'videoMessage' || m.xtype === 'stickerMessage' || m.xtype === 'audioMessage' || m.xtype === 'contactMessage' || m.xtype === 'locationMessage')
    const isQuotedImage = m.xtype === 'extendedTextMessage' && content.includes('imageMessage')
    const isQuotedVideo = m.xtype === 'extendedTextMessage' && content.includes('videoMessage')
    const isQuotedSticker = m.xtype === 'extendedTextMessage' && content.includes('stickerMessage')
    const isQuotedAudio = m.xtype === 'extendedTextMessage' && content.includes('audioMessage')
    const isQuotedTeks = m.xtype === 'extendedTextMessage' && content.includes('quotedMessage')
    const isQuotedTag = m.xtype === 'extendedTextMessage' && content.includes('mentionedJid')
    const isQuotedReply = m.xtype === 'extendedTextMessage' && content.includes('Message')
    const isQuotedText = m.xtype === 'extendedTextMessage' && content.includes('conversation')
    const isQuotedViewOnce = m.xtype === 'extendedTextMessage' && content.includes('viewOnceMessage')


    const mentionByTag = m.xtype == "extendedTextMessage" && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.mentionedJid : []
    const mentionByreply = m.xtype == "extendedTextMessage" && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.participant || "" : ""       
    const mention = typeof(mentionByTag) == 'string' ? [mentionByTag] : mentionByTag
          mention != undefined ? mention.push(mentionByreply) : []
    const mentionUser = mention != undefined ? mention.filter(n => n) : false 

//━━━━━━━━━━━━━━━[ FITURNYA ]━━━━━━━━━━━━━━━━━//
        const Antilinkgc = m.isGroup ? Antilink_gc.includes(from) : false
        // Days
        const hariini = moment.tz('Asia/Jakarta').format('dddd, DD MMMM YYYY')
        const wib = moment.tz('Asia/Jakarta').format('HH : mm : ss')
        const wit = moment.tz('Asia/Jayapura').format('HH : mm : ss')
        const wita = moment.tz('Asia/Makassar').format('HH : mm : ss')

        const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
        if(time2 < "23:59:00"){
        var ucapanWaktu = 'Selamat Malam 🏙️'
        }
        if(time2 < "19:00:00"){
        var ucapanWaktu = 'Selamat Petang 🌆'
        }
        if(time2 < "18:00:00"){
        var ucapanWaktu = 'Selamat Sore 🌇'
        }
        if(time2 < "15:00:00"){
        var ucapanWaktu = 'Selamat Siang 🌤️'
        }
        if(time2 < "10:00:00"){
        var ucapanWaktu = 'Selamat Pagi 🌄'
        }
        if(time2 < "05:00:00"){
        var ucapanWaktu = 'Selamat Subuh 🌆'
        }
        if(time2 < "03:00:00"){
        var ucapanWaktu = 'selamat subuh menjelang pagi 🌃'
        }
        

//━━━━━━━━━━━━━━━[ PUBLIC & SELF ]━━━━━━━━━━━━━━━━━//

//---------------\\

fuzzy.createMessage = async (jidnya, kontennya, optionnya) => {
return await generateWAMessage(jidnya, kontennya, {...optionnya,userJid: fuzzy.authState.creds.me.id,upload: fuzzy.waUploadToServer})
}


const fdoc = {
    key: {
        participant: '0@s.whatsapp.net',
        ...(from ? {
            remoteJid: `status@broadcast`
        } : {})
    },
    message: {
        documentMessage: {
            title: `${global.caption}`,
            jpegThumbnail: thumb,
        }
    }
}

const fakestatus = {
    key: {
        fromMe: false,
        participant: `0@s.whatsapp.net`,
        ...(from ? {
            remoteJid: "status@broadcast"
        } : {})
    },
    message: {
        "imageMessage": {
            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nm.enc",
            "mimetype": "image/jpeg",
            "caption": `${global.caption}`,
            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
            "fileLength": "28777",
            "height": 1080,
            "width": 1079,
            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
            "mediaKeyTimestamp": "1610993486",
            "jpegThumbnail": thumb,
            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
        }
    }
}

	//group target \\
const reply = (teks) => {
fuzzy.sendMessage(from, { text: teks, contextInfo:{"externalAdReply": {"title": `Fauzi Pristel`,"body": `follow ig me`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./media/image/thumbnail.jpg`),"sourceUrl": "https://instagram.com/ziyy__"}}}, { quoted: m})
}
        
const textImg = (teks, buffer = fs.readFileSync(`./media/image/thumbnail.jpg`), mess, men) => {
 return fuzzy.sendMessage(from, { text: teks, jpegThumbnail: buffer, mention: men ? men : [] }, { quoted: mess ? mess : m })
}

const replylink = (id, teks) => {
fuzzy.sendMessage(id, {text: teks, contextInfo: { "externalAdReply": { "mentionedJid": sender, "title": `${global.caption}`, "mediaType": 1, "renderLargerThumbnail": true,  "showAdAttribution": true, "jpegThumbnail": thumb, "mediaUrl": 'https://youtube.com/@xZiyy?feature=share8', "thumbnail": thumb,  "thumbnailUrl": 'https://telegra.ph/file/ca6da6f6a85d6db71b876.jpg', "sourceUrl": 'https://youtube.com/@xZiyy?feature=share8', }}}, { quoted: fakestatus})


}

const sendvn = (teks) => {
pien = fs.readFileSync(`./media/sound/${teks}.mp3`)            
fuzzy.sendMessage(from, { audio: pien, mimetype: 'audio/mpeg', ptt: true, contextInfo: { "externalAdReply": { "mentionedJid": sender, "title": `Fauzi Pristel`, "mediaType": 1, "renderLargerThumbnail": true, "showAdAttribution": true, "jpegThumbnail": thumb, "mediaUrl": 'https://youtube.com/@xZiyy?feature=share8', "thumbnail": fs.readFileSync(`./media/image/thumbnail.jpg`), "thumbnailUrl": '', "sourceUrl": 'https://youtube.com/@xZiyy?feature=share8'}}}, { quoted: msg});

} 


//========[ ICIKIWIR ]===========\\

const makeid = (length) => {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() *
            charactersLength));
    }
    return result;
}

async function loading () {
var load = [
 '□□□□□□□0%',
 '■□□□□□□20%',
 '■■□□□□□40%',
 '■■■□□□□60%',
 '■■■■■□□80%',
 '■■■■■■□90%',
 '■■■■■■■100%'
]
let { key } = await fuzzy.sendMessage(from, {text: 'loading...'})//Awalan

for (let i = 0; i < load.length; i++) {
/*await delay(10)*/
await fuzzy.sendMessage(from, {text: load[i], edit: key });//setelah nya
}
}

async function obfusjr(query) {
return new Promise((resolve, reject) => {
try {
const obfuscationResult = obfuscator.obfuscate(query, {compact: false, controlFlowFlattening: true, controlFlowFlatteningThreshold: 1, numbersToExpressions: true, simplify: true,  stringArrayShuffle: true, splitStrings: true, stringArrayThreshold: 1 });
const result = { status: 200, author: `xZiyy`, result: obfuscationResult.getObfuscatedCode() }
resolve(result)
} catch (err) {
reject(err)
}
})
}



        if (Antilinkgc) {
        if (budy.includes(`chat.whatsapp.com`)) {
        if (!isBotAdmins) return m.reply(`${mess.botAdmin}, to kick the person who send link`)
        let gclink = (`https://chat.whatsapp.com/`+await fuzzy.groupInviteCode(from))
        let isLinkThisGc = new RegExp(gclink, 'i')
        let isgclink = isLinkThisGc.test(m.text)
        if (isgclink) return fuzzy.sendMessage(from, {text: `\`\`\`「 Group Link Detected 」\`\`\`\n\nYou won't be kicked by a bot because what you send is a link to this group`})
        if (isAdmins) return fuzzy.sendMessage(from, {text: `\`\`\`「 Group Link Detected 」\`\`\`\n\nAdmin has sent a link, admin is free to post any link`})
        if (isCreator) return fuzzy.sendMessage(from, {text: `\`\`\`「 Group Link Detected 」\`\`\`\n\nOwner has sent a link, owner is free to post any link`})
        kice = m.sender
        await fuzzy.sendMessage(from,
			    {
			        delete: {
			            remoteJid: from,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			fuzzy.groupParticipantsUpdate(from, [m.sender], 'remove')
			fuzzy.sendMessage(from, {text:`\`\`\`「 Group Link Detected 」\`\`\`\n\n@${kice.split("@")[0]} Has been kicked because of sending group link in this group`, contextInfo:{mentionedJid:[kice]}}, {quoted:msg})
            }            
        }

        toxic = ['anjing', 'babi', 'memek', 'kontol']
        if (body.match(['anjing', 'babi', 'memek', 'kontol'])) {
        sendvn('dosa')
        }
        nowa = ['@6283804078729']
        if (body.match(nowa)) {
        sendvn('lu siapa anjir')
        await sleep(1500)
        reply(` ${global.ownername} lagi sibukk nanti ajaaa balesnya -_-`)
        }
        toz = ['anj', 'tai']
        for (let tox1 of toz){
		if (body === tox1){
        sendvn('dosa')
        }}
        re = ['al', 'aldi', 'Fauzi', 'zi', 'ziyy', 'iz']
        for (let al of re){
		if (body === al){
        reply(' Kenapa?, Tinggalkan Pesan aja, Owner ku Lagi Sibuk ayy, Tunggu aja Nnati juga dijawab')
        }}
															
		hshs = [`bot`]
        if (body.match(hshs)) {
        reply(' ada yang bisa saya bantu? silahkan ketik #menu')
        }
        if (body.match("wijdisis")) {
        reply(`Pu Pa Pe Pe Biasakan lah Mengucapkan Salam`)
        }
/*
        if (body === 'oi inn'){
        reply('apa, dh aktif ni')
        reply('lu bulan puasa sama siapa aja zi')
        }
        if (body === 'puasa cuma sama robot'){
        reply('Yoman Cees Gw Inimah xD')
        }
        if (body === 'bisa ae lu inn'){
        reply('ehh tapi lu kemarin nidurin cewe kan xD')
        }
        if (body === 'gw delete lu inn'){
        fuzzy.sendMessage(from, { react: { text: "🗿", key: m.key }})
        reply('fakta xD')
        }*/
        salam = [`asalamualaikum`, `Assalamualaikum`, `Assalamu'alaikum`]
        if (body.match(salam)) {
        //client.sendMessage(from, {audio: {url: `${astaga}`},ptt: true,mimetype: 'audio/mpeg'},{quoted:m})
        reply('Walaikumsalam Warahmatullahi wabarakatuh_')
        }
        woa = [`woy`, `woi`]
        if (body.match(woa)) {
        sendvn('oyy')
        }
        knw = [`saint`, `sedih`, `sain`]
        if (body.match(knw)) {
        sendvn('kenapa')
        }

//━━━━━━━━━━━━━━━[ AUTO READ ]━━━━━━━━━━━━━━━━━//
        if (!fuzzy.public) {
            if (!m.key.fromMe) return 
        }
        
       
            if (vn) {
            setInterval(async() => {
            fuzzy.sendPresenceUpdate('recording', from)
            }, 1000)
            } else if (ngetik) {
            setInterval(async() => {
            fuzzy.sendPresenceUpdate('menyusun', from)
            }, 1000)
            }        
 

                             /* { contollog } */
   //=======================================================//
     if (isCmd) console.log(chalk.black(chalk.bgRed('[ CMD ]')), chalk.black(chalk.bgGreen(moment.tz('Asia/Jakarta').format('HH:mm'))), chalk.black(chalk.bgBlue(`${order}`)) + '\n' + chalk.magenta('=> Dari'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> Di'), chalk.green(m.isGroup ? pushname : 'Private Chat', from, groupName))
     if (!isCmd) console.log(chalk.black(chalk.bgWhite('[ PESAN ]')), chalk.black(chalk.bgGreen(moment.tz('Asia/Jakarta').format('HH:mm'))), chalk.black(chalk.bgBlue(`${body}`)) + '\n' + chalk.magenta('=> Dari'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> Di'), chalk.green(m.isGroup ? pushname : 'Private Chat', from, groupName))
     

 // private chat if (!isGroup && !isCmd ) console.log(color("[PRIVATE]", "greenyellow"), color(moment.tz('Asia/Jakarta').format('HH:mm'), "green"), color(budy, "cyan"), color('dari', 'gold'), color(`${pushname}`, 'orange'))
// group chatif (isGroup && !isCmd ) console.log(color("[GRUP]", "gold"), color(moment.tz('Asia/Jakarta').format('HH:mm'), "green"), color(budy, "cyan"), color('dari', 'gold'), color(`${pushname}`, 'orange'), color('di gc', 'purple'), color(groupName, "deeppink"))
// pvtc if (!isGroup && isCmd ) console.log(color("[CMD]", "blue"), color(moment.tz('Asia/Jakarta').format('HH:mm'), "green"), color(`${command} [${args.length}]`, 'cyan'), color('dari', 'gold'), color(`${pushname}`, 'orange'))
// groupc if (isGroup && isCmd ) console.log(color("[CMD]", "blue"), color(moment.tz('Asia/Jakarta').format('HH:mm'), "green"), color(`${command} [${args.length}]`, 'cyan'), color('dari', 'gold'), color(`${pushname}`, 'orange'), color('di gc', 'purple'), color(groupName, "deeppink"))


if (!fuzzy.public) {
if (!m.key.fromMe) return
}

try{
switch(order) {
case 'twt':{
const sections = [
    {
      title: `List MENU`,
      rows: [
        {
          title: "Claude AI",
          rowId: ".claude",
          description: "Menampilkan Fitur AI Claude-2.1",
        },
        {
          title: "Bing Image Creator",
          rowId: ".bingimg",
          description: "Menampilkan Fitur Create Image",
        },
        {
          title: "Bing Image To Image",
          rowId: ".bingimg",
          description: "Menampilkan Fitur Bing Image to Image",
        },
      ],
    }
  ];

  const listMessage = {
    text: `Hai, @${msg.sender.split("@")[0]}.\n\nSelamat datang di YanzBotz-APIs,\nSilahkan Pilih Fitur AI Yang kamu ingin kan!!`,
    footer: "YanzBotz-APIs", 
    title: "⬒ ───⟢⟨ *LIST MENU AI* ⟩⟣─── ⬒",
    mentions: [m.sender],
    buttonText: "Click Here",
    sections,
  };
 fuzzy.sendMessage(from, listMessage, { quoted: m });
}
break
case 'sendbc': {
for (let inw of datagc) {
await sleep(1500)
sdb =`
「 𝐒𝐀𝐈𝐍𝐓 𝐁𝐎𝐓 BROADCAST 」

${text}
`
fuzzy.sendMessage(inw, {text: sdb, contextInfo: {
                        "externalAdReply": {
                            "mentionedJid": sender,
                            "title": `${global.caption}`,
                            "mediaType": 1,
                            "renderLargerThumbnail": true,
                            "showAdAttribution": true,
                            "jpegThumbnail": thumb,
                            "mediaUrl": 'https://youtube.com/@xZiyy?feature=share8',
                            "thumbnail": thumb,
                            "thumbnailUrl": 'https://telegra.ph/file/ca6da6f6a85d6db71b876.jpg',
                            "sourceUrl": 'https://youtube.com/@xZiyy?feature=share8',
                        }
                    }}, { quoted: fakestatus})
}
}
break




            case prefix + ['oi']:
            case prefix + ['woi']: {
        golokk = fs.readFileSync('./media/sound/dosa.mp3')            
               fuzzy.sendMessage(from, {
    audio: golokk,
    mimetype: 'audio/mpeg',
    ptt: true,
    contextInfo: {
        "externalAdReply": {
            "mentionedJid": sender,
            "title": `${global.caption}`,
            "mediaType": 1,
            "renderLargerThumbnail": true,
            "showAdAttribution": true,
            "jpegThumbnail": thumb,
            "mediaUrl": 'https://youtube.com/@xZiyy?feature=share8',
            "thumbnail": thumb,
            "thumbnailUrl": 'https://telegra.ph/file/e1155ce7655250545afa1.jpg',
            "sourceUrl": 'https://youtube.com/@xZiyy?feature=share8'
        }
    }
}, { quoted: msg});
}
break
     case 'p': {
                reply(`Ketik #menu Untuk Melihat List Menu Bot`)
                }
                break
            

/*
case 'saint': {
menu1=`
saint multi device
dibuat menggunakan module javascript yang
diprogram oleh developer @xZiyy
kegunaan saint adalah memudahkan pengguna
WhatsApp untuk beraktivitas di luar kemampuan sistem
WhatsApp, contoh nya seperti membuat sticker, download media, dll,
saint hanya menyediakan beberapa fitur yang sudah disediakan oleh
dev.
jika ingin menggunakan fitur dari saint bot
silahkan ketik /menu
`
const asu = ["application/vnd.ms-excel", "application/vnd.openxmlformats-officedocument.presentationml.presentation", "application/msword", "application/pdf"]
const pickrandom = asu[Math.floor(Math.random() * asu.length)]
                fuzzy.sendMessage(from, {
                    react: {
                        text: "⏱️",
                        key: m.key
                    }
                })
                const more = String.fromCharCode(8206)
                const readmore = more.repeat(4001)

                function toCommas(x) {
                    x = x.toString()
                    var pattern = /(-?\d+)(\d{3})/;
                    while (pattern.test(x))
                        x = x.replace(pattern, "$1,$2");
                    return x;
                }

                var buttons = [{
                    buttonId: `${prefix}owner`,
                    buttonText: {
                        displayText: 'owner'
                    },
                    type: 1
                }]
                var buttonMessage = {
                    document: thumbnail,
                    fileName: `hii there`,
                    mimetype: pickrandom,
                    fileLength: "99999999999",
                    pageCount: "999", 
                    caption: menu1,
                    mentions: [sender],
                    footer: `
                    silahkan ketik /menu
                    `,
                    buttons: buttons,
                    headerType: 3,
                    contextInfo: {
                        "externalAdReply": {
                            "mentionedJid": sender,
                            "title": 'OPEN AI',
                            "mediaType": 1,
                            "renderLargerThumbnail": true,
                            "showAdAttribution": true,
                            "jpegThumbnail": thumbnail,
                            "mediaUrl": 'youtube.com/c/febzabotz',
                            "thumbnail": thumbnail,
                            "thumbnailUrl": 'https://telegra.ph/file/48c1100dbee98a9dadb55.jpg',
                            "sourceUrl": 'youtube.com/c/febzabotz',
                        }
                    }
                }
                fuzzy.sendMessage(from, buttonMessage, {
                    quoted: m
                })
            }
            break*/
            case 'menu':{
            let p = 0
// kalo gasuka tampilannya ubah ae sendiri
// ${bl} ${bd}${ic}${prefix}fiturnya ${ic}${bd}
bd = '*' // bold
mc = '```' // monospace
shp = '⬡' // apaajah
bl = '-' // bulled list = •
bq = '>' // block quote
ic = '`' // inline code
ii = '_' // italic
//fuzzy.sendbutvid(from, olv, `${global.caption}`, gipt, null, thumb, {quoted: fakestatus})
fuzzy.sendMessage(from, { video: { url : `https://telegra.ph/file/ebe80f822ab6d6c992086.mp4`, type : "video/mp4" },gifPlayback: true,
  caption: `${bd}Hii ${pushname} ${ucapanWaktu}${bd}

┏━⬢ ${bd}INFORMASI${bd}
┃ ⌬ ${mc}name = ${global.botname}${mc}
┃ ⌬ ${mc}mode = ${fuzzy.public ? 'PUBLIC' : 'SELF'}${mc}
┃ ⌬ ${mc}owner = ${global.ownername}${mc}
┃ ⌬ ${mc}Platform : ${os.platform()}${mc}
┃ ⌬ ${mc}Runtime : ${runtime(process.uptime())}${mc}
┃ ⌬ ${mc}Language : Javascript${mc}
┃ ⌬ ${mc}Lib : Baileys-MD${mc}
┗━⬢

┏━⬢ ${bd}USERS & TIME${bd}
┃ ⌬ ${mc}user = @${m.sender.split("@")[0]}${mc}
┃ ⌬ ${mc}name = ${pushname}${mc}
┃ ⌬ ${mc}status = ${isCreator ? "OWNER":"NPC"}${mc}
┃ ⌬ ${mc}date = ${hariini}${mc}
┃ ⌬ ${mc}wib  = ${wib}${mc}
┃ ⌬ ${mc}wit  = ${wit}${mc}
┃ ⌬ ${mc}wita = ${wita}${mc}
┗━⬢
     ${bd}「 𝐒𝐀𝐈𝐍𝐓 𝐁𝐎𝐓 」${bd}
            𝐂𝐨𝐦𝐦𝐚𝐧𝐃

 - ${bd}GENERAL FITUR${bd}
${bl} ${bd}${ic}${prefix}sticker${ic}${bd}
${bq} ${ii}${bd}ex:kirim gambar dengan caption ${prefix}sticker${bd}${ii}
${bq} ${ii}p: untuk membuat sticker${ii}
${bl} ${bd}${ic}${prefix}stickerwm <text|text>${ic}${bd}
${bq} ${ii}${bd}ex:kirim gambar with cap ${prefix}swm namamu1|namamu2${bd}${ii}
${bq} ${ii}p: untuk membuat sticker dengan wm namamu${ii}
${bl} ${bd}${ic}${prefix}emojimix <😂+😭>${ic}${bd}
${bq} ${ii}${bd}ex:ketik ${prefix}emojimix emoji1+emoji2 lalu kirim${bd}${ii}
${bq} ${ii}p: untuk menyatukan emoji${ii}

 - ${bd}LIST MENU${bd}
${bl} ${bd}${ic}${prefix}allmenu < maintenance >${ic}${bd}


     - ${bd}Thanks To${bd}
       • Yanz
       • DikaArdnt
  
  
 𝐂𝐨𝐩𝐲 𝐑𝐢𝐠𝐡𝐭 𝐁𝐲 ${bd}${ic}Baileys${ic}${bd}
   𝐂𝐫𝐞𝐚𝐭𝐞𝐝 : 𝐱-𝐙𝐢𝐲𝐲`, contextInfo: {
 externalAdReply: {
containsAutoReply: true,
mediaType: 1,
mediaUrl: `https://youtube.com/@xZiyy?feature=share8`,
renderLargerThumbnail: true,
showAdAttribution: true,
sourceUrl: "https://instagram.com/xziyy__",
thumbnailUrl: 'https://telegra.ph/file/9e478fae7e12eb2cb296b.jpg',
title: `Hello World`,
body: `tap for fly`,},},}, { quoted: fakestatus });
          /* fuzzy.sendMessage(from, { image: thumb, caption: olv, contextInfo:{"externalAdReply": {"title": `fauzzy`,"body": `follow ig me`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./media/image/thumbnail.jpg`),"sourceUrl": "https://instagram.com/ziyy__"}}}, { quoted: fakestatus})
          */
   /*           fuzzy.sendMessage(from, {text: olv, contextInfo: {
                        "externalAdReply": {
                            "mentionedJid": sender,
                            "title": `${global.caption}`,
                            "mediaType": 1,
                            "renderLargerThumbnail": true,
                            "showAdAttribution": true,
                            "jpegThumbnail": thumb,
                            "mediaUrl": 'https://youtube.com/@xZiyy?feature=share8',
                            "thumbnail": thumb,
                            "thumbnailUrl": 'https://telegra.ph/file/e1155ce7655250545afa1.jpg',
                            "sourceUrl": 'https://youtube.com/@xZiyy?feature=share8',
                        }
                    }}, { quoted: fakestatus})*/
  /*fuzzy.sendMessage(from, {
  document: fs.readFileSync("./package.json"),
  fileName: '© єнαηz',
  mimetype: "application/pdf",
  fileLength: 99999999999999,
  bpageCount: 10909143,	
  caption:olv,
      contextInfo: {
      externalAdReply: {
  showAdAttribution: true,
  title: `${global.caption}`,
  body: `Hallo Hallo, ${pushname}`,
  mediaUrl: `https://youtube.com/@xZiyy?feature=share8`,
  thumbnailUrl: 'https://telegra.ph/file/e1155ce7655250545afa1.jpg',
  sourceUrl: `https://youtube.com/@xZiyy?feature=share8`,
  mediaType: 2,
  renderLargerThumbnail: true 
  }}}, { quoted: fakestatus,ephemeralExpiration: 86400});
           */
}
            break
/*
            case 'allmenu':
            await loading()
            let p = 0
            olv =`
${b}Hii ${pushname} ${ucapanWaktu}${bd}

┏━⬢ ${bd}info user${bd}
┃
┃ ⌬ ${g}user${g} = @${m.sender.split('@')[0]}
┃ ⌬ ${g}name = ${pushname}${g}
┃ ⌬ ${g}status = ${isCreator ? "OWNER":"NPC"}${g}
┃
┗━⬢


┏━⬢ ${bd}informasi${bd}
┃
┃ ⌬ ${g}name = ${global.botname}${g}
┃ ⌬ ${g}mode = ${fuzzy.public ? 'PUBLIC' : 'SELF'}${g}
┃ ⌬ ${g}owner = ${global.ownername}${g}
┃ ⌬ ${g}Platform : ${os.platform()}${g}
┃ ⌬ ${g}Runtime : ${runtime(process.uptime())}${g}
┃ ⌬ ${g}Language : Javascript${g}
┃ ⌬ ${g}Lib : Baileys-MD${g}
┃
┗━⬢

┏━⬢ ${bd}Time${bd}
┃
┃ ⌬ ${g}date = ${hariini}${g}
┃ ⌬ ${g}wib  = ${wib}${g}
┃ ⌬ ${g}wit  = ${wit}${g}
┃ ⌬ ${g}ID/wita = ${wita}${g}
┃
┗━⬢

     - Menu ${global.botname}

┏⟨ ${bd}only owner${bd}
┃
┃ ${g}${prefix}join${g}
┃ ${g}${prefix}pushkontak${g}
┃ ${g}${prefix}out${g}
┃ ${g}${prefix}setexif${g}
┃ ${g}${prefix}owner${g}
┃ ${g}${prefix}public${g}
┃ ${g}${prefix}self${g}
┃ ${g}${prefix}setnamabot${g}
┃ ${g}${prefix}setbio${g}
┃
┗⟨

┏⟨ ${bd}only sticker${bd}
┃
┃ ${g}${prefix}sticker <reply img>${g}
┃ ${g}${prefix}qc <text>${g}
┃ ${g}${prefix}emojimix 🥵+🤤${g}
┃ ${g}${prefix}toimg <reply stiker>${g}
┃
┗⟨

┏⟨ ${b}only convert${b}
┃
┃ ${g}${prefix}tourl <link>${g}
┃ ${g}${prefix}tiktok <link>${g}
┃ ${g}${prefix}tiktokaudio <link>${g}
┃
┗⟨

┏⟨ ${b}only random${b}
┃
┃ ${g}${prefix}ppcouple${g}
┃
┗⟨

┏⟨ ${b}only Anonymous${b}
┃
┃ ${g}${prefix}menfess (Maintenance)${g}
┃
┗⟨

┏⟨ ${b}only Group${b}
┃
┃ ${g}${prefix}antilinkgc on/off${g}
┃ ${g}${prefix}antilinkgc on/off${g}
┃
┗⟨

  
     - Thanks To
       • YanzBotz
       • DikaArdnt
  
  
 𝐂𝐨𝐩𝐲 𝐑𝐢𝐠𝐡𝐭 𝐁𝐲 Baileys
   𝐂𝐫𝐞𝐚𝐭𝐞𝐝 : 𝐱-𝐙𝐢𝐲𝐲
            `
              fuzzy.sendMessage(from, {text: olv, contextInfo: {
                        "externalAdReply": {
                            "mentionedJid": sender,
                            "title": `all menu dari saint bot`,
                            "mediaType": 1,
                            "renderLargerThumbnail": true,
                            "showAdAttribution": true,
                            "jpegThumbnail": thumb,
                            "mediaUrl": 'https://youtube.com/@xZiyy?feature=share8',
                            "thumbnail": thumb,
                            "thumbnailUrl": 'https://telegra.ph/file/e1155ce7655250545afa1.jpg',
                            "sourceUrl": 'https://youtube.com/@xZiyy?feature=share8',
                        }
                    }}, { quoted: fakestatus})
           
            break
*/
   
  
   
case 'ping': case 'botstatus': case 'statusbot': {
const used = process.memoryUsage()
const cpus = os.cpus().map(cpu => {
cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
return cpu
})
const cpu = cpus.reduce((last, cpu, _, { length }) => {
last.total += cpu.total
last.speed += cpu.speed / length
last.times.user += cpu.times.user
last.times.nice += cpu.times.nice
last.times.sys += cpu.times.sys
last.times.idle += cpu.times.idle
last.times.irq += cpu.times.irq
return last
}, {
speed: 0,
total: 0,
times: {
user: 0,
nice: 0,
sys: 0,
idle: 0,
irq: 0
}
})
let timestamp = speed()
let latensi = speed() - timestamp
neww = performance.now()
oldd = performance.now()
respon = `
Kecepatan Respon ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}

💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
`.trim()
reply(respon)
}
break

//--------------------[ OWNER ]------------------\\
            case 'enc': {
            if (!isCreator) return reply(mess.owner)
            if (!quoted) return reply(`Contoh ${prefix+order} code`)
            let obs = await obfusjr(quoted)
            reply(`${obs.result}`)
            }
            break
            case 'culik': {
                if (args.length < 1) return m.reply('_*Masukin id grupnya tolol*_')
                let pantek = []
                for (let i of groupMembers) {
                    pantek.push(i.jid)
                }
                fuzzy.groupParticipantsUpdate(args[0], pantek)
            }
            break
          case 'pushkontak': {
          if (!text) return m.reply(`Example ${prefix}${order} Hi Semuanya`)
          if (!isCreator) return reply(mess.owner)
          let get = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id);
          let count = get.length;
          let sentCount = 0;
          reply('*_Sedang Push Kontak..._*');
          for (let i = 0; i < get.length; i++) {
            setTimeout(function() {
              fuzzy.sendMessage(get[i], { text: text });
              count--;
              sentCount++;
              if (count === 0) {
                reply(`*_Semua pesan telah dikirim!_*:\n*_Jumlah pesan terkirim:_* *_${sentCount}_*`);
              }
            }, i * 1000); // delay setiap pengiriman selama 1 detik
          }
        }
        break
            case 'setnamabot': case 'setnamebot': {
            if (!isCreator) return reply(mess.owner)
            if (!text) return `Contoh : ${prefix + order} WhatsApp `
            let name = await fuzzy.updateProfileName(text)
            m.reply(`Berhasil mengganti nama bot menjadi ${name}`)
            }
            break
            case 'setstatus': case 'setbiobot': case 'setbotbio': {
            if (!isCreator) return reply(mess.owner)
            if (!text) return reply(`hii WhatsApp`)
            let name = await fuzzy.updateProfileStatus(text)
            m.reply(`Berhasil mengubah status bio bot menjadi ${name}`)
            }
            break
            
            case 'public': {
                if (!isCreator) return reply(mess.owner)
                fuzzy.public = true
                reply('Successful Change To Public Usage')
            }
            break
            case 'self': {
                if (!isCreator) return reply(mess.owner)
                fuzzy.public = false
                reply('Successful Change To Self Usage')
            }
            break
            case 'owner': case 'creator': {
              fuzzy.sendContact(from, owner, m)
            }
            break
            case 'setexif': {
                if (!isCreator) return reply(mess.owner)
              if (!text) return replay(`Example : ${prefix + order} packname|author`)
          global.packname = text.split("|")[0]
          global.author = text.split("|")[1]
          reply(`Exif Has Been Successfully Changed to\n\n${shp} Packname : ${global.packname}\n${shp} Author : ${global.author}`)
            }
            break
case 'join': {
if (!isCreator) return reply(mess.owner)
if (!text) return reoly('Masukkan Link Group!')
if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) throw 'Link Invalid!'
reply(mess.wait)
let result = args[0].split('https://chat.whatsapp.com/')[1]
await fuzzy.groupAcceptInvite(result).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
reply('succes join to group')
reply(`i'm saint bot, i ready help you`)
}
break
case 'out': case 'leave': {
if (!isCreator) return reply(mess.owner)
await fuzzy.groupLeave(from).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
}
break

case 'setbcgc':  {
if (!isCreator) return msg.reply('*Khusus own*')
if (!args[0]) return msg.reply(`*Contoh : ${prefix + order} add 62856977253266-1626975227@g.us*`)
if (args[1]) {
gcnye = args[1]
}
const isgwc = datagc.includes(gcnye)
if (args[0] === "add") {
if (isgwc) return msg.reply('*group Ini telah Di masukkan ke database*')
datagc.push(gcnye)
fs.writeFileSync('./media/database/group.json', JSON.stringify(datagc))
reply(`Succes add groupnya ke database`)
} else if (args[0] === "delete") {
if (!isgwc) return reply('*group Ini Telah Di hapus di database*')
let delgwc = datagc.indexOf(gcnye)
datagc.splice(delgwc, 1)
fs.writeFileSync('./media/database/group.json', JSON.stringify(datagc))
reply(`*Berhasil Menghapus data Group`)
} else {
reply("Error")
}
}
break

case 'setowner':  {
if (!isCreator) return msg.reply(mess.owner)
if (!args[0]) return msg.reply(`*Contoh : ${prefix + order} add 62856977253266*`)
if (args[1]) {
owna = args[1]
}
const isgwc = datagc.includes(owna)
if (args[0] === "add") {
if (isgwc) return msg.reply('*number ini telah ada di database*')
owner.push(owna)
fs.writeFileSync('./media/database/owner.json', JSON.stringify(owner))
reply(`Succes add number ke database`)
} else if (args[0] === "delete") {
if (!isgwc) return reply('*number ini tidak ada di database*')
let delown = owner.indexOf(owna)
owner.splice(delown, 1)
fs.writeFileSync('./media/database/owner.json', JSON.stringify(owner))
reply(`*Berhasil Menghapus number di database`)
} else {
reply("Error")
}
}
break

            case 'setpresence':
            if (!isCreator) return reply(mess.owner)
            if (!args[0]) return reply(`${prefix}${order} vn atau ngetik or off`)
            if((args[0]) == 'vn'){
            if(vn) return reply('_Sudah diaktifkan sebelumnya!_')
            ngetik = false
            vn = true
            reply(`_Succses mengganti ke vn_`)
            } else
            if ((args[0]) == 'ngetik'){
            if(ngetik) return reply('_Sudah diaktifkan sebelumnya!_')
            ngetik = true
            vn = false
            reply(`_Succses mengganti ngetik_`)
            } else if ((args[0]) == 'off'){
            ngetik = false
            vn = false
            reply(`_Succses mematikan autovn dan autongetik_`)
            }
            break
case "backup":
        {
          if (!isCreator) reply(mess.owner); 
          reply("Sabar Mas Lagi Backup!!!");
          const { execSync } = require("child_process");
          const ls = (await execSync("ls"))
            .toString()
            .split("\n")
            .filter(
              (pe) =>
                pe != "node_modules" &&
                pe != "../media/session" &&
                pe != "package-lock.json" &&
                pe != "yarn.lock" &&
                pe != ""
            );
          const exec = await execSync(`zip -r New.zip ${ls.join(" ")}`);
          await fuzzy.sendMessage(from,
            {
              document: await fs.readFileSync("./New.zip"),
              mimetype: "application/zip",
              fileName: "New.zip",
            },
            { quoted: m }
          );
          await execSync("rm -rf New.zip");
        }
        break

//---------------------[ CASE CONVERTER && STICKER ]----------------\\
            case 'quote': case 'gc': {
             await loading()
            const { quote } = require('../library/scraper/quote.js')
            if (!q) return ('Masukan Text')
            let ppnyauser = await await fuzzy.profilePictureUrl(m.sender, 'image').catch(_=> 'https://telegra.ph/file/6880771a42bad09dd6087.jpg')
            const rest = await quote(q, pushname, ppnyauser)
            m.reply(mess.wait)
            fuzzy.sendImageAsSticker(from, rest.result, m, { packname: `${global.packname}`, author: `${global.author}`})
            }
            break
              case 'emojimix': {
              await loading()
                let [emoji1, emoji2] = text.split`+`
                if (!emoji1) return reply(`Contoh : ${prefix + order} 😅+🤔`)
                if (!emoji2) return reply(`Contoh : ${prefix + order} 😅+🤔`)
                let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
                for (let res of anu.results) {
                    let encmedia = await fuzzy.sendImageAsSticker(from, res.url, fdoc, {
                        packname: global.packname,
                        author: global.author,
                        categories: res.tags
                    })
                    await fs.unlinkSync(encmedia)
                }
            }
            break
              case 'toimage': case 'toimg': {
                await loading()
                if (!/webp/.test(mime)) return `Reply sticker dengan caption *${prefix + order}*`
                m.reply(mess.wait)
                let media = await fuzzy.downloadAndSaveMediaMessage(qmsg)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) return err
                    let buffer = fs.readFileSync(ran)
                    fuzzy.sendMessage(from, { image: buffer }, { quoted: fdoc })
                    fs.unlinkSync(ran)
                })
            }
            break
           case 'sticker': case 's': case 'stickergif': case 'sgif': {
            if (!quoted) return replay(`Reply Video/Image With Caption ${prefix + order}`)
                    if (/image/.test(mime)) {
               await loading()
               fuzzy.sendMessage(from, { react: { text: "⏱️", key: m.key }})
                let media = await quoted.download()
                let encmedia = await fuzzy.sendImageAsSticker(from, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return reply('Maximum 10 Seconds!')
                await loading()
                  fuzzy.sendMessage(from, { react: { text: "⏱️", key: m.key }})
                  let media = await quoted.download()
                let encmedia = await fuzzy.sendVideoAsSticker(from, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else {
                reply(`Send Image/Video With Caption ${prefix + order}\nVideo Duration 1-9 Seconds`)
                }
            }
            break
    case 'stickerwm': case 'swm':{
        if (!text) return reply(`${prefix + order} fauzi|pristel`)
       const swn = args.join(" ")
   const pcknm = swn.split("|")[0];
         const atnm = swn.split("|")[1];
            if (m.quoted.isAnimated === true) {
       fuzzy.downloadAndSaveMediaMessage(quoted, "jget")
     fuzzy.sendMessage(from, {sticker:fs.readFileSync("./media/sticker/jget.webp")},{quoted:fakestatus})
     } else if (/image/.test(mime)) {
      let media = await quoted.download()
      let encmedia = await fuzzy.sendImageAsSticker(from, media, m, { packname: pcknm, author: atnm })
      } else if (/video/.test(mime)) {
          if ((quoted.msg || quoted).seconds > 11) return reply('Maximum 10 Seconds!')
      let media = await quoted.download()
      let encmedia = await fuzzy.sendVideoAsSticker(from, media, m, { packname: pcknm, author: atnm })
       await fs.unlinkSync(encmedia)
     } else {
     reply(`Photo/Video?`)
           }
       }
      break
         case 'ppcp':
         case 'ppcouple':
         case 'couple': {
            await loading()
            let data = fs.readFileSync('./library/ppcp.js');
            let jsonData = JSON.parse(data);
            let randIndex = Math.floor(Math.random() * jsonData.length);
            let json = jsonData[randIndex];
            let randCowo = await getBuffer(json.cowo)
            let randCewe = await getBuffer(json.cewe)
            fuzzy.sendMessage(from, {
               image: randCowo,
               caption: '*boy*',
               quoted: fdoc
            })            
            fuzzy.sendMessage(from, {
               image: randCewe,
               caption: '*Girl*',
               quoted: fdoc
            })
         }
         break
case 'tourl': {
reply(mess.wait)
let media = await fuzzy.downloadAndSaveMediaMessage(quoted,makeid(5))
let anu = await TelegraPh(media)
reply(util.format(anu))
await fs.unlinkSync(media)
}
break
     case 'tomp4': 
	        case 'tovideo': {
                if (!/webp/.test(mime)) return reply(`Reply stiker dengan caption *${prefix + order}*`)
                reply(mess.wait)
                let media = await fuzzy.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await conn.sendMessage(from, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: m })
                await fs.unlinkSync(media)
                
            }
            break
//-------------[ OPENAI ,] ------------\\
/*
case 'ai-img' :{
if (!q) return m.reply("Input Text!")
var jadien = await Ikyy.tools.translate(q, 'en')
reply("Wait...,Making...")
try {
var createAI = await openai.createImage({
    prompt: jadien.toLowerCase(),
    n: 1,
    size: "512x512"
})
fuzzy.sendMessage(from, { image: { url: createAI.data.data[0].url }, caption: '*'+q+'*' }, { quoted: msg })
} catch (e) {
m.reply("Error!\n\n"+e)
}
}
break

case 'openai' :{
        if (!text) return m.reply("Input Text!!!")
	const completion = await openai.createCompletion({
        model: "text-davinci-003",
         prompt: text,
         temperature: 0.9,
         max_tokens: 4000,
         top_p: 0.9,
         frequency_penalty: 0.0,
         presence_penalty: 0.0
        })
         
    fuzzy.sendMessage(from, { text:  "```Answers :\n```" + completion.data.choices[0].text, contextInfo:{"externalAdReply": {"title": global.caption,"body": `follow ig me`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./media/image/thumbnail.jpg`),"sourceUrl": "https://instagram.com/ziyy__"}}}, { quoted: fakestatus})       
     }
     break*/
//---------------------[ CASE GROUP ]----------------\\

case 'antilinkgc': {
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply (mess.botAdmin)
if (!isAdmins && !isCreator) return reply(mess.admin)
if (args[0] === "on") {
if (Antilinkgc) return reply('Already activated')
Antilink_gc.push(from)
fs.writeFileSync('./media/database/antilinkgc.json', JSON.stringify(Antilink_gc))
reply('Success in turning on antiwame in this group')
var groupe = await fuzzy.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
fuzzy.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nNobody is allowed to send group link in this group, one who sends will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:msg})
} else if (args[0] === "off") {
if (!Antilinkgc) return reply('Already deactivated')
let off = Antilink_gc.indexOf(from)
Antilink_gc.splice(off, 1)
fs.writeFileSync('./media/database/antilinkgc.json', JSON.stringify(Antilink_gc))
reply('Success in turning off antiwame in this group')
} else {
await reply(`Please Type The Option\n\nExample: ${prefix + order} on\nExample: ${prefix + order} off\n\non to enable\noff to disable`)
  }
  }
  break
case 'bcgc': case 'bcgroup': {
if (!isCreator) return reply(mess.owner)
await loading()
if (!text) return reply(`Text mana?\n\nExample : ${prefix + order} hallo`)
let getGroups = await fuzzy.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
let anu = groups.map(v => v.id)
reply(`Mengirim Broadcast Ke ${anu.length} Group Chat, Waktu Selesai ${anu.length * 1.5} detik`)
for (let i of anu) {
await sleep(1500)
txtbc =`
『 BROADCAST BOT 』

${text}
`
fuzzy.sendMessage(i, {text: txtbc, contextInfo: {
                        "externalAdReply": {
                            "mentionedJid": sender,
                            "title": `${ucapanWaktu}`,
                            "mediaType": 1,
                            "renderLargerThumbnail": true,
                            "showAdAttribution": true,
                            "jpegThumbnail": thumb,
                            "mediaUrl": 'https://youtube.com/@xZiyy?feature=share8',
                            "thumbnail": thumb,
                            "thumbnailUrl": 'https://telegra.ph/file/4a1dd0e9b093cc614a4fa.jpg',
                            "sourceUrl": 'https://youtube.com/@xZiyy?feature=share8',
                        }
                    }}, { quoted: fakestatus})
    }
reply(`Sukses Mengirim Broadcast Ke ${anu.length} Group`)
}
break

//---------------------[ CASE DOWNLOADER ]----------------\\

  case 'tiktok' : case 'tt' : {  
  if (!text) return reply( `EROR!, Example : ${prefix + order} link`)
  if (!q.includes('tiktok')) return reply(`Link Invalid!!`)
  reply(`Tunggu sebentar ya kakak:>`)
  require('../library/scraper/tiktok').Tiktok(q).then( data => {
  fuzzy.sendMessage(from, { caption: `Nih Kack Videonya`, video: { url: data.watermark }}, {quoted: fakestatus})
  })
  }
  break
  case 'tiktokaudio' : case 'ttsong' : {
  try {
  if (!text) return msg.reply( `EROR!, Example : ${prefix + order} link`)
  if (!q.includes('tiktok')) return reply(`Link Invalid!!`)
  reply(`Tunggu sebentar ya kakak:>`)
require('../library/scraper/tiktok').Tiktok(q).then( data => {
  fuzzy.sendMessage(from, { audio: { url: data.audio }, mimetype: 'audio/mp4' }, { quoted: m})
  })

  } catch (err) {
  reply(err)
  }
}
  break

default:

if (time2 >= '03:00' && time2 <= '03:02') {
for (let ipiw of global.groupmu) {
await sleep(1500)
replylink(ipiw, `sahur sahur jangan lupa untuk sahur kak, udah jam 3 nih keburu imsak`)
} }

if (time2 >= '04:00' && time2 <= '04:02') {
for (let ipiw of global.groupmu) {
await sleep(1500)
replylink(ipiw, `sudah subuh nih kak jangan Lupa untuk sholat ya`)
}
 }

if (time2 >= '06:00' && time2 <= '06:02') {
for (let ipiw of global.groupmu) {
await sleep(1500)
replylink(ipiw, `selamat pagi kak dan selamat menjalankan aktivitas di pagi hari`)
}
 }

if (time2 >= '12:00' && time2 <= '12:02') {
for (let ipiw of global.groupmu) {
await sleep(1500)
replylink(ipiw, `selamat siang kak, jangan lupa untuk sholat Zuhur ya`)
}
 }

if (time2 >= '15:00' && time2 <= '15:02') {
for (let ipiw of global.groupmu) {
await sleep(1500)
replylink(ipiw, `dah jam 3 nih kak, jangan lupa untuk sholat ashar ya`)
}
 }

if (time2 >= '16:00' && time2 <= '16:02') {
for (let ipiw of global.groupmu) {
await sleep(1500)
replylink(ipiw, ` selamat sore kak, dah jam 4 nih, saatnya hunting tajil kak`)
}
 }

if (time2 >= '18:00' && time2 <= '18:02') {
for (let ipiw of global.groupmu) {
await sleep(1500)
replylink(ipiw, `buka bukaaa, waktu menunjukkan jam 7 , setelah berbuka puasa jangan lupa untuk sholat magrib ya`)
}
 }

if (time2 >= '19:00' && time2 <= '19:02') {
for (let ipiw of global.groupmu) {
await sleep(1500)
replylink(ipiw, `selamat malam kak,sudah memasuki waktunya sholat isya & teraweh`)
}
 }

if (time2 >= '00:00' && time2 <= '00:02') {
for (let ipiw of global.groupmu) {
await sleep(1500)
replylink(ipiw, `udah tengah malam nih, jangan lupa tidur dan jaga kesehatan ya`)
}
 }

if (budy.startsWith('=>')) {
if (!isCreator) return m.reply(mess.owner)
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)
}
return m.reply(bang)
}
try {
m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
} catch (e) {
m.reply(String(e))
}
}

if (budy.startsWith('>')) {
if (!isCreator) return m.reply(mess.owner)
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await m.reply(evaled)
} catch (err) {
await m.reply(String(err))
}
}

if (budy.startsWith('$')) {
if (!isCreator) return m.reply(mess.owner)
exec(budy.slice(2), (err, stdout) => {
if(err) return m.reply(err)
if (stdout) return m.reply(stdout)
})
}
	
if (isCmd && budy.toLowerCase() != undefined) {
if (from.endsWith('broadcast')) return
if (m.isBaileys) return
let msgs = global.db.data.database
if (!(budy.toLowerCase() in msgs)) return
fuzzy.copyNForward(from, msgs[budy.toLowerCase()], true)
}

} // end dari switch
} catch (err){
console.log(chalk.bgRed(chalk.black("[  ERROR  ]")),util.format(err))
}
} // end dari module exports



let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})