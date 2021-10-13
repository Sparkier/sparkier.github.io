/**
 * Providing a structure for working experiences
 */
export default class Work {
  /**
   * Creates a lecture
   *
   * @param {String} title the title of the working experience
   * @param {String} abstract the abstract of the working experience
   * @param {String} timeframe the date of the working experience
   * @param {String} icon the icon of the working experience
   */
  constructor(title, abstract, timeframe, icon) {
    this.title = title;
    this.abstract = abstract;
    this.timeframe = timeframe;
    this.icon = icon;
  }
}
