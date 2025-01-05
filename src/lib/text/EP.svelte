<script lang="ts">
    interface Props {
        children?: any;
    }

    let {children}: Props = $props()
</script>

<p class="font-semibold text-neutral-900 dark:text-neutral-300">{@render children?.()}</p>