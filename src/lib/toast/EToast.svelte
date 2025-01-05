<script lang="ts">
  import { onMount } from "svelte";
  import { toastQueue, type ToastRequest, ToastType } from "$lib/toast";
  import { cubicIn, cubicInOut, cubicOut } from "svelte/easing";
  import { fly } from "svelte/transition";
  export let request: ToastRequest;
  export let id: number;

  onMount(() => {
    setTimeout(() => {
      destroy();
    }, 5000);
  });

  export function destroy() {
    toastQueue.update((toasts) => toasts.filter((_, index) => index !== id));
  }
</script>

<button
  in:fly={{ y: 100, duration: 150, delay: 25, easing: cubicIn }}
  out:fly={{ y: 100, duration: 150, delay: 25, easing: cubicIn }}
  title="Dismiss"
  class="pointer-events-auto z-20 max-w-72 rounded-lg border p-4 text-left font-mono text-sm font-bold drop-shadow-2xl backdrop-blur-lg transition-colors"
  on:click={destroy}
  class:error={request.type === ToastType.ERROR}
  class:success={request.type === ToastType.SUCCESS}
  class:info={request.type === ToastType.INFO}>
  {request.message}
</button>

<style lang="postcss">
  .error {
    @apply border-red-600 bg-red-900/90 text-red-300 hover:bg-red-800/90;
  }

  .success {
    @apply border-green-600 bg-green-900/90 text-green-300 hover:bg-green-800/90;
  }

  .info {
    @apply border-neutral-800 bg-neutral-900/90 text-neutral-300 hover:bg-neutral-800/90;
  }
</style>
