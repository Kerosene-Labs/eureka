<script lang="ts">
  import EButton from "$lib/button/EButton.svelte";
  import ECard from "$lib/container/ECard.svelte";
  import EModal from "$lib/container/EModal.svelte";
  import { addToToastQueue, ToastType } from "$lib/index.js";
  import EDateInput from "$lib/input/EDateInput.svelte";
  import ENumberInput from "$lib/input/ENumberInput.svelte";
  import ETextInput from "$lib/input/ETextInput.svelte";
  import EColumnContainer from "$lib/layout/EColumnContainer.svelte";
  import EColumnThenRowContainer from "$lib/layout/EColumnThenRowContainer.svelte";
  import ETable from "$lib/table/ETable.svelte";
  import ETableRow from "$lib/table/ETableRow.svelte";

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
    <EColumnThenRowContainer>
      <EButton>Test Button</EButton>
      <EButton type="secondary" onclick={() => (modalVisible = !modalVisible)}
        >Modal Demo</EButton>
      <EButton
        type="danger"
        onclick={() => {
          addToToastQueue({
            message: "This is an informational toast!",
            type: ToastType.INFO,
          });
          addToToastQueue({
            message: "This is a success toast!",
            type: ToastType.SUCCESS,
          });
          addToToastQueue({
            message: "This is an error toast!",
            type: ToastType.ERROR,
          });
        }}>Big Red Button</EButton>
    </EColumnThenRowContainer>
  </ECard>
  <ECard title="Inputs" subtitle="Here's some inputs!">
    <EColumnThenRowContainer>
      <ENumberInput id="dollars" label="Amount" prefix="$" value={amount}
      ></ENumberInput>
      <ETextInput id="description" label="Description" value={description}
      ></ETextInput>
      <EDateInput id="date" label="Date" value={date}></EDateInput>
    </EColumnThenRowContainer>
  </ECard>
  <ECard title="Tables" subtitle="What else are we going to eat on, the floor?">
    <ETable>
      <ETableRow row={["Test", "Test", "Test"]}></ETableRow>
      <ETableRow row={["Test", "Test", "Test"]}></ETableRow>
    </ETable>
  </ECard>

  <ECard title="Overflow" subtitle="Some overflow content"></ECard>
  <ECard title="Overflow" subtitle="Some overflow content"></ECard>
  <ECard title="Overflow" subtitle="Some overflow content"></ECard>
  <ECard title="Overflow" subtitle="Some overflow content"></ECard>
</div>
