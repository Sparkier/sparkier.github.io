<script lang="ts">
  import { getReviews } from "../../helpers/reviewProvider";

  let service = getReviews();
</script>

<div>
  <h2>Reviewing and Service</h2>
  {#each service as s}
    <div class="service-container">
      <p>{s.venue} ({s.years})</p>
    </div>
  {/each}
</div>

<style lang="scss">
  .service-container {
    padding-bottom: 0.5em;
  }
</style>
