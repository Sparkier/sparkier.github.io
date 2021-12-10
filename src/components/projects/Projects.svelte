<script lang="ts">
  import { getFunProjects } from "../../helpers/projectsProvider";
  import Project from "./Project.svelte";

  let projects = getFunProjects();
</script>

<div>
  {#each projects as project}
    <Project {project} />
  {/each}
</div>
