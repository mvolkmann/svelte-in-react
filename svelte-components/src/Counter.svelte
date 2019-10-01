<svelte:options tag="x-counter" />

<script>
  export let count = 0;
</script>

<style>
  button {
    border: solid lightgray 1px;
    border-radius: 4px;
    padding: 10px;
  }

  .counter {
    font-size: 24px;
  }
</style>

<div class="counter">
  <button on:click={() => count--}>-</button>
  <span>{count}</span>
  <button on:click={() => count++}>+</button>
</div>

