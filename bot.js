const Discord = require ('discord.js');
const bot = new Discord.Client();

const PREFIX = 'p!';

bot.on('ready', () =>{
    console.log('This bot is online');
})

bot.on('message', message =>{

    let args = message.content.substring(PREFIX.length).split(" ");
    const msg = message.content.toLowerCase();
    const mention = message.mentions.users.first();
     //448928999981187082

    switch(args[0]){
        case 'report':
            message.delete();
            const channel = message.guild.channels.find(channel => channel.name ===  "reports")
            const jméno = (args[1])
            const důvod = (args[2])
            const důvod1 = (args[3])
            const důvod2 = (args[4])
            const důvod3 = (args[5])
            const důvod4 = (args[6])
            const důvod5 = (args[7])
            if(!jméno) return message.author.sendMessage("Musíte zadat koho si přejete nahlásit")
            if(!důvod) return message.author.sendMessage("Musíte zadat důvod proč si přejete nahlásit uživatele" + " " + (jméno))
            if(!důvod1) return channel.sendMessage("Uživatel " + "**" + (message.author.username) + "**" + " " + "nahlásil uživatele " + "**" + (jméno) + "**" + " " + "z důvodu " + "**" + (důvod) + "**")
            if(!důvod2) return channel.sendMessage("Uživatel " + "**" + (message.author.username) + "**" + " " + "nahlásil uživatele " + "**" + (jméno) + "**" + " " + "z důvodu " + "**" + (důvod) + "**" + " " + "**" + (důvod1) + "**")
            if(!důvod3) return channel.sendMessage("Uživatel " + "**" + (message.author.username) + "**" + " " + "nahlásil uživatele " + "**" + (jméno) + "**" + " " + "z důvodu " + "**" + (důvod) + "**" + " " + "**" + (důvod1) + "**" + " " + '**' + (důvod2) + '**')
            if(!důvod4) return channel.sendMessage(" Uživatel " + "**" + (message.author.username) + "**" + " " + "nahlásil uživatele " + "**" + (jméno) + "**" + " " + "z důvodu " + "**" + (důvod) + "**" + " " + "**" + (důvod1) + "**" + " " + '**' + (důvod2) + '**' + ' ' + '**' + (důvod3) + '**')
            if(!důvod5) return channel.sendMessage("Uživatel " + "**" + (message.author.username) + "**" + " " + "nahlásil uživatele " + "**" + (jméno) + "**" + " " + "z důvodu " + "**" + (důvod) + "**" + " " + "**" + (důvod1) + "**" + " " + '**' + (důvod2) + '**' + ' ' + '**' + (důvod3) + '**' + ' ' + '**' + (důvod4) + '**')
            if(!args[8]) return channel.sendMessage("Uživatel " + "**" + (message.author.username) + "**" + " " + "nahlásil uživatele " + "**" + (jméno) + "**" + " " + "z důvodu " + "**" + (důvod) + "**" + " " + "**" + (důvod1) + "**" + " " + '**' + (důvod2) + '**' + ' ' + '**' + (důvod3) + '**' + ' ' + '**' + (důvod4) + '**' + " " + "**" + (důvod5) + "**")
            if(!args[9]) return channel.sendMessage("Uživatel " + "**" + (message.author.username) + "**" + " " + "nahlásil uživatele " + "**" + (jméno) + "**" + " " + "z důvodu " + "**" + (důvod) + "**" + " " + "**" + (důvod1) + "**" + " " + '**' + (důvod2) + '**' + ' ' + '**' + (důvod3) + '**' + ' ' + '**' + (důvod4) + '**' + " " + "**" + (důvod5) + "**" + " " + "**" + (args[8]) + "**")
            if(!args[10]) return channel.sendMessage("Uživatel " + "**" + (message.author.username) + "**" + " " + "nahlásil uživatele " + "**" + (jméno) + "**" + " " + "z důvodu " + "**" + (důvod) + "**" + " " + "**" + (důvod1) + "**" + " " + '**' + (důvod2) + '**' + ' ' + '**' + (důvod3) + '**' + ' ' + '**' + (důvod4) + '**' + " " + "**" + (důvod5) + "**" + " " + "**" + (args[8]) + "**" + " " + "**" + (args[9]) + "**")
            if(!args[11]) return channel.sendMessage("Uživatel " + "**" + (message.author.username) + "**" + " " + "nahlásil uživatele " + "**" + (jméno) + "**" + " " + "z důvodu " + "**" + (důvod) + "**" + " " + "**" + (důvod1) + "**" + " " + '**' + (důvod2) + '**' + ' ' + '**' + (důvod3) + '**' + ' ' + '**' + (důvod4) + '**' + " " + "**" + (důvod5) + "**" + " " + "**" + (args[8]) + "**" + " " + "**" + (args[9]) + "**" + " " + "**" + (args[10]) + "**")
            if(!args[12]) return channel.sendMessage("Uživatel " + "**" + (message.author.username) + "**" + " " + "nahlásil uživatele " + "**" + (jméno) + "**" + " " + "z důvodu " + "**" + (důvod) + "**" + " " + "**" + (důvod1) + "**" + " " + '**' + (důvod2) + '**' + ' ' + '**' + (důvod3) + '**' + ' ' + '**' + (důvod4) + '**' + " " + "**" + (důvod5) + "**" + " " + "**" + (args[8]) + "**" + " " + "**" + (args[9]) + "**" + " " + "**" + (args[10]) + "**" + " " + "**" + (args[11]) + "**")
            if(!args[13]) return channel.sendMessage("Uživatel " + "**" + (message.author.username) + "**" + " " + "nahlásil uživatele " + "**" + (jméno) + "**" + " " + "z důvodu " + "**" + (důvod) + "**" + " " + "**" + (důvod1) + "**" + " " + '**' + (důvod2) + '**' + ' ' + '**' + (důvod3) + '**' + ' ' + '**' + (důvod4) + '**' + " " + "**" + (důvod5) + "**" + " " + "**" + (args[8]) + "**" + " " + "**" + (args[9]) + "**" + " " + "**" + (args[10]) + "**" + " " + "**" + (args[11]) + "**" + " " + "**" + (args[12]) + "**")
            if(!args[14]) return channel.sendMessage("Uživatel " + "**" + (message.author.username) + "**" + " " + "nahlásil uživatele " + "**" + (jméno) + "**" + " " + "z důvodu " + "**" + (důvod) + "**" + " " + "**" + (důvod1) + "**" + " " + '**' + (důvod2) + '**' + ' ' + '**' + (důvod3) + '**' + ' ' + '**' + (důvod4) + '**' + " " + "**" + (důvod5) + "**" + " " + "**" + (args[8]) + "**" + " " + "**" + (args[9]) + "**" + " " + "**" + (args[10]) + "**" + " " + "**" + (args[11]) + "**" + " " + "**" + (args[12]) + "**" + " " + "**" + (args[13]) + "**")
            if(!args[15]) return channel.sendMessage("Uživatel " + "**" + (message.author.username) + "**" + " " + "nahlásil uživatele " + "**" + (jméno) + "**" + " " + "z důvodu " + "**" + (důvod) + "**" + " " + "**" + (důvod1) + "**" + " " + '**' + (důvod2) + '**' + ' ' + '**' + (důvod3) + '**' + ' ' + '**' + (důvod4) + '**' + " " + "**" + (důvod5) + "**" + " " + "**" + (args[8]) + "**" + " " + "**" + (args[9]) + "**" + " " + "**" + (args[10]) + "**" + " " + "**" + (args[11]) + "**" + " " + "**" + (args[12]) + "**" + " " + "**" + (args[13]) + "**" + " " + "**" + (args[14]) + "**")
            if(!args[16]) return channel.sendMessage("Uživatel " + "**" + (message.author.username) + "**" + " " + "nahlásil uživatele " + "**" + (jméno) + "**" + " " + "z důvodu " + "**" + (důvod) + "**" + " " + "**" + (důvod1) + "**" + " " + '**' + (důvod2) + '**' + ' ' + '**' + (důvod3) + '**' + ' ' + '**' + (důvod4) + '**' + " " + "**" + (důvod5) + "**" + " " + "**" + (args[8]) + "**" + " " + "**" + (args[9]) + "**" + " " + "**" + (args[10]) + "**" + " " + "**" + (args[11]) + "**" + " " + "**" + (args[12]) + "**" + " " + "**" + (args[13]) + "**" + " " + "**" + (args[14]) + "**" + " " + "**" + (args[15]) + "**")
            if(!args[17]) return channel.sendMessage("Uživatel " + "**" + (message.author.username) + "**" + " " + "nahlásil uživatele " + "**" + (jméno) + "**" + " " + "z důvodu " + "**" + (důvod) + "**" + " " + "**" + (důvod1) + "**" + " " + '**' + (důvod2) + '**' + ' ' + '**' + (důvod3) + '**' + ' ' + '**' + (důvod4) + '**' + " " + "**" + (důvod5) + "**" + " " + "**" + (args[8]) + "**" + " " + "**" + (args[9]) + "**" + " " + "**" + (args[10]) + "**" + " " + "**" + (args[11]) + "**" + " " + "**" + (args[12]) + "**" + " " + "**" + (args[13]) + "**" + " " + "**" + (args[14]) + "**" + " " + "**" + (args[15]) + "**" + " " + "**" + (args[16]) + "**");
            else{
               return message.author.sendMessage("Přesáhli jste maximální počet slov pro !report (15 slov)")
               message.delete();
            }
            //.setTitle(message.author.username)
            //.addField("Nahlášený", args[1])
            //.addField("Důvod", args[2], args[3], args[4], args[5], args[6], args[7], args[8], args[9], args[10])
            //.setColor("#ff0000")
         // .setThumbnail(username.args[1])
            //.setFooter("Pokud zde je něco divného napište uživateli @ponozka153#3573")
        break; 
        case "hej":
            if (message.author.bot) return;

            const mention = message.mentions.users.first();

                if(mention == null) { return; }
                message.delete();
             const mentionMessage = message.content.slice (8);
                mention.sendMessage (mentionMessage);
                break;

                case "baf":
                    if (message.author.bot) return;
                        message.delete();
                        message.mentions.users.sendMessage ((args[1]));
                        break;
        }
})
client.login(process.env.Bot Njc5MDYwMjIwNTkyMjU5MDk0.XlQxzQ.KAbKxJSwmOp8UAUdDPE-zyMQee8);
