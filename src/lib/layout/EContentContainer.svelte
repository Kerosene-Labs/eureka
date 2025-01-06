<script lang="ts">
  interface Props {
    children?: any;
  }

  let { children }: Props = $props();
</script>

<div class="flex h-fit w-full justify-center">
  <div
    class="desktop:min-w-comfy desktop:max-w-comfy w-full desktop:w-comfy p-4">
    {@render children?.()}
  </div>
</div>
