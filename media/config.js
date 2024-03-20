

const fs = require('fs')
const chalk = require('chalk')

//━━━━━━━━━━━━━━━[ WEBSITE APIKEY ]━━━━━━━━━━━━━━━━━//

global.APIs = {
ZeroYT7: 'https://zeroyt7-api.xyz',
}

//━━━━━━━━━━━━━━━[ APIKEY ]━━━━━━━━━━━━━━━━━//

global.APIKeys = {
'https://zeroyt7-api.xyz': 'Your Apikey',
}

//━━━━━━━━━━━━━━━[ SETTING ]━━━━━━━━━━━━━━━━━//
global.thumb = fs.readFileSync('./media/image/fake.jpg')


global.owner = ['6283804078729']
global.ownerNumber = ['6283804078729']
global.ownerNumber2 = ['0']
global.botNumber = '6285697725326'
global.groupmu = ['6285697725326-1603469074@g.us']
global.premium = ['6285157740529']
global.caption = 'saint bot'
global.botname = 'saint wea'
global.ownername = 'xZiyy'
global.packname = 'saint bot\n\nAI\n\nxZiyy_ _'
global.author = `dev by: Fauzi\n\nwhatsapp\n\n https://Instagram/xZiyy__`
global.prefix = ['!', '.', '/']
global.sp = '⭔'
global.shp = '⬡'

global.mess = {
success: '✓ Success',
admin: 'Fitur ini Khusus Admin Group KAK!',
botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
owner: 'Fitur ini Khusus Owner Bot',
group: 'Fitur Digunakan Hanya Untuk Group!',
private: 'Fitur Digunakan Hanya Untuk Private Chat!',
bot: 'Fitur Khusus Pengguna Nomor Bot',
wait: 'Loading...',
endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
}
global.limitawal = {
premium: "Infinity",
free: 100
}

global.sesionName = "session"

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update'${__filename}'`))
delete require.cache[file]
require(file)
})
