var client = require('./lib/client');

var c = new client('localhost', 32323, 3000, {name: "server1"});
c.on('beat', function(beatTime){
  console.log(`Beat sent : ${beatTime}`);
});
