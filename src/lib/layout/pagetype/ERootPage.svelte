<script lang="ts">
  import { EToastQueue } from "$lib/index.js";
  import ENav from "$lib/nav/ENav.svelte";
  import EContentContainer from "../EContentContainer.svelte";

  interface Props {
    navItems?: any;
    children?: any;
  }
  let { navItems, children }: Props = $props();
</script>

<EToastQueue></EToastQueue>
<ENav>
  {#snippet items()}
    {@render navItems?.()}
  {/snippet}
  <EContentContainer>
    <div class="p-4">
      {@render children?.()}
    </div>
  </EContentContainer>
</ENav>
