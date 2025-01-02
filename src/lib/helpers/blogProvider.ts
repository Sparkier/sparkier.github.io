import { BlogEntry } from '$lib/types';

export function getBlogEntries() {
	return [
		new BlogEntry(
			'HCI & AI in 2025',
			new Date('January 1, 2025'),
			'hcixai-2025.md',
			'Aery brief recap of interesting HCI for AI in 2024 and my opinionated thoughts and predctions for the role of HCI for AI in 2025.'
		)
	];
}
