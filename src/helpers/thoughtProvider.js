import Thought from '../types/Thought';

/**
 * Returns the Thoughts within this App
 *
 * @return {[Thought]} returns the thoughts used on this page
 */
export function getThoughts() {
  const thoughts = [
    new Thought('Modernizing Lectures',
        'We still consume lectures like we ' +
    'always did. Everyone comes to the classroom, and one person is standing ' +
    'in front to educate everyone. In this post, I elaborate on how I think ' +
    'technology could help us improve this old-fashioned implementation of ' +
    'lectures.',
        new Date('November 28, 2020'),
        '<p>If you look up the term <i>lecture</i> on <a href="https://en.wikipedia.org/wiki/Lecture#History">Wikipedia</a>, you will find that even in medieval universities, instructors read to classes of students. While this form of reading might have been altered by projecting leture notes including images, videos, and other rich content, and the way in which lecturers are prepared and educated to do their job has significantly improved, the main setting has stayed the same. We are still mostly listening to a person talking in the front of a crowd. Reciting mostly insights that other have made and published.<br>While recently, platforms for online courses, such as <a href="https://www.coursera.org/">Coursera</a> and <a href="https://www.udemy.com">Udemy</a>, as well as the ambivalence of YouTube tutorials have come to existence, our education systems have mostly ignored this trend. However, through such channels, we could learn from the absolute experts on their fields, getting explanations about novel approaches from their inventors, and take advantage of highly polished courses from masters in education communication. At the same time, our schools and universities each have their own lecturers, who have to prepare their own course material, all putting a dent in the time they can spend helping students directly and personally.<br>That being said, I am not arguing for reducing the number of educators in these systems, nor am I debating their justificatoin in the first place. If anything, I think ressources spend on education are one of the most well-spent. However, what I am saying is that the current approach to education is lacking behind the state of our technology. The time of lecturers could spend way more effectively not preparing and reciting their individual course material in every school and university, but to look at the pool of existing resources, compile a curriculum consisting of the best lectures ever held, and taking the time that was saved during the process to answer questions of their sudents, help them solving their problems and excercises, and being there for them as mentors, not as mere information channels. Professors at universities could take a similar approach, while at the same time saving capacity for novel and exciting research.<br>I, thus, argue that our system of education is outdated, and that we could be much more efficient, while making everyone happier and more productive in the process. This could be done by taking course material and lectures from a set of well produced resources and compiling these resources to every students individual needs and interests. Students could learn from the best inventors, innovators, and lecturers, while being supported in person by well trained pedagogues.<br>I have been wrestling with this thought throughout a global pandemic, so I am definetly not the only person thinking about this. Nonetheless, I think this does not get enough attention. If you have your own thoghts on this, or just want do discuss, I am happy to chat.</p>'),
  ];
  return thoughts;
}
