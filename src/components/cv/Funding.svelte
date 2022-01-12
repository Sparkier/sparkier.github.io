<script lang="ts">
  import { getFunding } from "../../helpers/fundingProvider";

  let funding = getFunding();
</script>

<div>
  <h2>Funding</h2>
  <div>
    {#each funding as fund}
      <div class="funding-container">
        <h3>{fund.name}</h3>
        <p class="timeframe">
          {fund.timeframe}
        </p>
        <p>
          {fund.type}
        </p>
      </div>
    {/each}
  </div>
</div>

<style lang="scss">
  .funding-container {
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
    max-width: 500px;
  }
</style>
