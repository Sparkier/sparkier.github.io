<script lang="ts">
  import LinkItem from "../LinkItem.svelte";
  import type { Education } from "../../types";

  export let educationElement: Education;
  export let showLinks: boolean;
</script>

<div class="education-element-container">
  <h3>
    {educationElement.type} in {educationElement.subject} at {educationElement.institute}
  </h3>
  <p class="timeframe">
    {educationElement.timeframe}
  </p>
  <p>
    {educationElement.details}
  </p>
  {#if showLinks}
    <div class="link-item-container">
      {#each educationElement.iconElements as iconElement}
        <div class="link-item">
          <div class="link-icon">
            <LinkItem linkWithIcon={iconElement.icon} />
          </div>
          <p>
            {iconElement.description}
          </p>
        </div>
      {/each}
    </div>
  {/if}
</div>

<style lang="scss">
  .education-element-container {
    padding-bottom: 1em;
    position: relative;
  }

  .link-item-container {
    display: flex;
  }

  .link-item {
    display: flex;
    padding-right: 1em;
  }

  .link-icon {
    padding-right: 5px;
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
