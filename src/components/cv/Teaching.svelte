<script lang="ts">
  import { getLectures } from "../../helpers/teachingProvider";

  let lectures = getLectures();
</script>

<div>
  <h2>Teaching</h2>
  <div>
    {#each lectures as lecture}
      <div class="lecture-container">
        <h3>{lecture.title}</h3>
        <p class="timeframe">
          {lecture.timeframe}
        </p>
        <p>
          {lecture.abstract}
        </p>
      </div>
    {/each}
  </div>
</div>

<style lang="scss">
  .lecture-container {
    padding-bottom: 1em;
    position: relative;
  }

  @media (min-width: 800px) {
    .timeframe {
      position: absolute;
      top: 0px;
      right: 0px;
    }
  }

  h3 {
    max-width: 600px;
  }
</style>
