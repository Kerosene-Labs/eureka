<script lang="ts">
  import EButton from "$lib/button/EButton.svelte";
  import ECard from "$lib/container/ECard.svelte";
  import EContentContainer from "$lib/layout/EContentContainer.svelte";
  import EMain from "$lib/layout/EMain.svelte";
  import ENav from "$lib/nav/ENav.svelte";
  import ENavItem from "$lib/nav/ENavItem.svelte";
  import "../app.css";

  let { children } = $props();
</script>

<EMain>
  <ENav>
    {#snippet items()}
      <div class="p-4">
        <ECard title="Hello, User!" subtitle="This is a user card!">
          <div class="flex flex-col gap-2 desktop:flex-row">
            <EButton type="secondary">Settings</EButton>
            <EButton type="primary">Log Out</EButton>
          </div>
        </ECard>
      </div>
      <ENavItem>Test</ENavItem>
      <ENavItem>Test 2</ENavItem>
      <ENavItem>Test 3</ENavItem>
    {/snippet}
    <EContentContainer>
      {@render children?.()}
    </EContentContainer>
  </ENav>
</EMain>
