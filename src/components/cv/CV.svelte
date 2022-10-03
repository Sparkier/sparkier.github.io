<script lang="ts">
  import Contact from "./Contact.svelte";
  import Education from "./Education.svelte";
  import Publications from "./Publications.svelte";
  import Talks from "./Talks.svelte";
  import Teaching from "./Teaching.svelte";
  import Work from "./Work.svelte";
  import Mentoring from "./Mentoring.svelte";
  import Funding from "./Funding.svelte";
  import Service from "../research/Service.svelte";

  import html2pdf from "html2pdf.js";

  let container: HTMLDivElement;
  let showLinks = true;

  function exportCVPDF() {
    showLinks = false;
    var opt = {
      margin: 10,
      filename: "cv_alex_baeuerle.pdf",
      image: { type: "jpeg", quality: 1 },
      html2canvas: {
        dpi: 192,
        scale: 4,
        letterRendering: true,
        useCORS: true,
      },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
    };
    html2pdf(container, opt).then(() => (showLinks = true));
  }
</script>

<div class="cv-controls-container">
  <button on:click={exportCVPDF}>Download PDF</button>
  <div class="cv-container" bind:this={container}>
    <div class="cv-content-container">
      <h1>Alex Bäuerle</h1>
      <h3>Research Scientist, Sigma Computing</h3>
      <p>
        My research is on visualization and explainability for neural networks.
        In this context, I am always interested in new methods to better
        understand artificial intelligence. I try to help developers with
        techniques and visualizations that foster communication and provide
        insights during development. For consumers of AI-powered applications, I
        work on visualizations that help them understand the decisions that
        these algorithms make.
      </p>
      <Contact />
    </div>
    <div class="cv-content-container"><Education {showLinks} /></div>
    <div class="cv-content-container"><Work /></div>
    <div class="cv-content-container"><Publications {showLinks} /></div>
    <div class="cv-content-container"><Talks {showLinks} /></div>
    <div class="cv-content-container"><Teaching /></div>
    <div class="cv-content-container"><Mentoring /></div>
    <div class="cv-content-container"><Funding /></div>
    <div class="cv-content-container"><Service /></div>
  </div>
</div>

<style lang="scss">
  .cv-controls-container {
    display: flex;
    flex-direction: column;
  }
  .cv-container {
    display: flex;
    flex-direction: column;
  }

  h1 {
    margin: 0;
  }

  .cv-content-container {
    padding-bottom: 3em;
  }

  button {
    background: none;
    border: none;
    cursor: pointer;
  }

  button:active {
    background: none;
    color: #2196f3;
  }
</style>
