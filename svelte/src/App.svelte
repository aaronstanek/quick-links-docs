<script lang="ts">
import Header1 from "./Header1.svelte";
import Header2 from "./Header2.svelte";
import Contents from "./Contents.svelte";
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
	<Contents></Contents>
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
		<i>Quick Links</i> cannot be installed on Safari;
		there are no plans to change this.
	</p>
	<Header2 tag="making-a-new-link" text="Making a new link"></Header2>
	<p>
		In the upper right of your browser, you'll see a puzzle piece icon.
		If you click it and select "Quick Links", a popup similar to the one
		depicted below will appear.
	</p>
	<img src="img/popup_empty.png" alt="The Quick Links popup menu. The input fields are empty.">
	<p>
		Tip: for faster access in the future, you can pin the <i>Quick Links</i>
		icon to the toolbar using the pin icon in the puzzle piece icon's dropdown menu.
	</p>
	<p>
		To create a new Quick Link,
		just fill in the URL and Quick Link fields,
		then press CREATE. It's that easy!
	</p>
	<img src="img/popup_example.png" alt="The Quick Links popup menu. The URL field contains the string &quot;https://example.com&quot; and the Quick Link field contains the string &quot;coolwebsite&quot;.">
	<p>
		The example above will associate the keyword "coolwebsite"
		with the webpage "https://example.com".
		So now you can go to "https://example.com" by typing "coolwebsite"
		into your URL bar.
	</p>
	<p>
		Generally, the popup will pre-fill the URL field with the URL of the current page.
		So you only have to fill out the Quick Link field.
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
	img {
		width: 100%;
		border-style: solid;
		border-width: 1px;
		border-color: black;
		border-radius: 20px;
	}
</style>