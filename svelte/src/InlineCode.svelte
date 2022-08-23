<script lang="ts">
    import { onMount } from "svelte/internal";
    export let text: string;
    export let color: string | undefined = undefined;
    let spanElement;
	onMount(async () => {
        if (typeof color !== "undefined") {
            spanElement.style.color = color;
        }
	});
</script>

<span bind:this={spanElement}>{text}</span>

<style>
    span {
        font-family: var(--code-font);
        font-size: 15px;
        background-color: gainsboro;
    }
</style>