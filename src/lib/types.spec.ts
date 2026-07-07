import { describe, it, expect } from 'vitest';
import { FunProject, LinkWithIcon } from './types';

describe('FunProject', () => {
	it('should correctly initialize with all arguments provided', () => {
		const title = 'My Fun Project';
		const abstract = 'This is an abstract about the project.';
		const imageSRC = '/images/project.jpg';
		const link = new LinkWithIcon('https://example.com', 'icon-placeholder');
		const links = [link];

		const project = new FunProject(title, abstract, imageSRC, links);

		expect(project.title).toBe(title);
		expect(project.abstract).toBe(abstract);
		expect(project.imageSrc).toBe(imageSRC);
		expect(project.links).toEqual(links);
	});

	it('should correctly initialize when links are omitted (default to empty array)', () => {
		const title = 'My Fun Project';
		const abstract = 'This is an abstract about the project.';
		const imageSRC = '/images/project.jpg';

		const project = new FunProject(title, abstract, imageSRC);

		expect(project.title).toBe(title);
		expect(project.abstract).toBe(abstract);
		expect(project.imageSrc).toBe(imageSRC);
		expect(project.links).toEqual([]);
	});
});
