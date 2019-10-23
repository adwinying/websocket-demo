<div class="chat">
  <p>
    {message}
    <br>
    <small>{formattedTimestamp}</small>
  </p>
</div>

<script>
export let timestamp
export let message

$: formattedTimestamp = new Date(timestamp).toLocaleString('ja-JP')
</script>

<style>
.chat {
  margin: 1rem;
}
</style>
