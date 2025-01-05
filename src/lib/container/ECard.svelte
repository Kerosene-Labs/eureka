<script lang="ts">
  import EH1 from "$lib/text/EH1.svelte";
  import EP from "$lib/text/EP.svelte";
  interface Props {
    title?: string;
    subtitle?: string;
    children?: any;
  }

  let { title, subtitle, children }: Props = $props();
</script>

<div
  class="rounded-xl border border-stone-200/50 bg-zinc-100 p-8 dark:border-stone-700/50 dark:bg-neutral-800">
  {#if title || subtitle}
    <div class="pb-2">
      <div class="flex flex-row items-center gap-4">
        {#if title}
          <EH1>{title}</EH1>
        {/if}
      </div>
      {#if subtitle}
        <EP>{subtitle}</EP>
      {/if}
    </div>
  {/if}
  {@render children?.()}
</div>
