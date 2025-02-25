<script lang="ts">
  type EurekaButtonType = "primary" | "secondary" | "danger";

  interface Props {
    spinning?: boolean;
    disabled?: boolean;
    title?: string;
    type?: EurekaButtonType;
    children?: any;
    onclick?: any;
  }

  let {
    spinning,
    disabled,
    title,
    type = "primary",
    children,
    onclick,
  }: Props = $props();
</script>

<div class="h-10 w-full">
  <button
    aria-label="Button"
    {disabled}
    {onclick}
    {title}
    class:primary={type === "primary"}
    class:secondary={type === "secondary"}
    class:danger={type === "danger"}>
    <span class="flex w-full flex-row items-center justify-center gap-4">
      {@render children?.()}
      {#if spinning}
        <span role="status">
          <svg
            aria-hidden="true"
            class="h-5 w-5 animate-spin fill-neutral-300 text-neutral-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor" />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill" />
          </svg>
        </span>
      {/if}
    </span>
  </button>
</div>

<style lang="postcss">
  button {
    @apply flex w-full text-center;
    @apply font-semibold;
    @apply rounded-lg border px-5 py-2;
    @apply transition-all;
  }

  button.primary {
    @apply text-neutral-800 dark:text-neutral-300;
    @apply border-stone-300/50 bg-neutral-200 hover:bg-neutral-300 active:bg-zinc-400;
    @apply dark:border-stone-600/50 dark:bg-neutral-700 hover:dark:bg-neutral-600 active:dark:bg-zinc-700;
  }

  button.secondary {
    @apply text-neutral-800 dark:text-neutral-300;
    @apply border-stone-300/50 hover:bg-neutral-300 active:bg-zinc-400;
    @apply dark:border-stone-600/50 hover:dark:bg-neutral-600 active:dark:bg-zinc-700;
  }

  button.danger {
    @apply text-neutral-800 dark:text-neutral-300;
    @apply border-rose-300/50 bg-red-300 hover:bg-red-400 active:bg-pink-400;
    @apply dark:border-rose-600/50 dark:bg-red-800 hover:dark:bg-red-700 active:dark:bg-pink-700;
  }

  button[disabled] {
    @apply flex w-full;
    @apply font-semibold;
    @apply rounded-xl px-5 py-2;
    @apply text-neutral-700;
    @apply border-stone-400/50 bg-neutral-300;
    @apply dark:border-stone-700/50 dark:bg-neutral-800;
    @apply transition-all;
  }
</style>
