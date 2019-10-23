<div class="chat-list">
  {#each messages as message}
    <Chat {...message} />
  {/each}
</div>

<script>
import Chat from './Chat.svelte'

export let messages
</script>

<style>
.chat-list {
  height: 70vh;
  overflow-y: scroll;
  border: 1px solid #dbdbdb;
  border-radius: 4px;
  margin-bottom: 1rem;
}
</style>
