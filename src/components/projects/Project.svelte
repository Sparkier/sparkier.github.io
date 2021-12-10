<script lang="ts">
  import type { FunProject } from "../../types";
  import LinkItem from "../LinkItem.svelte";

  export let project: FunProject;
</script>

<div class="project-container">
  <img src={project.imageSrc} alt={project.title} />
  <div>
    <h3>{project.title}</h3>
    <div class="link-item-container">
      {#each project.links as link}
        <div class="link-item">
          <LinkItem linkWithIcon={link} />
        </div>
      {/each}
    </div>
    <p>
      {project.abstract}
    </p>
  </div>
</div>

<style lang="scss">
  .project-container {
    display: flex;
    margin-bottom: 2em;
  }

  .project-content-container {
    display: flex;
    flex-direction: column;
  }

  img {
    height: 100%;
    object-fit: cover;
    max-width: 150px;
    margin-right: 1em;
  }

  .link-item {
    margin-right: 5px;
  }

  .link-item-container {
    display: flex;
  }
</style>
