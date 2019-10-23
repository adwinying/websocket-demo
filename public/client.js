// create websocket connection
const socket = new WebSocket('ws://localhost:8080')

const chatWrapper = document.querySelector('#chat-wrapper')
const form = document.querySelector('#form')
const messageInput = document.querySelector('#message')
const submitBtn = document.querySelector('#submit')

const chatBoxTemplate = (timestamp, message) => `
<p>
  ${message}
  <br>
  <small>${timestamp}</small>
</p>
`

// on connection open
socket.addEventListener('open', () => {
  submitBtn.removeAttribute('disabled')
  submitBtn.innerHTML = 'Send'
})

// on message received
socket.addEventListener('message', ({ data }) => {
  const res = JSON.parse(data)
  const timestamp = new Date(res.timestamp).toLocaleString('ja-JP')
  const { message } = res

  const newChatBox = document.createElement('div')
  newChatBox.setAttribute('class', 'chat-box')
  newChatBox.innerHTML = chatBoxTemplate(timestamp, message)

  chatWrapper.append(newChatBox)
})

// on message submit
form.addEventListener('submit', (event) => {
  event.preventDefault()
  socket.send(messageInput.value)
  messageInput.value = ''
})
