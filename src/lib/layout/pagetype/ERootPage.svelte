<script lang="ts">
  import ENav from "$lib/nav/ENav.svelte";
  import EContentContainer from "../EContentContainer.svelte";
  import EMain from "../EMain.svelte";

  interface Props {
    navItems?: any;
    children?: any;
  }
  let { navItems, children } = $props();
</script>

<EMain>
  <ENav>
    {#snippet items()}
      {@render navItems?.()}
    {/snippet}
  </ENav>
  <EContentContainer></EContentContainer>
</EMain>
