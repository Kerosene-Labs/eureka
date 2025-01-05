<script lang="ts">
    interface Props {
        children?: any;
    }

    let {children}: Props = $props()
</script>

<h1 class="text-2xl desktop:text-3xl font-black text-neutral-700 dark:text-white">{@render children?.()}</h1>