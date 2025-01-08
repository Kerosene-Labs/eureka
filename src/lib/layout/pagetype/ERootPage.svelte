<script lang="ts">
  import { EToastQueue } from "$lib/index.js";
  import ENav from "$lib/nav/ENav.svelte";

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
  <div class="flex w-full justify-center p-4">
    <div class="w-full desktop:w-comfy">
      {@render children?.()}
    </div>
  </div>
</ENav>
