<svelte:options tag="take-object" />

<script>
  export let obj = {};
  export let title = '';
</script>

<div>
  <h3>{title}</h3>
  {#if obj}
    {#each Object.keys(obj) as key}
    <div>{key} = {obj[key]}</div>
    {/each}
  {:else}
    <div>no obj prop passed</div>
  {/if}
</div>
