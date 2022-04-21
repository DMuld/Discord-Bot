module.exports = 
{
    name: 'ping',
    description: "This is a ping command!",
    execute(message, args)
    {
        if (message.author.id === "212083748466851841")
        {
            message.channel.send('pong');
        }
        /*
        if (message.member.roles.cache.has('784837880941641750'))
        {
            message.channel.send('pong!');
        }
        else
        {
            message.channel.send('Get better permissions you beta back bitch.');
            message.channel.send('Come back when you grow some.');
        }
        */
    }

}