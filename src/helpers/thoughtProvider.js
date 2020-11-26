import Thought from '../types/Thought';

/**
 * Returns the Thoughts within this App
 *
 * @return {[Thought]} returns the thoughts used on this page
 */
export function getThoughts() {
  const thoughts = [
    new Thought('Modernizing Lectures', 'We still consume lectures like we ' +
    'always did. Everyone comes to the classroom, and one person is standing ' +
    'in front to educate everyone. In this post, I elaborate on how I think ' +
    'technology could help us improve this old-fashioned implementation of ' +
    'lectures.',
    new Date('November 17, 2020'), 'testtest<br>test'),
  ];
  return thoughts;
}
