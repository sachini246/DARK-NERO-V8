const fs = require('fs')
const chalk = require('chalk')

//aumto functioner
global.autoTyping = false //auto tying in gc (true to on, false to off)
global.autoRecord = false //auto recording (true to on, false to off)

//documents variants
global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'

//owmner v card
global.ANTI_BADWORD = 'true' // true of false
global.AUTO_REACT = 'true' // true of false
global.INBOX_BLOCK_MSG ='BLOCK !!!'
global.INBOX_BLOCK = 'off' //inbox block
global.alivemsg = 'ᴛɴᴍ-ʙᴏᴛ'
global.alivepic = 'https://ibb.co/89n6GgR '
global.owner = ['0761303496'] //ur owner number
global.ownername = "Thimira" //ur owner name
global.ytname = "YT: TnM GeTec" //ur yt chanel name
global.socialm = "GitHub: Dark" //ur github or insta name
global.location = "Asia/Colombo" //ur location

//bot bomdy 
global.session = "aUJKdEZkRlg=" //session Id
global.ownernomer = "94761303496" //ur number
global.lang = "EN" //Select Language "EN" to English "SI" to sinhala 
global.premium = ['94761303496'] //ur premium number
global.botname = 'ᴛɴᴍ-ᴡʜᴀᴛʜᴀᴘᴘ ʙᴏᴛ' //ur bot name
global.linkz = "https://chat.whatsapp.com/Fuc5q839twj21EEDMnP06A" //your theme url which will be displayed on whatsapp
global.websitex = "https://www.youtube.com/@TNM_BOY" //ur website to be displayed
global.botscript = 'https://www.youtube.com/@TNM_BOY' //script link
global.themeemoji = "🤴🏻" //ur theme emoji
global.packname = "ᴛɴᴍ-by" //ur sticker watermark packname
global.author = "ᴛɴᴍ-ʙᴏᴛ" //ur sticker watermark author
global.wm = "ᴛɴᴍ-ʙᴏᴛ Inc." //ur watermark

// Other
global.sessionName = 'session'
global.prefa = ['','!','.','#','&']
global.sp = ''

//messages
global.mess = {
    success: 'Here you go! (ᴛɴᴍ-ʙᴏᴛ)',
    admin: 'This feature could be used by admins only! (ᴛɴᴍ-ʙᴏᴛ)',
    botAdmin: 'Bot Must Be Admin First! (ᴛɴᴍ-ʙᴏᴛ)',
    premime: 'Premium Special Features If You Want to Register Type Rent(ᴛɴᴍ-ʙᴏᴛ)',
    owner: 'This feature could be used by owner only (ᴛɴᴍ-ʙᴏᴛ)',
    group: 'Features Used Only For Groups! (ᴛɴᴍ-ʙᴏᴛ)',
    private: 'Features Used Only For Private Chat! (ᴛɴᴍ-ʙᴏᴛ)',
    bot: 'This feature could be used by bot only (ᴛɴᴍ-ʙᴏᴛ)',
    wait: 'ᴘʟᴇᴀꜱᴇ ᴡɪᴛʜ... (ᴛɴᴍ-ʙᴏᴛ)',
    linkm: 'Where is the link? (ᴛɴᴍ-ʙᴏᴛ)',
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours (ᴛɴᴍ-ʙᴏᴛ)',
    nsfw: 'The nsfw feature has not been activated, please contact the admin to activate (ᴛɴᴍ-ʙᴏᴛ)',
}

//media target
global.thum = fs.readFileSync("./NeroMedia/theme/cheemspic.jpg") //ur thumb pic
global.log0 = fs.readFileSync("./NeroMedia/theme/cheemspic.jpg") //ur logo pic
global.err4r = fs.readFileSync("./NeroMedia/theme/cheemspic.jpg") //ur error pic
global.thumb = fs.readFileSync("./NeroMedia/theme/cheemspic.jpg") //ur thumb pic

//menu image maker
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

//adventure1
    global.limitawal = {
    premium: "Infinity",
    free: 12,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}

global.limitAwal = {
 prem: 'Unlimited',
 free: 70
}

//adventure2
global.emot = {
role: '🏆',
level: '🎚️',
limit: '📊',
health: '❤️',
exp: '💫',
money: '💵',
potion: '🥤',
diamond: '💎',
common: '📦',
uncommon: '🎁',
mythic: '🗳️',
legendary: '🗃️',
pet: '🎁',
trash: '🗑',
armor: '👕',
sword: '⚔️',
wood: '🪵',
batu: '🪨',
string: '🕸️',
horse: '🐎',
cat: '🐈',
dog: '🐕',
fox: '🦊',
petFood: '🍖',
iron: '⛓️',
gold: '👑',
emerald: '💚',
budak: '🏃',
busur: '🏹',
panah: '💘',
kapak: '🪓'
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
