<script lang="ts">
  import { getTalks } from "../../helpers/talkProvider";
  import Talk from "./Talk.svelte";

  export let showLinks: boolean;

  let talks = getTalks();
</script>

<div>
  <h2>Talks</h2>
  {#each talks as talk}
    <Talk {talk} {showLinks} />
  {/each}
</div>
