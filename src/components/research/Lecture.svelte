<script lang="ts">
  import type { Lecture } from "../../types";

  export let lecture: Lecture;
</script>

<div class="lecture-container">
  <h3>{lecture.title} ({lecture.timeframe})</h3>
  <p>
    {lecture.abstract}
  </p>
</div>

<style lang="scss">
  .lecture-container {
    padding-bottom: 1em;
  }
</style>
