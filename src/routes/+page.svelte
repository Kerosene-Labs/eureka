<script lang="ts">
  import EButton from "$lib/button/EButton.svelte";
  import ECard from "$lib/container/ECard.svelte";
  import EModal from "$lib/container/EModal.svelte";
  import EDateInput from "$lib/input/EDateInput.svelte";
  import ENumberInput from "$lib/input/ENumberInput.svelte";
  import ETextInput from "$lib/input/ETextInput.svelte";

  let modalVisible: boolean = false;
  let amount: number;
  let description: string;
  let date: Date;
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
  <ECard title="Inputs" subtitle="Here's some inputs!">
    <div class="flex flex-col gap-2">
      <ENumberInput id="dollars" label="Amount" prefix="$" value={amount}
      ></ENumberInput>
      <ETextInput id="description" label="Description" value={description}
      ></ETextInput>
      <EDateInput id="date" label="Date" value={date}></EDateInput>
    </div>
  </ECard>
  <ECard title="Overflow" subtitle="Some overflow content"></ECard>
  <ECard title="Overflow" subtitle="Some overflow content"></ECard>
  <ECard title="Overflow" subtitle="Some overflow content"></ECard>
  <ECard title="Overflow" subtitle="Some overflow content"></ECard>
  <ECard title="Overflow" subtitle="Some overflow content"></ECard>
</div>
