import { Education, LinkWithIcon } from '../types';

import FilePdfBox from 'svelte-material-icons/FilePdfBox.svelte';
import Github from 'svelte-material-icons/Github.svelte';

/**
 * Returns the education elements within this App
 *
 * @return {[Education]} returns the education elements used on this page
 */
export function getEducationElements() {
	return [
		new Education(
			'Ph. D.',
			'Computer Science',
			'Ulm University',
			'Jan 2018 - Dec 2022',
			'Supervised by Timo Ropinski, funded by the Carl-Zeiss-Scholarship',
			[
				{
					icon: new LinkWithIcon('documents/dissertation.pdf', FilePdfBox),
					description: 'Thesis'
				}
			]
		),
		new Education(
			'M. Sc.',
			'Media Informatics',
			'Ulm University',
			'Oct 2015 - Jun 2017',
			'Grade: 1.1, supervised by Timo Ropinski',
			[
				{
					icon: new LinkWithIcon(
						'https://gitlab.com/Sparkier/MasterThesis/-/raw/master/Dokumente/Thesis/arbeit.pdf',
						FilePdfBox
					),
					description: 'Thesis'
				},
				{
					icon: new LinkWithIcon('https://gitlab.com/Sparkier/inviwo', Github),
					description: 'Project'
				}
			]
		),
		new Education(
			'B. Sc.',
			'Media Informatics',
			'Ulm University',
			'Oct 2012 - Sep 2015',
			'Grade: 1.2, supervised by Marc Schickler and Manfred Reichert',
			[
				{
					icon: new LinkWithIcon(
						'http://dbis.eprints.uni-ulm.de/1304/1/BA_Baeu_2015.pdf',
						FilePdfBox
					),
					description: 'Thesis'
				},
				{
					icon: new LinkWithIcon('https://github.com/Sparkier/skife', Github),
					description: 'Project'
				}
			]
		)
	];
}
