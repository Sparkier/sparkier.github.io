<script lang="ts">
  import { getTalks } from "../../helpers/talkProvider";
  import Talk from "./Talk.svelte";

  let talks = getTalks();
</script>

<div>
  <h2>Talks</h2>
  {#each talks as talk}
    <Talk {talk} />
  {/each}
</div>
