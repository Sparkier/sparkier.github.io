<script lang="ts">
  import LinkItem from "./LinkItem.svelte";

  import { LinkWithIcon } from "../types";

  import File from "svelte-material-icons/File.svelte";

  const documentLink = new LinkWithIcon("documents/dissertation.pdf", File);
</script>

<div class="defense-container">
  <h1>Visualization-Based Neural Network Introspection</h1>
  <div class="defense-content-container">
    <h2>PhD Thesis Defense</h2>
    <p><a href="https://a13x.io">Alex Bäuerle</a></p>
    <p>Ulm University</p>
    <p>Visual Computing Group</p>
  </div>
  <div class="defense-content-container">
    <h2>Date</h2>
    <p>Dec 21, 2022</p>
    <p>2pm CET</p>
    <p>Ulm University, O28 1002</p>
  </div>
  <div class="defense-content-container">
    <h2>Committee</h2>
    <p>Timo Ropinski, Ulm University</p>
    <p>Martin Wattenberg, Harvard University</p>
    <p>Heiko Neumann, Ulm University</p>
    <p>Birte Glimm, Ulm University</p>
    <p>Manfred Reichert, Ulm University</p>
  </div>
  <div class="defense-content-container">
    <h2>Abstract</h2>
    <p>
      Artificial intelligence (AI) and the use of neural networks have become
      omnipresent in recent years. Neural networks model complex mathematical
      functions that can be based on billions, or even trillions, of parameters.
      At the same time, neural networks make decisions that can deeply impact
      our lives. Therefore, understanding, testing, and interpreting these
      networks and their decisions is an integral part of model development and
      deployment. While there exist introspection techniques that support such
      understanding, testing, and interpretation, their adoption for diagnosing
      systems and explaining decisions can be difficult. Current problems with
      the adoption of introspection techniques are that they are not easily
      implemented in one's framework, do not work well in combination to create
      more meaningful analyses, and are difficult to interpret.
      <br />
      Through the integration of existing and novel introspection techniques into
      visualization interfaces, extensive analysis, actionable insights, and effective
      diagnosis are made widely available. These visualization interfaces can be
      incorporated into existing development workflows and are designed to support
      bespoke analysis needs, which makes the interpretation of findings easier.
      In this thesis, we present published visualization interfaces in three different
      areas, namely quality assurance, communication, and AI education. These publications
      include a visualization approach for correcting mislabeled training data, an
      interface for automatic network figure generation to communicate network architectures,
      and an educational environment for recurrent neural networks (RNNs). Finally,
      to unify the diverse landscape of AI visualization interfaces, we also present
      a framework for composing, reusing, exploring, and sharing such interactive
      machine learning (ML) interfaces.
    </p>
  </div>
  <div class="defense-content-container">
    <h2>Document</h2>
    <LinkItem linkWithIcon={documentLink} />
  </div>
  <!--<div class="defense-content-container">
    <h2>Slides</h2>
  </div>-->
</div>

<style lang="scss">
  .defense-container {
    display: flex;
    flex-direction: column;
  }
  .defense-content-container {
    padding-bottom: 3em;
  }
</style>
