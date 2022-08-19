<script lang="ts">
    export let tag: string;
    export let text: string;
</script>

<h1 id={tag}>{text}</h1>

<hr>

<style>
    hr {
        border: 0px;
        height: 0.5px;
        background-color: black;
    }
</style>