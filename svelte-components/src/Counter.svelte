<svelte:options tag="x-counter" />

<script>
  export let count = 0;
</script>

<style>
  font-size: 24px;

  button {
    border: solid lightgray 1px;
    border-radius: 4px;
    padding: 10px;
  }
</style>

<button on:click={() => count--}>-</button>
<span>{count}</span>
<button on:click={() => count++}>+</button>

