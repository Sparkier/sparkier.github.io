<script lang="ts">
  import type { ResearchProject } from "../../types";
  import LinkItem from "../LinkItem.svelte";
  import Author from "../publications/Author.svelte";

  export let publication: ResearchProject;
  export let showLinks: boolean;
</script>

<div class="publication-container">
  <h3>
    {publication.title}
  </h3>
  {publication.venue}, {publication.year}
  <div class="author-container">
    {#each publication.authors as author, index}
      <Author
        {author}
        last={publication.authors.length === index + 1}
        length={publication.authors.length}
      />
    {/each}
  </div>
  {#if showLinks}
    <div class="link-item-container">
      {#each publication.links as link}
        <div class="link-item">
          <LinkItem linkWithIcon={link} />
        </div>
      {/each}
    </div>
  {/if}
</div>

<style lang="scss">
  .publication-container {
    display: flex;
    flex-direction: column;
    padding-bottom: 1em;
    position: relative;
  }

  .author-container {
    display: flex;
    flex-wrap: wrap;
    flex: 1 1 auto;
  }

  .link-item {
    margin-right: 5px;
  }

  .link-item-container {
    display: flex;
  }

  @media (min-width: 800px) {
    .link-item-container {
      position: absolute;
      top: 0px;
      right: 0px;
    }
  }

  h3 {
    max-width: 600px;
  }
</style>
