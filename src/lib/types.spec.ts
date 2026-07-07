import { describe, it, expect } from 'vitest';
import { ResearchProject, LinkWithIcon } from './types';

describe('ResearchProject', () => {
	it('should correctly initialize with all provided properties', () => {
		const title = 'Test Title';
		const authors = ['Author 1', 'Author 2'];
		const abstract = 'Test Abstract';
		const year = '2023';
		const venue = 'Test Venue';
		const imageSRC = '/test.png';
		const links = [new LinkWithIcon('http://test.link', 'icon-test')];

		const project = new ResearchProject(title, authors, abstract, year, venue, imageSRC, links);

		expect(project.title).toBe(title);
		expect(project.authors).toEqual(authors);
		expect(project.abstract).toBe(abstract);
		expect(project.year).toBe(year);
		expect(project.venue).toBe(venue);
		expect(project.imageSrc).toBe(imageSRC);
		expect(project.links).toEqual(links);
	});

	it('should default links to an empty array if omitted', () => {
		const title = 'Test Title';
		const authors = ['Author 1', 'Author 2'];
		const abstract = 'Test Abstract';
		const year = '2023';
		const venue = 'Test Venue';
		const imageSRC = '/test.png';

		const project = new ResearchProject(title, authors, abstract, year, venue, imageSRC);

		expect(project.title).toBe(title);
		expect(project.authors).toEqual(authors);
		expect(project.abstract).toBe(abstract);
		expect(project.year).toBe(year);
		expect(project.venue).toBe(venue);
		expect(project.imageSrc).toBe(imageSRC);
		expect(project.links).toEqual([]);
	});
});
