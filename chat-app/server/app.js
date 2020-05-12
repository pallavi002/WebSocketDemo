var server = require('ws').Server;
var s = new server({ port: 5005 });

s.on('connection', (ws) => {
  //message from client side
  ws.on('message', function(message) {
    message = JSON.parse(message);
    if(message.type == 'name') {
      ws.personName = message.data; 
      return;
    }
    console.log('Received : '+ message);
    //display message to all clients
    s.clients.forEach((client) => {
      if(client != ws) {
        client.send(JSON.stringify({
          name: ws.personName,
          data: message.data
        }));
      }
    })
    // ws.send(message)
  });
  //while connection is closed
  ws.on('close', function() {
    console.log('I lost a client !')
  });
})