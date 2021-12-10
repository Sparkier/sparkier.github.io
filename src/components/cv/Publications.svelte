<script lang="ts">
  import { getResearchProjects } from "../../helpers/projectsProvider";
  import Publication from "./Publication.svelte";

  let publications = getResearchProjects();
</script>

<div>
  <h2>Publications</h2>
  {#each publications as publication}
    <Publication {publication} />
  {/each}
</div>
