import { BlogEntry } from '$lib/types';

export function getBlogEntries() {
	return [
		new BlogEntry(
			'Microdoses of Happiness',
			new Date('February 22, 2025'),
			'hope.md',
			'A short post about the state of the world, how I microdose myself with happiness, and why I think you should, too.'
		),
		// new BlogEntry(
		// 	'visPositions',
		// 	new Date('February 9, 2025'),
		// 	'vispositions.md',
		// 	'A simple web-app for posting and finding jobs in the VIS and HCI community.'
		// ),
		new BlogEntry(
			'HCI & AI in 2025',
			new Date('January 1, 2025'),
			'hcixai-2025.md',
			'Aery brief recap of interesting HCI for AI in 2024 and my opinionated thoughts and predctions for the role of HCI for AI in 2025.'
		)
	];
}
