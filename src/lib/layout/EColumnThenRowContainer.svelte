<script lang="ts">
  import { ECard } from "$lib/index.js";

  interface Props {
    children?: any;
  }

  let { children }: Props = $props();

  const isAllECard = $derived(() => {
    if (!children) return true;
    return Array.isArray(children)
      ? children.every((child) => child?.type === ECard)
      : children?.type === ECard;
  });
</script>

<div
  class={`flex w-full flex-col desktop:flex-row ${isAllECard() ? "gap-4" : "gap-2"}`}>
  {@render children?.()}
</div>
