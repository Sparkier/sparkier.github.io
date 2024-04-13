import { Review } from "../types";

/**
 * Returns the service items within this App
 *
 * @return {[Review]} returns the reviews used on this page
 */
export function getReviews() {
  return [
    new Review("VGTC - Industrial Relations Chair", "2023 - Present"),
    new Review("VISxAI - Program Committee", "2022 - Present"),
    new Review("TVCG", "2020 - 2023"),
    new Review("VIS", "2021, 2023"),
    new Review("CHI", "2021, 2023"),
    new Review("UIST", "2022"),
    new Review("CG&A", "2022"),
    new Review("EuroVIS", "2022"),
    new Review("IMWUT", "2022"),
    new Review("VCBM", "2022"),
    new Review("MICCAI", "2022, 2023"),
  ];
}
