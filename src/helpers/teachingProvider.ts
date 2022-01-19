import { Lecture } from "../types";

/**
 * Returns the Lectures within this App
 *
 * @return {[Lecture]} returns the lectures used on this page
 */
export function getLectures() {
  const thoughts = [
    new Lecture(
      "Lecture: Deep Learning for Graphics and Visualization",
      "Created and regularly held one chapter on visualization for AI at Ulm University. Talk about different explainability techniques and visualization concepts that help investigate and communicate about AI systems.",
      "2019 - 2022"
    ),
    new Lecture(
      "Projects: Visualization and Explainability for AI",
      "Supervise undergrad and grad students in regular projects. We go through the process of ideation, implementation, and writing about these projects.",
      "2017 - 2022"
    ),
    new Lecture(
      "Seminars: Visualization and Explainability for AI",
      "Held regular seminars for both undergrad and grad students.",
      "2017 - 2022"
    ),
  ];
  return thoughts;
}
