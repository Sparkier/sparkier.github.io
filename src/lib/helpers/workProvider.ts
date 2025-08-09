import { Work } from '../types';

import Sigma from '$lib/components/icons/Sigma.svelte';
import Apple from 'svelte-material-icons/Apple.svelte';
import Google from 'svelte-material-icons/Google.svelte';
import Molecule from 'svelte-material-icons/Molecule.svelte';
import School from 'svelte-material-icons/School.svelte';

/**
 * Returns the work experiences within this App
 *
 * @return {[Work]} returns the work experiences used on this page
 */
export function getWork(): Work[] {
	return [
		new Work(
			'Research Scientist',
			'What is the right interface between humans and AI?',
			'May 2025 - Present',
			Google
		),
		new Work(
			'Founding Member of Technical Staff',
			'Building an awesome product for Humans + AI + Biology to solve drug toxicity.',
			'May 2024 - May 2025',
			Molecule
		),
		new Work(
			'Postdoctoral Researcher, Carnegie Mellon University',
			'Research and development of tools in the areas of AI evaluation and prompt engineering.',
			'Oct 2023 - May 2024',
			School
		),
		new Work(
			'Research Scientist, Sigma Computing',
			'Bringing data and analysts closer together with the help of visualization and AI.',
			'Oct 2022 - Jun 2023',
			Sigma
		),
		new Work(
			'Research Intern, Apple Machine Intelligence',
			'Designed and developed a framework for component-based ML interfaces which can be composed in different environments such as computational notebooks and web dashboards.',
			'Mar 2021 - Sep 2021',
			Apple
		),
		new Work(
			'Research Intern, Google TensorBoard',
			'Designed and implemented a visualization approach for a novel bias detection algorithm. This visualization is designed to support large label spaces and multilabel classification problems.',
			'Jun 2020 - Sep 2020',
			Google
		),
		new Work(
			'Research Intern, Google PAIR',
			'Invented and experimented with a technique similar to Feature Visualization, but for language models.',
			'May 2019 - Aug 2019',
			Google
		)
	];
}
