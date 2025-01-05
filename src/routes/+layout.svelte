<script lang="ts">
  import { ENav } from "$lib/index.js";
  import EContentContainer from "$lib/layout/EContentContainer.svelte";
  import EMain from "$lib/layout/EMain.svelte";
  import ENavItem from "$lib/nav/ENavItem.svelte";
  import "../app.css";

  let { children } = $props();
</script>

<EMain>
  <ENav>
    {#snippet items()}
      <ENavItem>Test</ENavItem>
      <ENavItem>Test 2</ENavItem>
      <ENavItem>Test 3</ENavItem>
    {/snippet}
    <EContentContainer>
      {@render children?.()}
    </EContentContainer>
  </ENav>
</EMain>
