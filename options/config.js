// CREATED BY NEOXY TEAM !!

const fs = require('fs')
const chalk = require('chalk')

// MY OTHERS
global.owner = ['6281933225481']
global.premium = ['6281933225481']
global.botname = '𝐌𝐚𝐫𝐬𝐙𝐱𝐘 𝐁𝐨𝐭𝐬𝐙'
global.packname = '081933225481'
global.author = '𝗠𝗔𝗥𝗦𝗘𝗟 𝗦𝗧𝗢𝗥𝗘'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.footer = '© 𝐂𝐫𝐞𝐚𝐭𝐞𝐝 𝐁𝐲 𝐌𝐚𝐫𝐬𝐙𝐱𝐘 𝐁𝐨𝐭𝐬𝐙'
global.sp = '⭔'
global.limitawal = {
premium: "Infinity",
free: 25
}

// THUMB
global.image = fs.readFileSync('./connect/image/logo.jpg')
global.thumbnail = fs.readFileSync('./connect/image/thumb.jpg')

// MESSAGE
global.mess = {
success: '✓ Success',
admin: 'Fitur Khusus Admin Group!',
botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
owner: 'Fitur Khusus Owner Bot',
group: 'Fitur Digunakan Hanya Untuk Group!',
private: 'Fitur Digunakan Hanya Untuk Private Chat!',
bot: 'Fitur Khusus Pengguna Nomor Bot',
wait: 'Loading...',
endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update'${__filename}'`))
delete require.cache[file]
require(file)
})
