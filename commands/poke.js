module.exports = {
	name: 'poke',
	description: 'poke someone',
	execute(message, args) {
        let taggedUser = message.mentions.users.first();
        let author = message.guild.members.get(message.author.id).displayName.toString();

        if(typeof args[0] != 'undefined' && args[0] != null && (args[0]<=25 || message.author.id === '296712085532966915')) {
            if(message.author.id === '226075289921257483'){
		    message.channel.send(`Fuck off, Choppa`);
	    }
	    else {
		for (var i = 0; i < args[0]; i++) { 
                	message.channel.send(`\`@${author}\` poked ${taggedUser} with a stick. (${i+1}/${args[0]})`);
            	} 
	    }
        } else {
            message.channel.send('**Invalid Argument: **`' + args + '`\nPlease use a number ranging from `1` to `' + 25 + `\` ` + 'folled by a user.');
        }
	},
};
