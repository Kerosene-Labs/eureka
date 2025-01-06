<script lang="ts">
  import EToastQueue from "$lib/toast/EToastQueue.svelte";

  interface Props {
    children?: any;
  }

  let { children } = $props();
</script>

<EToastQueue></EToastQueue>
<main class="h-full min-h-dvh dark:bg-neutral-900">
  {@render children?.()}
</main>
