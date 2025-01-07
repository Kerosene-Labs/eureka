<script lang="ts">
  import { EP } from "$lib/index.js";
  import ENavItem from "./ENavItem.svelte";
  interface Props {
    text: string;
    goto: string;
    iconUrl?: string;
    iconAlt?: string;
    onclick?: any;
  }

  let { text, goto, iconUrl, iconAlt, onclick }: Props = $props();
</script>

<ENavItem {onclick}>
  <div class="flex flex-row items-center gap-2">
    <img src={iconUrl} alt={iconAlt} />
    <EP>{text}</EP>
  </div>
</ENavItem>
