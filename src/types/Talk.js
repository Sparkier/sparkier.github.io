/**
 * Providing a structure for a talk
 */
export default class Talk {
  /**
   * Creates a talk
   *
   * @param {String} venue the venue of the talk
   * @param {String} title the title of the talk
   * @param {String} abstract the abstract of the talk
   * @param {Date} date the date of the talk
   * @param {[LinkWithIcon]} links links from the project to more information
   */
  constructor(venue, title, abstract, date, links) {
    this.venue = venue;
    this.title = title;
    this.abstract = abstract;
    this.date = date;
    this.links = links;
  }
}
