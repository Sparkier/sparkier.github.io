<script lang="ts">
  export let author: string;
  export let last: boolean;
  export let length: number;

  $: precedingString = length !== 1 && last ? "and " : "";
  $: succeedingString = !last && length > 2 ? ", " : "";
</script>

<p>
  {#if author === "Alex Bäuerle"}
    {precedingString}<b>{author}</b>{succeedingString}
  {:else}
    {precedingString}{author}{succeedingString}
  {/if}
</p>

<style lang="scss">
  p {
    padding-right: 5px;
  }
</style>
