<script lang="ts">
  export let headers: string[] = ["Col 1", "Col 2", "Col 3"];
</script>

<div
  class="flex w-full overflow-auto rounded-xl border border-neutral-700/50 bg-neutral-800">
  <table class="w-full table-auto">
    <thead class="bg-zinc-900">
      <tr>
        {#each headers as header}
          <th class="p-4 font-mono text-sm font-bold text-neutral-400"
            >{header}</th>
        {/each}
      </tr>
    </thead>
    <tbody>
      <slot></slot>
    </tbody>
  </table>
</div>

<style lang="postcss">
</style>
