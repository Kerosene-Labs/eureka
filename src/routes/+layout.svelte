<script lang="ts">
  import "../app.css";

  let { children } = $props();
  // console.log(children)
</script>

{#if typeof children === "function"}
  {@render children()}
{/if}
