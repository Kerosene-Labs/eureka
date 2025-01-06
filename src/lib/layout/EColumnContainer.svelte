<script lang="ts">
    import { ECard } from "$lib/index.js";


    interface Props {
        children?: any;
    }

    let { children }: Props = $props();

    const isAllECard = $derived(() => {
        if (!children) return true;
        return Array.isArray(children)
            ? children.every((child) => child?.type === ECard)
            : children?.type === ECard;
    });
</script>

<div class={`flex flex-col ${isAllECard() ? 'gap-2' : 'gap-4'}`}>
    {@render children?.()}
</div>