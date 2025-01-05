<script lang="ts">
  interface Props {
    children?: any;
  }

  let { children } = $props();
</script>

<main class="min-h-dvh dark:bg-neutral-900">
  {@render children?.()}
</main>
