import { Education } from "../types";
import { LinkWithIcon } from "../types";

import File from "svelte-material-icons/File.svelte";
import GitHub from "svelte-material-icons/GithubCircle.svelte";

/**
 * Returns the education elements within this App
 *
 * @return {[Education]} returns the education elements used on this page
 */
export function getEducationElements() {
  return [
    new Education(
      "Ph. D.",
      "Computer Science",
      "Ulm University",
      "Jan 2018 - expected 2022",
      "Supervised by Timo Ropinski, funded by the Carl-Zeiss-Scholarship",
    ),
    new Education(
      "M. Sc.",
      "Media Informatics",
      "Ulm University",
      "Oct 2015 - Jun 2017",
      "Grade: 1.1, supervised by Timo Ropinski",
      [
        {
          icon: new LinkWithIcon(
            "https://gitlab.com/Sparkier/MasterThesis/-/raw/master/Dokumente/Thesis/arbeit.pdf",
            File
          ),
          description: "Thesis",
        },
        {
          icon: new LinkWithIcon("https://gitlab.com/Sparkier/inviwo", GitHub),
          description: "Project",
        },
      ]
    ),
    new Education(
      "B. Sc.",
      "Media Informatics",
      "Ulm University",
      "Oct 2012 - Sep 2015",
      "Grade: 1.2, supervised by Marc Schickler and Manfred Reichert",
      [
        {
          icon: new LinkWithIcon(
            "http://dbis.eprints.uni-ulm.de/1304/1/BA_Baeu_2015.pdf",
            File
          ),
          description: "Thesis",
        },
        {
          icon: new LinkWithIcon("https://github.com/Sparkier/skife", GitHub),
          description: "Project",
        },
      ]
    ),
  ];
}
