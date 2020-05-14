import Project from './Project';

/**
 * Providing a structure for fun projects
 */
export default class FunProject extends Project {
  /**
   * Creates a fun project
   *
   * @param {String} title the title of the project/paper
   * @param {String} abstract the abstract of the project/paper
   * @param {String} imageSRC the image source for the project
   * @param {[LinkWithIcon]} links links from the project to more information
   */
  constructor(title, abstract, imageSRC, links = []) {
    super(title, abstract, imageSRC, links);
  }
}
