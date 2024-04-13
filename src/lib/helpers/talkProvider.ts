import { LinkWithIcon, Talk } from "../types";

import Youtube from "svelte-material-icons/Youtube.svelte";

/**
 * Returns the talks within this App
 *
 * @return {[Talk]} returns the talks used on this page
 */
export function getTalks() {
  return [
    new Talk(
      "Multimodal Weekly",
      "Unlocking Model Performance Insights with Zeno",
      "",
      new Date("January 26, 2024"),
      [
        new LinkWithIcon(
          "https://youtu.be/z8GSTYqvTPQ?si=3TKBOX6BU08Ljx6g&t=231",
          Youtube
        ),
      ]
    ),
    new Talk(
      "EuroVis 2022, Rome, Italy",
      "Where did my Lines go? Visualizing Missing Data in Parallel Coordinates",
      "",
      new Date("June 15, 2022"),
      [new LinkWithIcon("https://youtu.be/iaGekFD_NNg?t=8", Youtube)]
    ),
    new Talk(
      "ACM CHI 2022, New Orleans, LA, USA",
      "Symphony: Composing Interactive Interfaces for Machine Learning",
      "",
      new Date("May 04, 2022"),
      [new LinkWithIcon("https://www.youtube.com/watch?v=0Q3wIh3AiPs", Youtube)]
    ),
    new Talk(
      "IEEE VIS 2021, New Orleans, LA, USA (remote)",
      "Net2Vis - A Visual Grammar for Automatically Generating Publication-Tailored CNN Architecture Visualizations",
      "",
      new Date("October 28, 2021"),
      [new LinkWithIcon("https://www.youtube.com/watch?v=LkMRI0Zk4dU", Youtube)]
    ),
    new Talk(
      "Bio+Med+Vis Spring School, Brno, Czech Republic (remote)",
      "Visualization for AI in Critical Domains",
      "",
      new Date("October 26, 2020"),
      [new LinkWithIcon("https://www.youtube.com/watch?v=clzGDnU2r2k", Youtube)]
    ),
    new Talk(
      "VISxAI 2020, Salt Lake City, UT, USA (remote)",
      "What Does BERT Dream Of?",
      "",
      new Date("October 26, 2020"),
      [
        new LinkWithIcon(
          "https://www.youtube.com/watch?v=wEo9skwDfts&t=10665s",
          Youtube
        ),
      ]
    ),
    new Talk(
      "EuroVis 2020, Norrköpping, Sweden (remote)",
      "Classifier-Guided Visual Correction of Noisy Labels for Image " +
        "Classification Tasks",
      "",
      new Date("May 27, 2020"),
      [new LinkWithIcon("https://youtu.be/FK1qoDCvdws?t=2412", Youtube)]
    ),
    new Talk(
      "MedVis Workshop 2018, Ulm, Germany",
      "Automatic Fibril-Crossover Detection in EM-Images using " +
        "Deep Convolutional Networks",
      "",
      new Date("April 12, 2018"),
      []
    ),
  ];
}
