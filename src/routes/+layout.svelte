<script lang="ts">
  import EButton from "$lib/button/EButton.svelte";
  import ECard from "$lib/container/ECard.svelte";
  import ERootPage from "$lib/layout/pagetype/ERootPage.svelte";
  import ESimpleNavItem from "$lib/nav/ESimpleNavItem.svelte";
  import type { Snippet } from "svelte";
  import "../app.css";

  interface Props {
    children?: Snippet;
  }
  let { children }: Props = $props();
</script>

<ERootPage>
  {#snippet navItems()}
    <div class="p-4">
      <ECard title="Hello, User!" subtitle="This is a user card!">
        <div class="flex w-full flex-row gap-2">
          <EButton type="secondary">Settings</EButton>
          <EButton type="primary">Log Out</EButton>
        </div>
      </ECard>
    </div>
    <ESimpleNavItem text="Home" goto="#"></ESimpleNavItem>
  {/snippet}
  {@render children?.()}
</ERootPage>
