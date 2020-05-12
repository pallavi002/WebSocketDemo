var server = require('ws').Server;
var s = new server({ port: 5001 });

s.on('connection', (ws) => {
  //message from client side
  ws.on('message', function(message) {
    console.log('Received : '+ message);
    ws.send(message)
  });
  //while connection is closed
  ws.on('close', function() {
    console.log('I lost a client !')
  });
  //on new connection established
  console.log('One More client connected')  
})