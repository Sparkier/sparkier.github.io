<script lang="ts">
  import ComponentWrapper from "./ComponentWrapper.svelte";
  import Head from "./components/head/Head.svelte";
  import NotFound from "./components/NotFound.svelte";
  import Projects from "./components/projects/Projects.svelte";
  import Home from "./components/Home.svelte";
  import Research from "./components/research/Research.svelte";
  import Publications from "./components/publications/Publications.svelte";
  import CV from "./components/cv/CV.svelte";

  import { Router, Route, links } from "svelte-routing";

  let windowWidth;
  $: windowShare = (windowWidth / 12) * 2;
  $: picHeight = Math.max(Math.min(150, windowShare), 130);
  $: headHeight = picHeight + 80;
</script>

<svelte:window bind:innerWidth={windowWidth} />
<main use:links>
  <Router>
    <Head {picHeight} {windowWidth} />
    <div class="content" style="margin-top: {headHeight}px;">
      <Route path="/"><ComponentWrapper><Home /></ComponentWrapper></Route>
      <Route path="/projects"
        ><ComponentWrapper><Projects /></ComponentWrapper></Route
      >
      <Route path="/research"
        ><ComponentWrapper><Research /></ComponentWrapper></Route
      >
      <Route path="/publications"
        ><ComponentWrapper><Publications /></ComponentWrapper></Route
      >
      <Route path="/cv"><ComponentWrapper><CV /></ComponentWrapper></Route>
      <Route path="*"><ComponentWrapper><NotFound /></ComponentWrapper></Route>
    </div>
  </Router>
</main>

<style lang="scss">
  .content {
    display: grid;
    align-items: center;
    justify-content: center;
    max-width: 1000px;
    margin: auto;
  }
</style>
