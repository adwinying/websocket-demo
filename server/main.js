const http = require('http')
const WebSocket = require('ws')

// init http server
const server = http.createServer()

// init websocket server
const wss = new WebSocket.Server({ server })

wss.on('connection', (ws) => {
  console.log('connected')

  ws.on('message', (message) => {
    wss.clients.forEach((client) => {
      if (client.readyState !== WebSocket.OPEN) return

      client.send(JSON.stringify({ timestamp: new Date(), message }))
    })
  })
})

// init HTTP server
server.listen(8080, () => {
  console.log('Server started on port 8080')
})
