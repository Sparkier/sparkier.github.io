<script lang="ts">
  import School from "svelte-material-icons/School.svelte";
  import Email from "svelte-material-icons/Email.svelte";
  import Github from "svelte-material-icons/GithubCircle.svelte";
  import Twitter from "svelte-material-icons/Twitter.svelte";
  import Linkedin from "svelte-material-icons/LinkedinBox.svelte";
</script>

<div class="contact-container">
  <a href="mailto:alex@a13x.io">
    <Email size="1.5em" />
  </a>
  <a
    href="https://scholar.google.com/citations?user=131euyAAAAAJ&hl=en&oi=ao"
    target="_blank"
  >
    <School size="1.5em" />
  </a>
  <a href="https://www.github.com/sparkier" target="_blank">
    <Github size="1.5em" />
  </a>
  <a href="https://www.twitter.com/a13xba" target="_blank">
    <Twitter size="1.5em" />
  </a>
  <a href="https://www.linkedin.com/in/alex-bauerle" target="_blank">
    <Linkedin size="1.5em" />
  </a>
</div>

<style lang="scss">
  .contact-container {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  a {
    padding: 5px;
  }
</style>
