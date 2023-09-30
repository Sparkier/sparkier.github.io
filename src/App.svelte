<script lang="ts">
  import ComponentWrapper from "./ComponentWrapper.svelte";
  import Defense from "./components/Defense.svelte";
  import Home from "./components/Home.svelte";
  import NotFound from "./components/NotFound.svelte";
  import Thirty from "./components/Thirty.svelte";
  import CV from "./components/cv/CV.svelte";
  import Head from "./components/head/Head.svelte";
  import Projects from "./components/projects/Projects.svelte";
  import Publications from "./components/publications/Publications.svelte";
  import Research from "./components/research/Research.svelte";

  import { Route, Router, links } from "svelte-routing";

  let windowWidth;
  $: windowShare = (windowWidth / 12) * 2;
  $: picHeight = Math.max(Math.min(150, windowShare), 130);
  $: headHeight = picHeight + 80;
</script>

<svelte:window bind:innerWidth={windowWidth} />
<main use:links>
  <Router>
    {#if !window.location.pathname.includes("thirty")}
      <Head {picHeight} {windowWidth} />
    {/if}
    <div
      class="content"
      style={`${
        !window.location.pathname.includes("thirty")
          ? `margin-top: ${headHeight}px;`
          : ""
      }`}
    >
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
      <Route path="/defense"
        ><ComponentWrapper><Defense /></ComponentWrapper></Route
      >
      <Route path="/thirty"
        ><ComponentWrapper><Thirty /></ComponentWrapper></Route
      >
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
