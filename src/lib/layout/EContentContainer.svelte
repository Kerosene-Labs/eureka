<script lang="ts">
  interface Props {
    children?: any;
  }

  let { children }: Props = $props();
</script>

<div class="flex justify-center overflow-clip">
  {@render children?.()}
</div>
