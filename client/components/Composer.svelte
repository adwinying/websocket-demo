<div class="composer">
  <form
    class="level"
    on:submit|preventDefault={onFormSubmit}>
    <input
      class="input"
      bind:value={message}
      type="text"
      placeholder="Enter a message">

    <button
      class="button is-primary"
      disabled={!isSocketReady}
      type="submit">
      {btnText}
    </button>
  </form>
</div>

<script>
import { createEventDispatcher } from 'svelte'

const dispatch = createEventDispatcher()

export let isSocketReady
let message

$: btnText = isSocketReady ? 'Send' : 'Connecting...'

function onFormSubmit() {
  dispatch('message', message)
  message = ''
}
</script>

<style>
.input {
  margin-right: .5rem;
}
</style>
