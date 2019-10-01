<!--TODO: Is it a requirement for tags to contain a hyphen? -->
<svelte:options tag="x-greet" />

<script>
  export let name = 'World';
</script>

<div>Hello, {name}!</div>
