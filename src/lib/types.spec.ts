import { describe, it, expect } from 'vitest';
import { Project } from './types';
import type { LinkWithIcon } from './types';

describe('Project', () => {
	it('should correctly set fields when created with all parameters', () => {
		const title = 'Test Project';
		const abstract = 'Test abstract';
		const imageSrc = '/test-image.jpg';
		const links: LinkWithIcon[] = [{ link: 'http://test.com', icon: 'icon' }];

		const project = new Project(title, abstract, imageSrc, links);

		expect(project.title).toBe(title);
		expect(project.abstract).toBe(abstract);
		expect(project.imageSrc).toBe(imageSrc);
		expect(project.links).toBe(links);
	});

	it('should correctly set fields and initialize links as an empty array when created with only required parameters', () => {
		const title = 'Test Project';
		const abstract = 'Test abstract';
		const imageSrc = '/test-image.jpg';

		const project = new Project(title, abstract, imageSrc);

		expect(project.title).toBe(title);
		expect(project.abstract).toBe(abstract);
		expect(project.imageSrc).toBe(imageSrc);
		expect(project.links).toEqual([]);
	});
});
