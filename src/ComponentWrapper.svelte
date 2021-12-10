<script>
  import { fade } from "svelte/transition";
</script>

<div in:fade={{ duration: 600 }}>
  <slot />
</div>
