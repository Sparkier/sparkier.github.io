<script lang="ts">
  import Home from "svelte-material-icons/Home.svelte";
  import School from "svelte-material-icons/School.svelte";
  import Email from "svelte-material-icons/Email.svelte";
  import Github from "svelte-material-icons/GithubCircle.svelte";
  import Twitter from "svelte-material-icons/Twitter.svelte";
  import Linkedin from "svelte-material-icons/LinkedinBox.svelte";
</script>

<div class="contact-container">
  <div class="contact-element-container">
    <a href="a13x.io">
      <Home size="1.5em" />
    </a>
    a13x.io
  </div>
  <div class="contact-element-container">
    <a href="mailto:alex@a13x.io">
      <Email size="1.5em" />
    </a>
    alex@a13x.io
  </div>
  <div class="contact-element-container">
    <a href="https://www.github.com/sparkier" target="_blank">
      <Github size="1.5em" />
    </a>
    Sparkier
  </div>
  <div class="contact-element-container">
    <a href="https://www.twitter.com/a13xba" target="_blank">
      <Twitter size="1.5em" />
    </a>
    a13xba
  </div>
  <div class="contact-element-container">
    <a href="https://www.linkedin.com/in/alex-bauerle" target="_blank">
      <Linkedin size="1.5em" />
    </a>
    Alex Bäuerle
  </div>
  <div class="contact-element-container">
    <a
      href="https://scholar.google.com/citations?user=131euyAAAAAJ&hl=en&oi=ao"
      target="_blank"
    >
      <School size="1.5em" />
    </a>
    Alex Bäuerle
  </div>
</div>

<style lang="scss">
  .contact-container {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    margin-top: 1em;
  }

  a {
    padding-right: 5px;
    margin-bottom: -5px;
  }

  .contact-element-container {
    padding-right: 1em;
    display: flex;
    align-items: center;
  }
</style>
