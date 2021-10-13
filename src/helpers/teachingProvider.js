import Lecture from '../types/Lecture';

/**
 * Returns the Lectures within this App
 *
 * @return {[Lecture]} returns the lectures used on this page
 */
export function getLectures() {
  const thoughts = [
    new Lecture('Lecture: Deep Learning for Graphics and Visualization',
        'This is a lecture about how deep learning can be applied to ' +
        'computer graphics and how visualization can be used in the ' +
        'context of AI. ' +
        'I created and regularly held one chapter of this lecture at ' +
        'Ulm University. ' +
        'My chapter is on visualization for AI. ' +
        'I mainly talk about different explainability techniques and ' +
        'visualization concepts that help investigate and communicate about' +
        'AI systems.',
        '2019 - 2021'),
    new Lecture('Projects: Visualization and Explainability for AI',
        'In these regular projects, I supervise undergrad and grad students. ' +
        'We go through the process of ideation, implementation, and writing ' +
        'about these projects. ',
        '2017 - 2021'),
    new Lecture('Seminars: Visualization and Explainability for AI',
        'These seminars are for both undergrad and grad students and are ' +
        'held every semester.' +
        'Students select a paper which they read, summarize, and comment in ' +
        'a written form and as a presentation. ' +
        'During this process, my task is to provide assistance, guide ' +
        'students, and teach them about research practices.',
        '2017 - 2021'),
  ];
  return thoughts;
}
