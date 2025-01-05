<script lang="ts">
  import { toastQueue } from "$lib/toast";
  import Toast from "$lib/eureka/toast/EToast.svelte";
</script>

<div
  class="pointer-events-none absolute z-10 flex h-screen w-screen flex-col items-center justify-end gap-2 overflow-clip p-2 drop-shadow-2xl">
  {#each $toastQueue as toastRequest, index}
    <Toast request={toastRequest} id={index}></Toast>
  {/each}
</div>
