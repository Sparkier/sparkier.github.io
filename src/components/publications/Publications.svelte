<script lang="ts">
  import { getResearchProjects } from "../../helpers/projectsProvider";
  import Publication from "./Publication.svelte";

  let publications = getResearchProjects();
</script>

<div class="publications-container">
  {#each publications as publication}
    <Publication {publication} />
  {/each}
</div>

<style lang="scss">
  .publications-container {
    display: flex;
    flex-direction: column;
  }
</style>
