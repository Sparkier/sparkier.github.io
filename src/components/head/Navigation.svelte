<script lang="ts">
  import slocation from "slocation";

  export let picHeight;
  export let windowWidth;

  $: pathname = $slocation.pathname;

  function setPathname(path: string) {
    pathname = path;
  }
</script>

<div class="navigation-container">
  <div
    class="navigation-before"
    style="width: {(windowWidth - picHeight) / 2}px;"
  >
    <a
      href="/publications"
      on:click={() => setPathname("/publications")}
      class="navigation-link {pathname === '/publications' ? 'active' : ''}"
      >Papers</a
    >
    <a
      href="/research"
      on:click={() => setPathname("/research")}
      class="navigation-link {pathname === '/research' ? 'active' : ''}"
      >Research</a
    >
  </div>
  <div
    class="avatar-container"
    style="width: {picHeight}px; height: {picHeight}px;"
  >
    <a href="/" on:click={() => setPathname("/")}>
      <img
        class="avatar"
        style="width: {picHeight}px; height: {picHeight}px;"
        src="images/alex_small.jpg"
        alt="Profile image Alex Bäuerle"
      />
    </a>
  </div>
  <div
    class="navigation-after"
    style="width: {(windowWidth - picHeight) / 2}px;"
  >
    <a
      href="/projects"
      on:click={() => setPathname("/projects")}
      class="navigation-link {pathname === '/projects' ? 'active' : ''}"
      >Projects</a
    >
    <a
      href="/cv"
      on:click={() => setPathname("/cv")}
      class="navigation-link {pathname === '/cv' ? 'active' : ''}">CV</a
    >
  </div>
</div>

<style lang="scss">
  .avatar {
    border-radius: 50%;
  }

  .avatar-container {
    padding-top: 12px;
    padding-bottom: 12px;
  }

  .navigation-container {
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    justify-content: center;
  }

  .navigation-link {
    padding: 10px;
    font-size: 16pt;
    color: #2c3e50;
    text-decoration: underline;

    &:active {
      color: rgb(67, 151, 236);
    }
  }

  .navigation-before {
    margin-right: 20px;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-end;
    justify-content: flex-end;
  }

  .navigation-after {
    margin-left: 20px;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: flex-start;
  }

  .active {
    color: rgb(67, 151, 236);
  }
</style>
