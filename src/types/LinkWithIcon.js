/**
 * Providing a structure for links with icons
 */
export default class LinkWithIcon {
  /**
   * Creates a link with icon
   *
   * @param {String} link the link to the resource
   * @param {String} icon the icon used to display
   */
  constructor(link, icon) {
    this.link = link;
    this.icon = icon;
  }
}
