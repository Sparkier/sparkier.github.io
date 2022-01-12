<script lang="ts">
  import { getMentorshipActivities } from "../../helpers/mentoringProvider";

  let mentorshipActivities = getMentorshipActivities();
</script>

<div>
  <h2>Mentoring</h2>
  <div>
    {#each mentorshipActivities as mentorshipActivity}
      <div class="mentoring-container">
        <h3>{mentorshipActivity.name}</h3>
        <p class="timeframe">
          {mentorshipActivity.timeframe}
        </p>
        <p>
          {mentorshipActivity.position}, {mentorshipActivity.institution}
        </p>
        <p>
          {mentorshipActivity.topic}
        </p>
      </div>
    {/each}
  </div>
</div>

<style lang="scss">
  .mentoring-container {
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
