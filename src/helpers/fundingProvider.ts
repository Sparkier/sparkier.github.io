import { Funding } from "../types";

export function getFunding(): Funding[] {
  const funding = [
    new Funding(
      "Visualization Techniques to Support Training and Analysis of Neural Networks",
      "Carl-Zeiss Scholarship for PhD Students",
      "Jan 2018 - Dec 2021"
    ),
    new Funding(
      "Supporting my B. Sc.",
      "German Stipend for Excellent Students",
      "Oct 2012 - Sep 2015"
    ),
  ];
  return funding;
}
