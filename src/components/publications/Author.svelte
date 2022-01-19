<script lang="ts">
  export let author: string;
  export let last: boolean;
  export let length: number;

  $: precedingString = length !== 1 && last ? "and " : "";
  $: succeedingString = !last && length > 2 ? ", " : "";
</script>

<p class={author === "Alex Bäuerle" ? "me" : "not-me"}>
  {precedingString}{author}{succeedingString}
</p>

<style lang="scss">
  p {
    padding-right: 5px;
  }
  .me {
    font-weight: 500;
  }

  .not-me {
    font-weight: 100;
    color: #555555;
  }
</style>
