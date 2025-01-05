<script lang="ts">
  interface Props {
    title?: string;
    subtitle?: string;
    children?: any;
  }
  
  let {title, subtitle, children}: Props = $props();
</script>

<div
  class="rounded-xl border border-stone-200/50 bg-zinc-100 p-8 dark:border-stone-700/50 dark:bg-neutral-800">
  {#if title || subtitle}
    <div class="pb-4">
      <div class="flex flex-row items-center gap-4">
        {#if title}
          <h1>{title}</h1>
        {/if}
      </div>
      {#if subtitle}
        <p class="text-muted">{subtitle}</p>
      {/if}
    </div>
  {/if}
  {@render children?.()}@
</div>
