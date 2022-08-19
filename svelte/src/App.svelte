<script lang="ts">
	import Header1 from "./Header1.svelte";
import Header2 from "./Header2.svelte";
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
	<Header2 tag="installation" text="Installation"></Header2>
	<p>
		<a href="https://chrome.google.com/webstore/detail/quick-links/mjajgkekioonpenodhpklcfpcdnonmcm">
			Download from the Chrome Web Store
		</a>
	</p>
	<p>
		<i>Quick Links</i> is known to be compatible with the desktop
		editions of Google Chrome, Microsoft Edge, Opera, and Brave.
		It also works on the Kiwi browser for Android, although the user
		experience is still being improved for this platform.
		The extension should work on all other Chromium-based browsers
		that support Chrome extensions.
	</p>
	<p>
		The extension could not be installed on Firefox version 103.0.2,
		but future versions of Firefox may support it.
		<i>Quick Links</i> is cannot be installed on Safari;
		there are no plans to change this.
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
		max-width: 80%;
		padding: 20px;
	}
	p {
		font-size: 17px;
	}
</style>