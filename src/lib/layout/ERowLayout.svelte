<script lang="ts">
    interface Props {
        children?: any;
    }

    let { children }: Props = $props();
</script>

<div class="flex flex-col gap-4">
    {@render children?.()}
</div>