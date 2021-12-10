<script lang="ts">
  import type { LinkWithIcon } from "../types";

  export let linkWithIcon: LinkWithIcon;

  let props = { size: "1.5em" };
</script>

<a href={linkWithIcon.link} target="_blank">
  <svelte:component this={linkWithIcon.icon} {...props} />
</a>
