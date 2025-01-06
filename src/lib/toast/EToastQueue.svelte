<script lang="ts">
  import { EToast } from "$lib/index.js";
  import { toastQueue } from "./toastControl.js";
</script>

<div
  class="pointer-events-none absolute z-10 flex h-screen w-screen flex-col items-center justify-end gap-2 p-2 drop-shadow-2xl">
  {#each $toastQueue as toastRequest, index}
    <EToast request={toastRequest} id={index}></EToast>
  {/each}
</div>
