<script lang="ts">
  interface Props {
    children?: any;
  }

  let { children }: Props = $props();
</script>

<h1
  class="text-2xl font-black text-neutral-700 desktop:text-3xl dark:text-white">
  {@render children?.()}
</h1>
