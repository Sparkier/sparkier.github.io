import Project from './Project';

/**
 * Providing a structure for research projects
 */
export default class ResearchProject extends Project {
  /**
   * Creates a research project
   *
   * @param {String} title the title of the project/paper
   * @param {String[]} authors the authors of the project/paper
   * @param {String} abstract the abstract of the project/paper
   * @param {int} year the year of the publication
   * @param {String} venue the venue of the publication
   * @param {String} imageSRC the image source for the project
   * @param {[LinkWithIcon]} links links from the project to more information
   */
  constructor(title, authors, abstract, year, venue, imageSRC, links = []) {
    super(title, abstract, imageSRC, links);
    this.authors = authors;
    this.year = year;
    this.venue = venue;
  }
}
