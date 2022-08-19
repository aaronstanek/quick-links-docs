<script lang="ts">
    export let tag: string;
    export let text: string;
</script>

<li>
    <p>
        <a href={"#" + tag}>
            {text}
        </a>
    </p>
</li>

<style>
	p {
		font-size: 17px;
	}
</style>