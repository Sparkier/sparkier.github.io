import { describe, it, expect } from 'vitest';
import { FunProject, LinkWithIcon, Project } from './types';

describe('Project', () => {
	it('should correctly set fields when created with all parameters', () => {
		const title = 'Test Project';
		const abstract = 'Test abstract';
		const imageSrc = '/test-image.jpg';
		const links = [new LinkWithIcon('http://test.com', 'icon')];

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
