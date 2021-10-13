/**
 * Providing a structure for lectures
 */
export default class Lecture {
  /**
   * Creates a lecture
   *
   * @param {String} title the title of the lecture
   * @param {String} abstract the abstract of the lecture
   * @param {String} timeframe the date of the lecture
   */
  constructor(title, abstract, timeframe) {
    this.title = title;
    this.abstract = abstract;
    this.timeframe = timeframe;
  }
}
