import { Work } from "../types";

import School from "svelte-material-icons/School.svelte";
import Apple from "svelte-material-icons/Apple.svelte";
import Google from "svelte-material-icons/Google.svelte";

/**
 * Returns the work experiences within this App
 *
 * @return {[Work]} returns the work experiences used on this page
 */
export function getWork(): Work[] {
  const thoughts = [
    new Work(
      "Research Intern, Apple Machine Intelligence",
      "",
      "Mar 2021 - Sep 2021",
      Apple
    ),
    new Work(
      "Research Intern, Google TensorBoard",
      "In this project, I worked on a visualization for a novel bias " +
        "detection algorithm. " +
        "This visualization is designed to support large label spaces and " +
        "multilabel classification problems.",
      "Jun 2020 - Sep 2020",
      Google
    ),
    new Work(
      "Research Intern, Google PAIR",
      "During this internship, I worked on a technique similar to " +
        "Feature Visualization, but for language models. " +
        "We were trying to transfer the ideas of this technique to the " +
        "BERT model.",
      "May 2019 - Aug 2019",
      Google
    ),
    new Work(
      "Teaching Assistant, Ulm University",
      "During my Ph. D., I supervised student theses and projects, and co-taught lectures and seminars.",
      "Jan 2018 - today",
      School
    ),
  ];
  return thoughts;
}
