<script lang="ts">
  import { drawerOpenStore } from "$lib/state.js";
  import EAppBar from "./EAppBar.svelte";
  import EAppBarHamburger from "./EAppBarHamburger.svelte";

  interface Props {
    backButton?: boolean;
    items?: any;
    children?: any;
  }

  let { backButton = false, children, items }: Props = $props();
</script>

<!--please note that our main will clip any content that is overflowing in an effort to maintain a decent user experience-->
<EAppBar mode={backButton ? "secondary" : "primary"}></EAppBar>
<EAppBarHamburger></EAppBarHamburger>
<div
  id="drawer"
  class="inset-y-y fixed z-40 h-screen w-[90%] translate-x-[-100%] bg-neutral-200 shadow-lg transition-all lg:w-96 dark:bg-neutral-900"
  class:translate-x-[0%]={$drawerOpenStore}
  class:pointer-events-none={!$drawerOpenStore}>
  <div class="flex flex-col pt-14">
    {@render items?.()}
  </div>
</div>
<button
  onclick={() => {
    drawerOpenStore.update((open) => !open);
  }}
  aria-label="App Drawer Toggle (Background)"
  id="drawerBg"
  class="fixed inset-y-0 z-10 h-screen w-screen bg-black/50 backdrop-blur-sm transition-all"
  class:opacity-0={!$drawerOpenStore}
  class:opacity-[99%]={$drawerOpenStore}
  class:pointer-events-none={!$drawerOpenStore}></button>
<div id="pageContent" class="h-full overflow-y-auto pt-14">
  {@render children?.()}
</div>
