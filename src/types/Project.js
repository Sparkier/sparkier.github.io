/**
 * Providing a structure for projects
 */
export default class Project {
  /**
   * Creates a project
   *
   * @param {String} title the title of the project/paper
   * @param {String} abstract the abstract of the project/paper
   * @param {String} imageSRC the image source for the project
   * @param {[LinkWithIcon]} links links from the project to more information
   */
  constructor(title, abstract, imageSRC, links = []) {
    this.title = title;
    this.abstract = abstract;
    this.imageSRC = imageSRC;
    this.links = links;
  }
}
