const http = require('http');
const hytescript = require('hytescript.js');

const client = new hytescript.DiscordClient({
  token: process.env.token,
  prefix: '!',
  intents: 112623, // Get your own required intents number at https://ziad87.net/intents
  logErrors: true,
  debug: true
});

client.addCommands({
  type: 'ready',
  code: `#(log => #(client => tag) is now online.)`
});

client.setStatus({
  text: '\'!\' as prefix',
  type: 'LISTENING',
  status: 'idle'
});

client.readFolder('commands');

client.addEvents(
  'messageCreate',
  'interactionCreate'
);

/*
 Below code creates a web server.
 Copy the generated url & monitor it on https://uptimerobot.com to keep the bot running 24/7.
*/

http.createServer(function(req, res) {
  res.write("Server is active!");
  res.end();
}).listen(8080);