/**
 * Providing a structure for thoughts
 */
export default class Thought {
  /**
   * Creates a thought
   *
   * @param {String} title the title of the thought
   * @param {String} abstract the abstract of the thought
   * @param {Date} date the date of the publication
   * @param {String} content the content of the thought
   */
  constructor(title, abstract, date, content) {
    this.title = title;
    this.abstract = abstract;
    this.date = date;
    this.content = content;
  }
}
