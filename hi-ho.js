const WebSocket = require('ws')

wss.on('connection', ws => {
  ws.on('message', message => {
    console.log(`Received message => ${message}`)
    ws.send(`ho! ${message}`)
  })
  ws.send('ho!')
})
