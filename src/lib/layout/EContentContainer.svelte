<script lang="ts">
  interface Props {
    children?: any;
  }

  let { children }: Props = $props();
</script>

<div class="flex h-full w-full justify-center">
  <div
    class="desktop:min-w-comfy desktop:max-w-comfy w-full p-4 desktop:w-comfy">
    {@render children?.()}
  </div>
</div>
