<script lang="ts">
  import type { Work } from "../../types";

  export let employment: Work;

  let props = { size: "1.5em" };
</script>

<div class="work-element-container">
  <div class="title-container">
    <div class="icon">
      <svelte:component this={employment.icon} {...props} />
    </div>
    <h3>
      {employment.title}
    </h3>
  </div>
  <p class="timeframe">
    {employment.timeframe}
  </p>
  <p>
    {employment.abstract}
  </p>
</div>

<style lang="scss">
  .work-element-container {
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

  .icon {
    margin-bottom: -5px;
    margin-right: 5px;
  }

  .title-container {
    display: flex;
  }

  h3 {
    max-width: 600px;
  }
</style>
