<script lang="ts">
  interface Props {
    drawerOpen?: boolean;
    items?: any;
    children?: any;
  }

  let { drawerOpen = false, children, items }: Props = $props();

  function toggleDrawer() {
    drawerOpen = !drawerOpen;
  }
</script>

<!--please note that our main will clip any content that is overflowing in an effort to maintain a decent user experience-->
<div
  id="appbar"
  class="fixed z-30 flex h-14 max-h-14 w-screen flex-row items-center border-b border-neutral-300/50 bg-zinc-100/50 px-4 drop-shadow-lg backdrop-blur-lg dark:border-zinc-700/50 dark:bg-neutral-800/50">
</div>
<button
  aria-label="App Drawer Toggle"
  onclick={toggleDrawer}
  class="fixed z-50 h-14 px-4">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke-width="1.5"
    stroke="currentColor"
    class="size-8 transition-colors dark:text-neutral-100 dark:hover:text-neutral-200 dark:active:text-neutral-400">
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M3.75 9h16.5m-16.5 6.75h16.5" />
  </svg>
</button>
<div
  id="drawer"
  class="inset-y-y fixed z-40 h-screen w-[90%] translate-x-[-100%] bg-neutral-200 shadow-2xl transition-all lg:w-96 dark:bg-neutral-900"
  class:translate-x-[0%]={drawerOpen}
  class:pointer-events-none={!drawerOpen}>
  <div class="flex flex-col pt-14">
    {@render items?.()}
  </div>
</div>
<button
  onclick={toggleDrawer}
  aria-label="App Drawer Toggle (Background)"
  id="drawerBg"
  class="fixed inset-y-0 z-10 h-screen w-screen bg-black/50 backdrop-blur-sm transition-all"
  class:opacity-0={!drawerOpen}
  class:opacity-[99%]={drawerOpen}
  class:pointer-events-none={!drawerOpen}></button>
<div id="pageContent" class="h-full overflow-y-auto pt-14">
  {@render children?.()}
</div>
