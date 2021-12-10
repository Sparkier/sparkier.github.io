<script lang="ts">
  import type { Talk } from "../../types";
  import LinkItem from "../LinkItem.svelte";

  export let talk: Talk;
</script>

<div class="talk-container">
  <h3>
    {talk.title}
  </h3>
  <div class="talk-details-container">
    <p>
      {talk.venue}, ({talk.date.toDateString()})
    </p>
    <div class="link-item-container">
      {#each talk.links as link}
        <LinkItem linkWithIcon={link} />
      {/each}
    </div>
  </div>
</div>

<style lang="scss">
  .talk-container {
    padding-bottom: 1em;
    display: flex;
    flex-direction: column;
  }
  .talk-details-container {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }

  p {
    margin-right: 5px;
  }

  .link-item-container {
    margin-bottom: -5px;
  }
</style>
