<script lang="ts">
  import { EButton } from "$lib/index.js";
  import { cubicOut } from "svelte/easing";
  import { fly, fade } from "svelte/transition";

  interface Props {
    visible?: boolean;
    title?: string;
    subtitle?: string;
    closeButtonVisible?: boolean;
    children?: any;
  }

  let {
    visible = $bindable(false),
    title,
    subtitle,
    closeButtonVisible = true,
    children,
  }: Props = $props();
</script>

{#if visible}
  <div
    class="fixed inset-0 z-50 h-screen w-screen bg-black/50 backdrop-blur-lg"
    transition:fade={{ duration: 75 }}>
    <div class="flex h-full w-full items-center justify-center">
      <div
        class="m-6 w-[40rem] rounded-xl border border-zinc-200/50 bg-zinc-100 p-8 shadow-lg dark:border-zinc-700/50 dark:bg-neutral-800"
        transition:fly={{
          y: 20,
          duration: 150,
          delay: 25,
          easing: cubicOut,
          opacity: 50,
        }}>
        <div class="flex flex-col">
          {#if title}
            <h1>{title}</h1>
          {/if}
          {#if subtitle}
            <p class="pb-2 font-semibold">{subtitle}</p>
          {/if}
        </div>
        <div class="flex flex-col gap-2">
          {@render children()}
          {#if closeButtonVisible}
            <EButton
              onclick={() => {
                visible = !visible;
              }}>Close</EButton>
          {/if}
        </div>
      </div>
    </div>
  </div>
{/if}
