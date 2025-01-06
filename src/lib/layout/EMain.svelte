<script lang="ts">
  interface Props {
    children?: any;
  }

  let { children } = $props();
</script>

<main class="min-h-dvh h-full dark:bg-neutral-900">
  {@render children?.()}
</main>
