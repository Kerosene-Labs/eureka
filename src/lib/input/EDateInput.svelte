<script lang="ts">
  interface Props {
    id: string;
    label: string;
    value: Date;
    required?: boolean;
  }

  let { id, label, value = $bindable(), required }: Props = $props();
</script>

<div class="flex flex-col">
  <label class="text-sm font-semibold uppercase text-neutral-600" for={id}
    >{label}</label>
  <input bind:value {id} {required} type="date" />
</div>

<style lang="postcss">
  input {
    @apply w-full;
    @apply rounded-lg px-5 py-2;
    @apply transition-all;
    @apply outline-none;
    @apply font-mono font-semibold;
    @apply text-neutral-800 dark:text-neutral-300;
    @apply bg-neutral-200 hover:bg-zinc-300 focus:bg-zinc-300;
    @apply dark:bg-neutral-900 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700;
    @apply max-h-10;
  }

  @media (prefers-color-scheme: dark) {
    ::-webkit-calendar-picker-indicator {
      filter: invert(1);
    }
  }
</style>
