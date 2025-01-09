<script lang="ts">
  import type { Snippet } from "svelte";
  import type { Writable } from "svelte/store";
  import * as Yup from "yup";

  interface Props {
    messageStore: Writable<object>;
    schema?: Yup.ObjectSchema<Yup.AnyObject>;
    children?: Snippet;
  }

  let { messageStore, schema, children }: Props = $props();
</script>

{#if $messageStore.length > 0}
  <div class="border border-red-500 p-2">
    {#each $messageStore as message}
      <p>{message}</p>
    {/each}
  </div>
{/if}

<form>
  {@render children?.()}
</form>
