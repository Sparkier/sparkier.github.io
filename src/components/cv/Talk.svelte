<script lang="ts">
  import type { Talk } from "../../types";
  import LinkItem from "../LinkItem.svelte";

  export let talk: Talk;
  export let showLinks: boolean;
</script>

<div class="talk-container">
  <h3>
    {talk.title}
  </h3>
  <p class="timeframe">
    {talk.date.toDateString()}
  </p>
  <div class="talk-details-container">
    <p class="venue">
      {talk.venue}
    </p>
    {#if showLinks}
      <div class="link-item-container">
        {#each talk.links as link}
          <LinkItem linkWithIcon={link} />
        {/each}
      </div>
    {/if}
  </div>
</div>

<style lang="scss">
  .talk-container {
    padding-bottom: 1em;
    display: flex;
    flex-direction: column;
    position: relative;
  }
  .talk-details-container {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }

  .venue {
    margin-right: 5px;
  }

  .link-item-container {
    margin-bottom: -5px;
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
