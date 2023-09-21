<script lang="ts">
  export let greetings: string[]

  $: greeting = greetings[0]

  function changeGreeting() {
    greeting = greetings[Math.floor(Math.random() * greetings.length)]
  }
</script>
<div>
  <h3>{greeting}! Thank you for visiting</h3>
  <button on:click={changeGreeting}>
    New greeting
  </button>
</div>