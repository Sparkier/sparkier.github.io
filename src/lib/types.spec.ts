import { describe, it, expect } from 'vitest';
import { Project, Review, FunProject, ResearchProject, LinkWithIcon } from './types';

describe('Review', () => {
	it('should correctly initialize venue and years properties', () => {
		const venue = 'Conference on Testing';
		const years = '2020-2023';
		const review = new Review(venue, years);

		expect(review.venue).toBe(venue);
		expect(review.years).toBe(years);
	});
});

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

	it('should default links to an empty array when omitted', () => {
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
