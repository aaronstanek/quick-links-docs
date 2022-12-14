<script lang="ts">
import Header1 from "./Header1.svelte";
import Header2 from "./Header2.svelte";
import Contents from "./Contents.svelte";
import InlineCode from "./InlineCode.svelte";
import Header3 from "./Header3.svelte";
</script>

<div class="centraltext">
	<Header1 tag="quick-links" text="Quick Links"></Header1>
	<p class="it">
		Never bookmark a webpage again!
	</p>
	<p>
		The Quick Links browser extension allows you to rapidly revisit
		webpages without needing to dig through your
		browser history or bookmarks bar.
	</p>
	<p>
		All you have to do is come up
		with a memorable name for a webpage you want to visit again,
		then later type that name into your URL bar to zip back to that page!
	</p>
	<p>
		Let's say that you need to reference a periodic table for your work.
		It's easy enough to Google "periodic table" and find what you're looking for,
		but if you need to access the periodic table frequently, you'd certainly want
		a faster way to return to the webpage than going through the Google
		search results every time. A bookmark would certainly accomplish this,
		but then you'd still need to go find the bookmark and click on it.
		If you have enough bookmarks, then this search through your bookmarks
		bar could potentially take just as long as the Google search would have taken!
	</p>
	<p>
		With Quick Links, you could easily associate the keyword "periodic" with
		the periodic table reference webpage. Then returning to the webpage is as
		easy as typing "go periodic" into your URL bar and hitting the enter key.
		Faster and easier than using a bookmark!
	</p>
	<Contents></Contents>
	<Header2 tag="installation" text="Installation"></Header2>
	<p>
		<a href="https://chrome.google.com/webstore/detail/quick-links/mjajgkekioonpenodhpklcfpcdnonmcm">
			Download from the Chrome Web Store
		</a>
	</p>
	<p>
		Quick Links is known to be compatible with the desktop
		editions of Google Chrome, Microsoft Edge, Opera, and Brave.
		It also works on the Kiwi browser for Android, although the user
		experience is still being improved for this platform.
		The extension should work on all other Chromium-based browsers
		that support Chrome extensions.
	</p>
	<p>
		The extension could not be installed on Firefox version <InlineCode text="103.0.2"></InlineCode>,
		but future versions of Firefox may support it.
		Quick Links cannot be installed on Safari;
		there are no plans to change this.
	</p>
	<Header2 tag="making-a-new-link" text="Making a new link"></Header2>
	<p>
		In the upper right of your browser, you'll see a puzzle piece icon.
		If you click it and select "Quick Links", a popup like the one
		depicted below will appear.
	</p>
	<img src="img/popup_empty_web.png" alt="The Quick Links popup menu. The input fields are empty.">
	<p>
		Tip: for faster access in the future, you can pin the Quick Links
		icon to the toolbar using the pin icon in the puzzle piece icon's dropdown menu.
	</p>
	<p>
		To create a new Quick Link,
		just fill in the URL and Quick Link fields,
		then press CREATE or tap the enter key. It's that easy!
	</p>
	<img src="img/popup_example_web.png" alt="The Quick Links popup menu. The URL field contains the string &quot;https://example.com&quot; and the Quick Link field contains the string &quot;coolwebsite&quot;.">
	<p>
		The example above will associate the keyword <InlineCode text="coolwebsite"></InlineCode>
		with the webpage <InlineCode text="https://example.com"></InlineCode>.
		So now you can go to <InlineCode text="https://example.com"></InlineCode>
		by typing <InlineCode text="go coolwebsite"></InlineCode> into your URL bar.
	</p>
	<p>
		The popup will pre-fill the URL field with the URL of the current page.
		So, you only have to fill out the Quick Link field.
	</p>
	<Header3 tag="other-ways-to-make-a-link" text="Other ways to make a link"></Header3>
	<p>
		There is a preregistered dynamic link for creating new links.
		<InlineCode text="go links/new/<quick-link-keyword>"></InlineCode>
		This is useful if you have the destination URL copied to your clipboard, and
		you only want to enter the Quick Link keyword.
	</p>
	<p>
		If you <a href="#using-a-link">use a link</a> that hasn't been created yet,
		then you will be prompted to create the link.
		This is useful in cases where you expected a link to exist, but it hasn't
		been registered yet. You will be prompted for the destination URL.
	</p>
	<p>
		Links can be created from the <a href="#link-management">link management page</a>.
	</p>
	<p>
		If you want to create a large number of links that already exist in another
		instance of Quick Links, consider <a href="#exporting-links">exporting</a>
		then <a href="#importing-links">importing</a> the links.
	</p>
	<Header2 tag="using-a-link" text="Using a link"></Header2>
	<p>
		To use a link, just go to the URL bar and type
		the word <InlineCode text="go"></InlineCode> followed by a single space, as seen below.
	</p>
	<img src="img/go_web.png" alt="URL bar with the word &quot;go&quot; and then a space.">
	<p>
		As soon as you type the space, the Quick Links input context will be displayed.
		This lets you know that you are entering a Quick Link and not a URL or a
		web search query.
	</p>
	<img src="img/quick_links_web.png" alt="URL bar with Quick Links input context.">
	<p>
		Then we just enter the Quick Link keyword that we registered earlier.
		If we wanted to use the link created in the <a href="#making-a-new-link">Making a new link</a> section,
		we would type <InlineCode text="coolwebsite"></InlineCode>, as seen below.
	</p>
	<img src="img/coolwebsite_web.png" alt="URL bar with Quick Links input context. &quot;coolwebsite&quot; has been input.">
	<p>
		Pressing the enter key will submit the link.
		In this case, we will be directed to <InlineCode text="https://example.com"></InlineCode>.
	</p>
	<Header2 tag="link-management" text="Link management"></Header2>
	<p>
		To delete or edit a link, you will have to access the link management page.
		The fastest way to do this is to <a href="#using-a-link">use</a>
		the preregistered link: <InlineCode text="links"></InlineCode>.
	</p>
	<img src="img/links_web.png" alt="Quick Links input context in URL bar with &quot;links&quot; input.">
	<p>
		The link management page can also be accessed from a link on the
		top of the toolbar popup menu.
		The link management page is show below.
	</p>
	<img src="img/main_empty_web.png" alt="The link management page with no links registered.">
	<Header3 tag="deleting-links" text="Deleting links"></Header3>
	<p>
		To delete a link, locate it in the table of links on the link management page.
		Then click the trash can icon on the far right of the row of that link.
	</p>
	<Header3 tag="editing-links" text="Editing links"></Header3>
	<p>
		To edit a link, locate it in the table of links on the link management page.
		Then click the pencil icon on the right of the row of that link.
	</p>
	<img src="img/edit_1_web.png" alt="The link management page with editing interface active.">
	<p>
		The second row of the image above shows the editing interface
		which appears after the pencil icon is pressed.
		Once you have updated the two text fields of the row to be what you want.
		Click the checkmark icon, or press the enter key.
		To discard changes, press the X icon on the far right.
	</p>
	<Header2 tag="dynamic-links" text="Dynamic Links"></Header2>
	<p>
		Dynamic links are a feature not possible with regular bookmarks.
		A dynamic link is a template which can be reused
		to link many Quick Link keywords to many URLs.
	</p>
	<p>
		For example, if you wanted to create a link to every article on the
		English-language Wikipedia, you could register a Quick Link
		<InlineCode text="wiki/"></InlineCode><InlineCode text="%X1" color="red"></InlineCode>
		pointing to URLs of the form
		<InlineCode text="https://en.wikipedia.org/wiki/"></InlineCode><InlineCode text="%X1" color="red"></InlineCode>,
		where <InlineCode text="%X1" color="red"></InlineCode> is a variable to
		be resolved when the link is used.
	</p>
	<p>
		So, the keyword <InlineCode text="wiki/potato"></InlineCode> would take you to the Wikipedia
		article about potatoes, and <InlineCode text="wiki/sun"></InlineCode> would take
		you to the Wikipedia article about the Sun, etc...
	</p>
	<img src="img/main_example_4_web.png" alt="The link management page with &quot;wiki/%X1&quot; in the Quick Link input and &quot;https://en.wikipedia.org/wiki/%X1&quot; in the URL input.">
	<p>
		You can even use multiple variables!
		Each variable takes the form <InlineCode text="%X[0-9]"></InlineCode>.
		The set of variables used in the Quick Link and in the URL must match,
		but do not need to appear in the same order.
		A Quick Link may not contain more than one instance of a given variable.
		Variables may appear multiple times in a URL.
	</p>
	<p>
		For performance reasons, the placement of variables in a Quick Link
		is restricted. Each variable must be preceded by a <InlineCode text="/"></InlineCode>
		character, and may only be followed by another variable (preceded by a <InlineCode text="/"></InlineCode>)
		or the end of the Quick Link.
		So,
		<InlineCode text="example/"></InlineCode><InlineCode text="%X1" color="red"></InlineCode><InlineCode text="/"></InlineCode><InlineCode text="%X2" color="red"></InlineCode>
		is well formatted. But
		<InlineCode text="example/"></InlineCode><InlineCode text="%X1%X2" color="red"></InlineCode>,
		<InlineCode text="example/"></InlineCode><InlineCode text="%X1" color="red"></InlineCode><InlineCode text="/"></InlineCode><InlineCode text="%X2" color="red"></InlineCode><InlineCode text="/text"></InlineCode>,
		<InlineCode text="example/"></InlineCode><InlineCode text="%X1" color="red"></InlineCode><InlineCode text="/text/"></InlineCode><InlineCode text="%X2" color="red"></InlineCode>, and
		<InlineCode text="%X1" color="red"></InlineCode><InlineCode text="/example/"></InlineCode><InlineCode text="%X2" color="red"></InlineCode>
		will all be rejected.
	</p>
	<Header2 tag="exporting-links" text="Exporting links"></Header2>
	<p>
		To export the links saved in your browser, either to back up,
		or to transfer to another computer, <a href="#using-a-link">use</a>
		the preregistered link <InlineCode text="links/export"></InlineCode>
		or click the <InlineCode text="export"></InlineCode>
		link in the toolbar popup menu.
	</p>
	<img src="img/export_web.png" alt="The export page.">
	<p>
		On the export page, all the links saved in your browser
		are displayed as a JSON blob. You can either copy the text manually,
		or click the <InlineCode text="Copy to clipboard"></InlineCode> button.
	</p>
	<p>
		Once you have copied the JSON blob, either move it to another browser, or save it
		someplace for later use.
	</p>
	<Header2 tag="importing-links" text="Importing links"></Header2>
	<p>
		Importing links into your browser is almost identical to <a href="#exporting-links">exporting</a>.
	</p>
	<p>
		Use the preregistered link <InlineCode text="links/import"></InlineCode>
		or click the link in the toolbar popup menu.
	</p>
	<img src="img/import_example_web.png" alt="The import page.">
	<p>
		Paste the JSON blob from the <a href="#exporting-links">export</a>
		step into the text field. Then click <InlineCode text="IMPORT"></InlineCode>
		or press enter.
	</p>
	<p>
		Importing will delete all the links that were previously saved in your browser.
	</p>
	<Header2 tag="nuances" text="Nuances"></Header2>
	<p>
		There are a few cases where the behavior of Quick Links may be
		surprising to a user.
	</p>
	<Header3 tag="preregistered-links" text="Preregistered links"></Header3>
	<p>
		There are a few preregistered links.
		These can be used identically to user-defined links,
		however they cannot be deleted or overwritten,
		and will not appear in the link management page.
		They are:
	</p>
	<ul>
		<li><p>
			help
		</p></li>
		<li><p>
			links
		</p></li>
		<li><p>
			links/help
		</p></li>
		<li><p>
			links/new
		</p></li>
		<li><p>
			links/new/*
		</p></li>
		<li><p>
			links/export
		</p></li>
		<li><p>
			links/import
		</p></li>
	</ul>
	<Header3 tag="characters-in-quick-link" text="Characters in a Quick Link"></Header3>
	<p>
		It is expected that, for speed-of-typing,
		a Quick Link will contain only the characters <InlineCode text="[a-z]"></InlineCode>
		and <InlineCode text="[0-9]"></InlineCode>, with <InlineCode text="/"></InlineCode>
		to separate logical sections of a keyword and <InlineCode text="%"></InlineCode>
		to indicate variables.
	</p>
	<p>
		This is not a hard restriction, and it is permitted to use characters beyond these,
		however a warning will be raised when a user registers a Quick Link
		containing characters outside these ranges.
	</p>
	<Header2 tag="source-code" text="Read the source code"></Header2>
	<p>
		The source code for Quick Links is available
		<a href="https://github.com/aaronstanek/quick_links_chrome">here</a>.
	</p>
	<p>
		The source code for this documentation page is available
		<a href="https://github.com/aaronstanek/quick-links-docs">here</a>.
	</p>
</div>

<style>
	div, img {
		box-shadow: 0px 0px 3px black;
	}
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
	.it {
		font-style: italic;
	}
	img {
		width: 100%;
		border-style: solid;
		border-width: 1px;
		border-color: black;
		border-radius: 20px;
	}
</style>