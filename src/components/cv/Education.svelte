<script lang="ts">
  import EducationElement from "./EducationElement.svelte";
  import { getEducationElements } from "../../helpers/educationProvider";

  let educationElements = getEducationElements();
</script>

<div>
  <h2>Education</h2>
  {#each educationElements as educationElement}
    <EducationElement {educationElement} />
  {/each}
</div>
