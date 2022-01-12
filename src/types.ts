import type { SvelteComponent } from "svelte";

/**
 * Providing a structure for projects
 */
export class Project {
  title: string;
  abstract: string;
  imageSrc: string;
  links: LinkWithIcon[];
  /**
   * Creates a project
   *
   * @param {String} title the title of the project/paper
   * @param {String} abstract the abstract of the project/paper
   * @param {String} imageSrc the image source for the project
   * @param {[LinkWithIcon]} links links from the project to more information
   */
  constructor(
    title: string,
    abstract: string,
    imageSrc: string,
    links: LinkWithIcon[] = []
  ) {
    this.title = title;
    this.abstract = abstract;
    this.imageSrc = imageSrc;
    this.links = links;
  }
}

/**
 * Providing a structure for research projects
 */
export class ResearchProject extends Project {
  authors: string[];
  year: string;
  venue: string;

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
  constructor(
    title: string,
    authors: string[],
    abstract: string,
    year: string,
    venue: string,
    imageSRC: string,
    links: LinkWithIcon[] = []
  ) {
    super(title, abstract, imageSRC, links);
    this.authors = authors;
    this.year = year;
    this.venue = venue;
  }
}

/**
 * Providing a structure for fun projects
 */
export class FunProject extends Project {
  /**
   * Creates a fun project
   *
   * @param {String} title the title of the project/paper
   * @param {String} abstract the abstract of the project/paper
   * @param {String} imageSRC the image source for the project
   * @param {[LinkWithIcon]} links links from the project to more information
   */
  constructor(
    title: string,
    abstract: string,
    imageSRC: string,
    links: LinkWithIcon[] = []
  ) {
    super(title, abstract, imageSRC, links);
  }
}

/**
 * Providing a structure for lectures
 */
export class Lecture {
  title: string;
  abstract: string;
  timeframe: string;

  /**
   * Creates a lecture
   *
   * @param {String} title the title of the lecture
   * @param {String} abstract the abstract of the lecture
   * @param {String} timeframe the date of the lecture
   */
  constructor(title: string, abstract: string, timeframe: string) {
    this.title = title;
    this.abstract = abstract;
    this.timeframe = timeframe;
  }
}

/**
 * Providing a structure for mentorship
 */
export class Mentorship {
  name: string;
  position: string;
  institution: string;
  topic: string;
  timeframe: string;

  /**
   * Creates a mentorship
   *
   * @param {String} name the name of the mentee
   * @param {String} position what the mentee was doing
   * @param {String} institution where the mentorship happened
   * @param {String} topic what the mentorship was about
   * @param {String} timeframe the date of the mentorship
   */
  constructor(
    name: string,
    position: string,
    institution: string,
    topic: string,
    timeframe: string
  ) {
    this.name = name;
    this.position = position;
    this.institution = institution;
    this.topic = topic;
    this.timeframe = timeframe;
  }
}

/**
 * Providing a structure for funding
 */
export class Funding {
  name: string;
  type: string;
  timeframe: string;

  /**
   * Creates a funding
   *
   * @param {String} name the name of the mentee
   * @param {String} type what type of funding was received
   * @param {String} timeframe the date of the mentorship
   */
  constructor(name: string, type: string, timeframe: string) {
    this.name = name;
    this.type = type;
    this.timeframe = timeframe;
  }
}

/**
 * Providing a structure for links with icons
 */
export class LinkWithIcon {
  link: string;
  icon: typeof SvelteComponent;

  /**
   * Creates a link with icon
   *
   * @param {String} link the link to the resource
   * @param {typeof SvelteComponent} icon the icon used to display
   */
  constructor(link: string, icon: typeof SvelteComponent) {
    this.link = link;
    this.icon = icon;
  }
}

/**
 * Providing a structure for a talk
 */
export class Talk {
  venue: string;
  title: string;
  abstract: string;
  date: Date;
  links: LinkWithIcon[];

  /**
   * Creates a talk
   *
   * @param {String} venue the venue of the talk
   * @param {String} title the title of the talk
   * @param {String} abstract the abstract of the talk
   * @param {Date} date the date of the talk
   * @param {[LinkWithIcon]} links links from the project to more information
   */
  constructor(
    venue: string,
    title: string,
    abstract: string,
    date: Date,
    links: LinkWithIcon[]
  ) {
    this.venue = venue;
    this.title = title;
    this.abstract = abstract;
    this.date = date;
    this.links = links;
  }
}

/**
 * Providing a structure for working experiences
 */
export class Work {
  title: string;
  abstract: string;
  timeframe: string;
  icon: typeof SvelteComponent;
  /**
   * Creates a lecture
   *
   * @param {String} title the title of the working experience
   * @param {String} abstract the abstract of the working experience
   * @param {String} timeframe the date of the working experience
   * @param {typeof SvelteComponent} icon the icon of the working experience
   */
  constructor(
    title: string,
    abstract: string,
    timeframe: string,
    icon: typeof SvelteComponent
  ) {
    this.title = title;
    this.abstract = abstract;
    this.timeframe = timeframe;
    this.icon = icon;
  }
}

/**
 * Providing a structure for education elements
 */
export class Education {
  type: string;
  subject: string;
  institute: string;
  timeframe: string;
  details: string;
  iconElements: { icon: LinkWithIcon; description: string }[];

  /**
   * Creates a education element
   *
   * @param {String} type the type of the education experience (BSC, MSC, PHD, ...)
   * @param {String} subject the subject on which the education was conducted
   * @param {String} institute the institute at which the education element took place
   * @param {String} timeframe when the education happened
   * @param {String} details arbitrary details about the ecucation
   * @param {{icon: LinkWithIcon, description: string}[]} iconElements the iconic links that this education element contains
   */
  constructor(
    type: string,
    subject: string,
    institute: string,
    timeframe: string,
    details: string,
    iconElements: { icon: LinkWithIcon; description: string }[] = []
  ) {
    this.type = type;
    this.subject = subject;
    this.institute = institute;
    this.timeframe = timeframe;
    this.details = details;
    this.iconElements = iconElements;
  }
}
