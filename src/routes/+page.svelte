<script lang="ts">
  import EButton from "$lib/button/EButton.svelte";
  import ECard from "$lib/container/ECard.svelte";
  import EModal from "$lib/container/EModal.svelte";
  import { addToToastQueue, ToastType } from "$lib/index.js";
  import EDateInput from "$lib/input/EDateInput.svelte";
  import EForm from "$lib/input/EForm.svelte";
  import ENumberInput from "$lib/input/ENumberInput.svelte";
  import ETextInput from "$lib/input/ETextInput.svelte";
  import EColumnThenRowLayout from "$lib/layout/EColumnThenRowLayout.svelte";
  import ETable from "$lib/table/ETable.svelte";
  import ETableRow from "$lib/table/ETableRow.svelte";
  import { writable, type Writable } from "svelte/store";
  import * as Yup from "yup";

  let modalVisible: boolean = false;
  let amount: number = 0;
  let description: string = "";
  let date: Date = new Date();

  const formMessages: Writable<object> = writable([]);
  $: messages = $formMessages; // Subscribe to the store and update local state

  // Reactive statement to log whenever formMessages changes
  $: console.log("formMessages has changed:", messages);
  function descriptionSchema(): Yup.StringSchema {
    return Yup.string()
      .required("A description is required")
      .max(50, "The description must not be more than 50 characters.");
  }
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
    <EColumnThenRowLayout>
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
    </EColumnThenRowLayout>
  </ECard>
  <ECard
    title="Inputs"
    subtitle="Here's some inputs! They're even validated with Yup.">
    <EColumnThenRowLayout>
      <EForm messageStore={formMessages}>
        <ENumberInput id="dollars" label="Amount" prefix="$" value={amount}
        ></ENumberInput>
        <ETextInput
          id="description"
          label="Description"
          value={description}
          schema={descriptionSchema()}
          messageStore={formMessages}></ETextInput>
        <EDateInput id="date" label="Date" value={date}></EDateInput>
      </EForm>
    </EColumnThenRowLayout>
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
