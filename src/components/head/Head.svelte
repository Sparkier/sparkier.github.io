<script lang="ts">
  import Contact from "./Contact.svelte";
  import Navigation from "./Navigation.svelte";

  export let picHeight;
  export let windowWidth;
</script>

<div class="header">
  <Navigation {picHeight} {windowWidth} />
  <Contact />
</div>

<style lang="scss">
  .header {
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    z-index: 100;
    background-color: rgba($color: #ffffff, $alpha: 0.96);
  }
</style>
