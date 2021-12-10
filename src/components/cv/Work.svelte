<script lang="ts">
  import { getWork } from "../../helpers/workProvider";
  import Workplace from "./Workplace.svelte";

  let employments = getWork();
</script>

<div>
  <h2>Work Experience</h2>
  {#each employments as employment}
    <Workplace {employment} />
  {/each}
</div>
