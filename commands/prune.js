module.exports = {
  name: 'prune',
  description: 'bulk delete messages',
  admin: true,
  execute(message, args) {
    let p = parseInt(args[0]) + 1;
    if (isNaN(p) || p < 1 || p > 100 ) {
      return message.reply('That doesn\'t seem to be a valid integer between 0 and 99, inclusive.');
    } else {
      message.channel.bulkDelete(p, true);
    }
  },
};
