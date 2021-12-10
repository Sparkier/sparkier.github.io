<script>
  import Work from "./Work.svelte";
  import Talks from "./Talks.svelte";
  import Teaching from "./Teaching.svelte";
</script>

<div>
  <div class="research-content-container">
    Deep learning might currently be one of the few technologies that has a
    great transformative potential for us all. To advance deep learning, I think
    one of the most important aspects is to understand the technology very well.
    Such an understanding should be accessible to as many people as possible.
    Thus, I am excited whenever I have the chance to work on something that
    fosters this understanding or makes it available to more users. I think one
    of the most important research areas right now is AI explainability. I try
    to contribute to this field through visualization as a method to communicate
    the abstract ideas inherent to deep learning.
  </div>
  <div class="research-content-container">
    <Work />
  </div>
  <div class="research-content-container">
    <Talks />
  </div>
  <div class="research-content-container">
    <Teaching />
  </div>
</div>

<style lang="scss">
  .research-content-container {
    padding-bottom: 3em;
  }
</style>
