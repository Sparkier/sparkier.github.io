import { Work } from "../types";

import Apple from "svelte-material-icons/Apple.svelte";
import Google from "svelte-material-icons/Google.svelte";
import School from "svelte-material-icons/School.svelte";
import Sigma from "../components/Sigma.svelte";

/**
 * Returns the work experiences within this App
 *
 * @return {[Work]} returns the work experiences used on this page
 */
export function getWork(): Work[] {
  const thoughts = [
    new Work(
      "Postdoctoral Researcher, Carnegie Mellon University",
      "Research and development of tools in the areas of AI evaluation and prompt engineering.",
      "Oct 2023 - Present",
      School
    ),
    new Work(
      "Research Scientist, Sigma Computing",
      "Bringing data and analysts closer together with the help of visualization and AI.",
      "Oct 2022 - Jun 2023",
      Sigma
    ),
    new Work(
      "Research Intern, Apple Machine Intelligence",
      "Designed and developed a framework for component-based ML interfaces which can be composed in different environments such as computational notebooks and web dashboards.",
      "Mar 2021 - Sep 2021",
      Apple
    ),
    new Work(
      "Research Intern, Google TensorBoard",
      "Designed and implemented a visualization approach for a novel bias detection algorithm. This visualization is designed to support large label spaces and multilabel classification problems.",
      "Jun 2020 - Sep 2020",
      Google
    ),
    new Work(
      "Research Intern, Google PAIR",
      "Invented and experimented with a technique similar to Feature Visualization, but for language models.",
      "May 2019 - Aug 2019",
      Google
    ),
  ];
  return thoughts;
}
