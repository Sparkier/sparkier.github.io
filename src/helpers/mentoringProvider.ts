import { Mentorship } from "../types";

export function getMentorshipActivities(): Mentorship[] {
  const mentorships = [
    new Mentorship(
      "Simon der Kinderen",
      "Master Thesis",
      "Ulm University",
      "Visualizing Missing Data in Parallel Coordinates",
      "Feb 2021 - Nov 2021"
    ),
    new Mentorship(
      "Shasa Fringston",
      "Bachelor Thesis",
      "Ulm University",
      "Generating Synthesizer Presets from Audio with a Neural Network",
      "Feb 2021 - Oct 2021"
    ),
    new Mentorship(
      "Marios Sirtmatsis",
      "Bachelor Thesis",
      "Ulm University",
      "Visualizing Deep Reinforcement Learning",
      "Feb 2021 - Aug 2021"
    ),
    new Mentorship(
      "Raphael Störk",
      "Bachelor Thesis",
      "Ulm University",
      "leaRNN: Eine Interaktive Visualisieurng rekurrenter neuronaler Netze",
      "May 2019 - Feb 2020"
    ),
    new Mentorship(
      "Christoph Baldauf",
      "Master Thesis",
      "Ulm University",
      "Convolutional Neural Networks (CNN) Applied to Respiratory Motion Detection in Fluoroscopic Frames",
      "Jun 2018 - Jan 2019"
    ),
  ];
  return mentorships;
}
