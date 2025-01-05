<script lang="ts">
  import EButton from "$lib/button/EButton.svelte";
  import ECard from "$lib/container/ECard.svelte";
  import EModal from "$lib/container/EModal.svelte";

  let modalVisible: boolean = false;
</script>

<EModal
  bind:visible={modalVisible}
  title="Example"
  subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tempus id elit id vestibulum. Aliquam."
></EModal>

<div class="flex flex-col gap-4">
  <ECard
    title="Welcome"
    subtitle="Welcome to Eureka, a free and open source Svelte 5 component library.">
    <div class="flex flex-col gap-2 desktop:flex-row">
      <EButton>Test Button</EButton>
      <EButton type="secondary" onclick={() => (modalVisible = !modalVisible)}
        >Modal Demo</EButton>
      <EButton type="danger">Big Red Button</EButton>
    </div>
  </ECard>
  <ECard></ECard>
</div>