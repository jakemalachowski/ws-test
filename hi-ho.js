const WebSocket = require('ws')

const wss = new WebSocket.Server({ port: 10000 })

wss.on('connection', ws => {
  ws.on('message', message => {
    console.log(`Received message => ${message}`)
  })
  ws.send('ho! ' + (Math.random() + 1).toString(36).substring(7))
})
