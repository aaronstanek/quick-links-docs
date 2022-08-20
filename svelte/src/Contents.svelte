<script lang="ts">
    import Header2 from "./Header2.svelte";
    import ContentsItem from "./ContentsItem.svelte";
</script>

<Header2 tag="contents" text="Contents"></Header2>

<ol>
    <ContentsItem tag="installation" text="Installation"></ContentsItem>
    <ContentsItem tag="making-a-new-link" text="Making a new link"></ContentsItem>
    <ol>
        <ContentsItem tag="other-ways-to-make-a-link" text="Other ways to make a link"></ContentsItem>
    </ol>
    <ContentsItem tag="using-a-link" text="Using a link"></ContentsItem>
    <ContentsItem tag="link-management" text="Link management"></ContentsItem>
    <ol>
        <ContentsItem tag="deleting-links" text="Deleting links"></ContentsItem>
        <ContentsItem tag="editing-links" text="Editing links"></ContentsItem>
    </ol>
    <ContentsItem tag="exporting-links" text="Exporting links"></ContentsItem>
    <ContentsItem tag="importing-links" text="Importing links"></ContentsItem>
    <ContentsItem tag="nuances" text="Nuances"></ContentsItem>
    <ContentsItem tag="source-code" text="Read the source code"></ContentsItem>
</ol>

<style>
</style>