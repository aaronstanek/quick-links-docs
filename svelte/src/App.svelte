<script lang="ts">
	import Header1 from "./Header1.svelte";
</script>

<div class="centraltext">
	<Header1 tag="quick-links" text="Quick Links"></Header1>
	<p>
		The <i>Quick Links</i> browser extension allows you to rapidly access
		previously visited webpages without needing to dig through your
		browser history or bookmarks bar.
	</p>
	<p>
		All you have to do is come up
		with a memorable name for a webpage you want to visit again,
		then later type that name into your URL bar to zip back to that page!
	</p>
</div>

<style>
	.centraltext {
		border-style: solid;
		border-width: 1px;
		border-color: black;
		border-radius: 30px;
		margin-top: 10px;
		margin-bottom: 10px;
		margin-left: auto;
		margin-right: auto;
		width: 550px;
		padding: 20px;
	}
	p {
		font-size: 17px;
	}
</style>