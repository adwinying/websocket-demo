<div class="container">
  <h1 class="is-size-1 has-text-centered">WebSocket Demo</h1>

  <ChatList messages={messages} />

  <Composer
    isSocketReady={isSocketReady}
    on:message={handleMessage} />
</div>

<script>
import ChatList from './ChatList.svelte'
import Composer from './Composer.svelte'
import socket from '../socket'

let isSocketReady = false
let messages = []

socket.addEventListener('open', () => {
  isSocketReady = true
})

socket.addEventListener('message', ({ data }) => {
  messages = [...messages, JSON.parse(data)]
})

function handleMessage({ detail }) {
  socket.send(detail)
}
</script>

<style>
.container {
  max-width: 600px;
}

h1 {
  margin: 1.5rem 0;
}
</style>
