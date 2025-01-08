<script lang="ts">
  interface Props {
    mode: "primary" | "secondary";
    text?: string;
  }

  let { mode = "primary", text = "Ass" }: Props = $props();
</script>

<div
  id="appbar"
  class="fixed z-30 flex h-14 max-h-14 w-screen flex-row items-center border-b px-4 backdrop-blur-lg"
  class:primary={mode === "primary"}
  class:secondary={mode === "secondary"}>
  {#if text}
    <p class="pl-14 text-lg font-semibold text-neutral-800 dark:text-white">
      {text}
    </p>
  {/if}
</div>

<style lang="postcss">
  .primary {
    @apply border-neutral-300/50 bg-zinc-100/50 shadow-2xl dark:border-zinc-700/50 dark:bg-neutral-800/50;
  }

  .secondary {
    @apply border-neutral-300/20 bg-zinc-100/10 shadow-sm dark:border-zinc-700/20 dark:bg-neutral-800/10;
  }
</style>
