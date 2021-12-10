import { ResearchProject } from "../types";
import { FunProject } from "../types";
import { LinkWithIcon } from "../types";

import File from "svelte-material-icons/File.svelte";
import GitHub from "svelte-material-icons/GithubCircle.svelte";
// import YouTube from "svelte-material-icons/YouTube.svelte";
import Web from "svelte-material-icons/Web.svelte";
import Apple from "svelte-material-icons/Apple.svelte";
import Android from "svelte-material-icons/Android.svelte";

/**
 * Returns the ResearchProjects within this App
 *
 * @return {[ResearchProject]} returns the research projects used on this page
 */
export function getResearchProjects(): ResearchProject[] {
  const projects = [
    new ResearchProject(
      "exploRNN: Understanding Recurrent Neural Networks through Visual " +
        "Exploration",
      ["Alex Bäuerle", "Raphael Störk", "Timo Ropinski"],
      "Visualization has proven to be of great help with learning about neural network processes. While most current educational visualizations are targeted towards one specific architecture or use case recurrent neural networks (RNNs), which are capable of processing sequential data, are not covered yet, despite the fact that tasks on sequential data, such as text and function analysis, are at the forefront of deep learning research. Therefore, we propose exploRNN, the first interactively explorable, educational visualization for RNNs.",
      "2020",
      "ArXiv",
      "images/exploRNN.png",
      [
        new LinkWithIcon("https://arxiv.org/pdf/2012.06326.pdf", File),
        new LinkWithIcon(
          "https://mi-pages.informatik.uni-ulm.de/explornn/",
          Web
        ),
        new LinkWithIcon("https://github.com/Sparkier/exploRNN", GitHub),
      ]
    ),
    new ResearchProject(
      "Net2vis: Transforming Deep Convolutional Networks into " +
        "Publication-Ready Visualizations",
      ["Alex Bäuerle", "Christian van Onzenoodt", "Timo Ropinski"],
      "To convey neural network architectures in publications, appropriate " +
        "visualizations are of great importance. This project is aimed at " +
        " automatically generating such visualizations from code. Thus, " +
        "we are able to employ a common visual grammar, reduce the time " +
        "investment towards these visualizations significantly, and reduce " +
        "errors in these visualizations.",
      "2021",
      "IEEE TVCG",
      "images/net2vis.png",
      [
        new LinkWithIcon(
          "https://viscom.publications.uni-ulm.de/api/uploads/4/09350177.pdf",
          File
        ),
        new LinkWithIcon("http://viscom.net2vis.uni-ulm.de/", Web),
        new LinkWithIcon("https://github.com/viscom-ulm/Net2Vis", GitHub),
      ]
    ),
    new ResearchProject(
      "Measuring Model Biases in the Absence of Ground Truth",
      [
        "Osman Aka",
        "Ken Burke",
        "Alex Bäuerle",
        "Christina Greer",
        "Margaret Mitchell",
      ],
      "Model fairness is getting more and more important. At the same " +
        "time, datasets are getting larger and ground truth more sparse. In " +
        "this paper, we evaluate bias detection algorithms that can be used " +
        "without ground truth at hand.",
      "2021",
      "AIES",
      "images/nPMI.png",
      [new LinkWithIcon("https://arxiv.org/pdf/2103.03417.pdf", File)]
    ),
    new ResearchProject(
      "What does BERT dream of?",
      ["Alex Bäuerle", "James Wexler"],
      "In this internship project with the Google PAIR team, we " +
        "investigated how Feature " +
        "Visualization could be transferred to the text domain and conducted " +
        "several experiments in this line of research. While Feature " +
        "Visualization did not work out as well as we hoped, this provides " +
        "new insight into the realm of deep dreaming with text.",
      "2020",
      "VISxAI",
      "images/bert.png",
      [
        new LinkWithIcon(
          "https://pair-code.github.io/interpretability/text-dream/explainable/",
          Web
        ),
        new LinkWithIcon(
          "https://github.com/PAIR-code/interpretability/tree/master/text-dream",
          GitHub
        ),
        // new LinkWithIcon(
        //   "https://www.youtube.com/watch?v=wEo9skwDfts&t=10665s",
        //   YouTube
        // ),
      ]
    ),
    new ResearchProject(
      "Classifier-Guided Visual Correction of Noisy Labels for Image " +
        "Classification Tasks",
      ["Alex Bäuerle", "Heiko Neumann", "Timo Ropinski"],
      "Training data plays an essential role in modern applications of " +
        "machine learning. In this project, we provide means to visually " +
        "guide users towards potential errors in such datasets. Our guidance," +
        " which is built on common labeling error types we propose, can be " +
        "plugged into any classification pipeline.",
      "2020",
      "Computer Graphics Forum & EuroVis",
      "images/cgvc.png",
      [
        new LinkWithIcon(
          "https://www.uni-ulm.de/fileadmin/website_uni_ulm/iui.inst.100/institut/Papers/viscom/2020/baeuerle_classifier_guided_correction.pdf",
          File
        ),
        new LinkWithIcon(
          "https://github.com/Sparkier/Classifier-Guided-Correction",
          GitHub
        ),
        // new LinkWithIcon("https://youtu.be/FK1qoDCvdws?t=2412", YouTube),
      ]
    ),
    new ResearchProject(
      "Automatic identification of crossovers in cryo‐EM images of murine " +
        "amyloid protein A fibrils with machine learning",
      [
        "Mattthias Weber",
        "Alex Bäuerle",
        "Matthias Schmidt",
        "Matthias Neumann",
        "Marcus Fähndrich",
        "Timo Ropinski",
        "Volker Schmidt",
      ],
      "Detecting crossovers in cryo-electron microscopy images of " +
        "protein fibrils is an important step towards determining " +
        "the morphological composition of a sample. We propose a combination " +
        "of classical, stochastic approaches, and machine learning techniques" +
        " towards solving this problem in a novel, much easier way.",
      "2020",
      "Journal of Microscopy",
      "images/fibrils.png",
      [
        new LinkWithIcon(
          "https://onlinelibrary.wiley.com/doi/pdf/10.1111/jmi.12858",
          File
        ),
      ]
    ),
    new ResearchProject(
      "Convolutional neural network (CNN) applied to respiratory motion " +
        "detection in fluoroscopic frames",
      [
        "Christoph Baldauf",
        "Alex Bäuerle",
        "Timo Ropinski",
        "Volker Rasche",
        "Ina Vernikouskaya",
      ],
      "To support surgeons during surgeries conducted under " +
        "X-ray-fluoroscopy guidance, real" +
        "time fluoroscopy is augmented with organ shape models. Following " +
        "initial registration, respiratory motion is a major cause of " +
        "introducing mismatch to the superposition. This work evaluates " +
        "convolutional neural networks (CNN) as a novel approach to address " +
        "this problem.",
      "2019",
      "International Journal of Computer Assisted Radiology and Surgery",
      "images/breath.png",
      [
        new LinkWithIcon(
          "https://www.semanticscholar.org/paper/Convolutional-neural-network-(CNN)-applied-to-in-Baldauf-B%C3%A4uerle/8b5b521bc8489bf691bff08c432d8f865182d7c1",
          File
        ),
      ]
    ),
  ];
  projects.sort((a, b) => parseInt(b.year) - parseInt(a.year));
  return projects;
}

/**
 * Returns the FunProjects within this App
 *
 * @return {[FunProject]} returns the fun projects used on this page
 */
export function getFunProjects(): FunProject[] {
  const projects = [
    new FunProject(
      "Dotfiles",
      "These are the dotfiles I use to configure my machines. This " +
        "includes both my macs and my linux workstations. Feel free to " +
        "base your configurations on these!",
      "images/dotfiles.png",
      [new LinkWithIcon("https://github.com/Sparkier/Dotfiles", GitHub)]
    ),
    new FunProject(
      "mySnow",
      "An App I developed with my colleagues of the Swabian Skiing " +
        "Association (SSV). It teaches you concepts about skiing and helps " +
        "you improve with videos and handcrafted guidance. Among other stuff" +
        ", I am mainly responsible for the iOS version of the app.",
      "images/mySnow.png",
      [
        new LinkWithIcon(
          "https://apps.apple.com/de/app/mysnow/id1448897499",
          Apple
        ),
        new LinkWithIcon(
          "https://play.google.com/store/apps/details?id=source.ssv.mysnow&hl=de",
          Android
        ),
      ]
    ),
    new FunProject(
      "Contagion",
      "A fun project for the #WirVsVirus hackathon during the coronavirus " +
        "pandemic. We implemented a text adventure where users have to " +
        "manage the spreading of the virus.",
      "images/contagion.png",
      [new LinkWithIcon("https://github.com/Sparkier/Contagion", GitHub)]
    ),
    new FunProject(
      "midosa",
      "Microdonate and Safe: Winner project for the Audi App Challenge " +
        "where we developed an " +
        "application for both, the car cockpit and android mobile devices. " +
        "The app motivates users to drive with less fuel consumption and then" +
        " donate the savings to charity, thus gamifying this experience.",
      "images/midosa.png",
      [
        new LinkWithIcon(
          "https://www.uni-ulm.de/home/uni-aktuell/article/auto-fahren-umwelt-schonen-gutes-tun-ulmer-studenten-gewinnen-erste-audi-app-challenge/",
          Web
        ),
      ]
    ),
  ];
  return projects;
}
