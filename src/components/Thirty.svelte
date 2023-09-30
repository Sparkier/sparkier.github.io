<script lang="ts">
  import { canEnter } from "../stores";

  let password = "";
</script>

<div class="thirty-container">
  {#if !$canEnter}
    <h1>Ich werde 30. Das will ich mit euch feiern &#127881;!</h1>
    <div class="thirty-content-container">
      <img
        class="party-gif"
        src="images/party.webp"
        alt="Beispiel einer legendären Party."
      />
    </div>
    <div class="thirty-content-container">
      <h2>Wann</h2>
      <p>Samstag, 09.12.</p>
      <p>Details folgen.</p>
    </div>
    <div class="thirty-content-container">
      <h2>Wo</h2>
      <p>Info kommt. Umgebung FN.</p>
      <p>Es wird Möglichkeiten zum Übernachten geben.</p>
      <p>Bitte gib mir Bescheid ob du kommen kannst.</p>
    </div>
    <div class="thirty-content-container">
      <h2>Freu mich &#128525;</h2>
    </div>
  {:else}
    Bevor es hier los geht, muss sich der Sesam öffnen.
    <input
      type="password"
      bind:value={password}
      on:keyup={(e) => {
        if (e.key === "Enter") {
          canEnter.set(password === "666 Post");
        }
      }}
    />
  {/if}
</div>

<style lang="scss">
  .thirty-container {
    display: flex;
    flex-direction: column;
  }
  .thirty-content-container {
    padding-bottom: 3em;
  }
  .party-gif {
    width: auto;
    max-width: 80%;
  }
</style>
