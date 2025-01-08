<script lang="ts">
  import { writable, type Writable } from "svelte/store";
  import type { AnyObject, ObjectSchema, StringSchema } from "yup";

  interface Props {
    id: string;
    label: string;
    value: string;
    required?: boolean;
    schema: StringSchema;
    onValidate: (args: string) => void;
  }

  let {
    id,
    label,
    value = $bindable(),
    required,
    schema,
    onValidate,
  }: Props = $props();

  // internal state
  let touched: Writable<boolean> = writable(false);
  let valid: Writable<boolean> = writable(true);

  // touched state management
  $effect(() => {
    if (value && !$touched) {
      touched.update(() => true);
    }
  });

  // yup validation
  $effect(() => {
    if (!$touched) {
      valid.update(() => true);
      return;
    }
    schema
      .validate(value)
      .then((response) => {
        valid.update(() => true);
      })
      .catch((error) => {
        valid.update(() => false);
        onValidate(error);
      });
  });
</script>

<div class="flex flex-col">
  <div class="flex flex-row">
    <label class="text-sm font-semibold uppercase text-neutral-600" for={id}
      >{label}</label>
    {#if schema.describe().tests?.some((test) => test.name === "required")}
      <span class="min-h-min pl-1 text-red-600">*</span>
    {/if}
  </div>
  <input class:invalid={!$valid} bind:value {id} {required} type="text" />
</div>

<style lang="postcss">
  input {
    @apply h-10 w-full;
    @apply rounded-lg px-5 py-2;
    @apply transition-all;
    @apply outline-none;
    @apply font-mono font-semibold;
    @apply text-neutral-800 dark:text-neutral-300;
    @apply border-neutral-300 bg-neutral-200 hover:bg-zinc-300 focus:bg-zinc-300;
    @apply dark:border-neutral-700 dark:bg-neutral-900 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700;
    @apply border;
  }

  .invalid {
    @apply border-red-500;
  }
</style>
