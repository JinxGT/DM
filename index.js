const Discord = require('discord.js');
const bot = new Discord.Client();

const prefix = "send"

bot.on('ready', () => {
    console.log(`Logged in as ${bot.user.tag} :)`);
    bot.user.setActivity('Now Accepting Staff Applications!', { 
        type: "PLAYING",
        url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    });

}
)

bot.on('message', message => {

    let messageArray = message.content.split(" ");
    let command = messageArray[0];
    let com = command.toLowerCase();
    let args = message.content.slice(prefix.length).split(" ");

    if (message.author.bot) return;
    if (message.channel.type === "dm") return;

    if (com === `${prefix}dm`) {
        if (!message.member.permissions.has("MANAGE_MESSAGES"))
            const exampleEmbed = new Discord.MessageEmbed()
		.setColor('#fb1309')
		.setTitle('ERROR')
		.setAuthor('Among Sus Applications', 'https://media.discordapp.net/attachments/759887956328316940/759889650432606228/sabotage.png?width=401&height=401')
		.setDescription("You don't have permission to use this command!")
		.setThumbnail('https://media.discordapp.net/attachments/759887956328316940/759889650432606228/sabotage.png?width=401&height=401')
		.setTimestamp()
		.setFooter('Wampus Development Group', 'https://media.discordapp.net/attachments/749691775202885645/750474651389526097/463d17316ea53baf574535c84b88c525.png?width=401&height=401');
			
		message.channel.send(exampleEmbed);
    }
        let user =
            message.mentions.members.first() ||
            message.guild.members.cache.get(args[1]);
        if (!user)
            const exampleEmbed = new Discord.MessageEmbed()
		.setColor('#fb1309')
		.setTitle('ERROR')
		.setAuthor('Among Sus Applications', 'https://media.discordapp.net/attachments/759887956328316940/759889650432606228/sabotage.png?width=401&height=401')
		.setDescription("You didn't mention a user!")
		.setThumbnail('https://media.discordapp.net/attachments/759887956328316940/759889650432606228/sabotage.png?width=401&height=401')
		.setTimestamp()
		.setFooter('Wampus Development Group', 'https://media.discordapp.net/attachments/749691775202885645/750474651389526097/463d17316ea53baf574535c84b88c525.png?width=401&height=401');
			
		message.channel.send(exampleEmbed);
    }
        if (!args.slice(2).join(" "))
            const exampleEmbed = new Discord.MessageEmbed()
		.setColor('#fb1309')
		.setTitle('ERROR')
		.setAuthor('Among Sus Applications', 'https://media.discordapp.net/attachments/759887956328316940/759889650432606228/sabotage.png?width=401&height=401')
		.setDescription("You did not specify your message!")
		.setThumbnail('https://media.discordapp.net/attachments/759887956328316940/759889650432606228/sabotage.png?width=401&height=401')
		.setTimestamp()
		.setFooter('Wampus Development Group', 'https://media.discordapp.net/attachments/749691775202885645/750474651389526097/463d17316ea53baf574535c84b88c525.png?width=401&height=401');
			
		message.channel.send(exampleEmbed);
    }
        user.user
            .send(args.slice(1).join(" "))
            .catch(() => message.channel.send("That user could not be DMed!"))
            .then(() => message.channel.send(`Sent a message to ${user.user.tag}`));
    }
})

bot.login('token');
