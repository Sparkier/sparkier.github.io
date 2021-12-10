<script lang="ts">
  import type { Work } from "../../types";

  export let employment: Work;

  let props = { size: "1.5em" };
</script>

<div class="workplace-container">
  <svelte:component this={employment.icon} {...props} />
  <h3>{employment.title} ({employment.timeframe})</h3>
  <p>{employment.abstract}</p>
</div>

<style lang="scss">
  .workplace-container {
    padding-bottom: 1em;
  }
</style>
