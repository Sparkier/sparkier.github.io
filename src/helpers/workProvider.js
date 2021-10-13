import Work from '../types/Work';

/**
 * Returns the work experiences within this App
 *
 * @return {[Work]} returns the work experiences used on this page
 */
export function getWork() {
  const thoughts = [
    new Work('Research Intern, Apple Machine Intelligence',
        '',
        'March 2021 - September 2021',
        'mdi-apple'),
    new Work('Research Intern, Google TensorBoard',
        'In this project, I worked on a visualization for a novel bias ' +
        'detection algorithm. ' +
        'This visualization is designed to support large label spaces and ' +
        'multilabel classification problems.',
        'June 2020 - September 2020',
        'mdi-google'),
    new Work('Research Intern, Google PAIR',
        'During this internship, I worked on a technique similar to ' +
        'Feature Visualization, but for language models. ' +
        'We were trying to transfer the ideas of this technique to the ' +
        'BERT model.',
        'May 2019 - August 2019',
        'mdi-google'),
    new Work('PhD Student, Ulm University',
        'My PhD is about visualizing different aspects of neural networks. ' +
        'In this context, I am exploring explainability techniques, ' +
        'developer tools, education material, and similar ' +
        'visualization-based approaches to make AI more graspable.',
        'January 2018 - today',
        'mdi-school'),
  ];
  return thoughts;
}
