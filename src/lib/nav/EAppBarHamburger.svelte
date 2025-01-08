<script lang="ts">
  import { drawerOpenStore } from "$lib/state.js";
</script>

<button
  aria-label="App Drawer Toggle"
  onclick={() => {
    drawerOpenStore.update((open) => !open);
  }}
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
