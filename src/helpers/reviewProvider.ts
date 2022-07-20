import { Review } from "../types";

/**
 * Returns the service items within this App
 *
 * @return {[Review]} returns the reviews used on this page
 */
export function getReviews() {
  return [
    new Review("VISxAI - Program Committee", "2022"),
    new Review("TVCG", "2020-2022"),
    new Review("VIS", "2021, 2022"),
    new Review("CHI", "2021"),
    new Review("UIST", "2022"),
    new Review("CG&A", "2022"),
    new Review("EuroVIS", "2022"),
    new Review("IMWUT", "2022"),
  ];
}
