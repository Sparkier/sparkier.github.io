import Talk from '../types/Talk';
import LinkWithIcon from '../types/LinkWithIcon';

/**
 * Returns the talks within this App
 *
 * @return {[Talk]} returns the talks used on this page
 */
export function getTalks() {
  const thoughts = [
    new Talk('Bio+Med+Vis Spring School, remote',
        'Visualization for AI in Critical Domains',
        '',
        new Date('October 26, 2020'),
        [
          new LinkWithIcon('https://www.youtube.com/watch?v=clzGDnU2r2k', 'mdi-youtube'),
        ],
    ),
    new Talk('VISxAI 2020, Salt Lake City, UT, USA (remote)',
        'What Does BERT Dream Of?',
        '',
        new Date('October 26, 2020'),
        [
          new LinkWithIcon('https://www.youtube.com/watch?v=wEo9skwDfts&t=10665s', 'mdi-youtube'),
        ],
    ),
    new Talk('EuroVis 2020, Norrköpping, Sweden (remote)',
        'Classifier-Guided Visual Correction of Noisy Labels for Image ' +
        'Classification Tasks',
        '',
        new Date('May 27, 2020'),
        [
          new LinkWithIcon('https://youtu.be/FK1qoDCvdws?t=2412', 'mdi-youtube'),
        ],
    ),
    new Talk('MedVis Workshop 2018, Ulm, Germany',
        'Automatic Fibril-Crossover Detection in EM-Images using ' +
        'Deep Convolutional Networks',
        '',
        new Date('April 12, 2018'),
        [],
    ),
  ];
  return thoughts;
}
