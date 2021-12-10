<script lang="ts">
  import type { ResearchProject } from "../../types";
  import LinkItem from "../LinkItem.svelte";
  import Author from "./Author.svelte";

  export let publication: ResearchProject;
</script>

<div class="publication-container">
  <img src={publication.imageSrc} alt={publication.title} />
  <div class="publication-content-container">
    <h3>
      {publication.title} ({publication.venue}, {publication.year})
    </h3>
    <div class="author-container">
      {#each publication.authors as author, index}
        <Author
          {author}
          last={publication.authors.length === index + 1}
          length={publication.authors.length}
        />
      {/each}
    </div>
    <div class="link-item-container">
      {#each publication.links as link}
        <div class="link-item">
          <LinkItem linkWithIcon={link} />
        </div>
      {/each}
    </div>
    <p>{publication.abstract}</p>
  </div>
</div>

<style lang="scss">
  .publication-container {
    display: flex;
    padding-bottom: 2em;
  }

  @media (max-width: 800px) {
    .publication-container {
      display: flex;
      flex-direction: column;
      padding-bottom: 4em;
    }

    h3 {
      padding-top: 5px;
    }
  }

  @media (min-width: 800px) {
    img {
      height: 100%;
    }
  }

  .publication-content-container {
    display: flex;
    flex-direction: column;
  }

  .author-container {
    display: flex;
    flex-wrap: wrap;
    flex: 1 1 auto;
    margin-top: 0.5em;
    margin-bottom: 0.5em;
  }

  img {
    object-fit: cover;
    max-width: 250px;
    margin-right: 1em;
  }

  .link-item {
    margin-right: 5px;
  }

  .link-item-container {
    display: flex;
  }
</style>
