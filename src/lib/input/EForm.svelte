<script lang="ts">
  import type { Snippet } from "svelte";
  import * as Yup from "yup";

  interface Props {
    id: string;
    schema?: Yup.ObjectSchema<Yup.AnyObject>;
    children?: Snippet;
  }

  let { id, schema, children }: Props = $props();
</script>

<form {id}>
  {@render children?.()}
</form>
