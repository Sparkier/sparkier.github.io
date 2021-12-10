<script lang="ts">
  import Lecture from "./Lecture.svelte";
  import { getLectures } from "../../helpers/teachingProvider";

  let lectures = getLectures();
</script>

<div>
  <h2>Teaching</h2>
  <div>
    {#each lectures as lecture}
      <Lecture {lecture} />
    {/each}
  </div>
</div>
