import { describe, it, expect } from 'vitest';
import { getResearchProjects, getFunProjects, slugify } from './projectsProvider';

describe('projectsProvider', () => {
	describe('getResearchProjects', () => {
		it('should return a non-empty array of research projects', () => {
			const projects = getResearchProjects();
			expect(projects.length).toBeGreaterThan(0);
		});

		it('should sort projects in descending order by year', () => {
			const projects = getResearchProjects();

			// Assert exact array length to make sure the expected number of projects is returned
			expect(projects.length).toBe(20);

			for (let i = 0; i < projects.length - 1; i++) {
				const currentYear = parseInt(projects[i].year);
				const nextYear = parseInt(projects[i + 1].year);

				expect(currentYear).toBeGreaterThanOrEqual(nextYear);
			}

			// Check first and last item to confirm they are indeed correctly sorted
			expect(projects[0].title).toBe(
				'Intentmaking and Sensemaking: Human Interaction with AI-Guided Mathematical Discovery'
			);
			expect(projects[projects.length - 1].title).toBe(
				'Convolutional neural network (CNN) applied to respiratory motion detection in fluoroscopic frames'
			);
		});
	});

	describe('getFunProjects', () => {
		it('should return a non-empty array of fun projects', () => {
			const projects = getFunProjects();
			expect(projects.length).toBeGreaterThan(0);
		});

		it('should return the correct result from cache when called multiple times', () => {
			const firstCall = getFunProjects();
			const secondCall = getFunProjects();
			expect(firstCall.length).toBeGreaterThan(0);
			expect(firstCall).toBe(secondCall);
		});
	});

	describe('slugify', () => {
		it('should convert simple text to a slug', () => {
			expect(slugify('Hello World')).toBe('hello-world');
		});

		it('should handle uppercase text by converting to lowercase', () => {
			expect(slugify('UPPERCASE TEXT')).toBe('uppercase-text');
		});

		it('should remove special characters', () => {
			expect(slugify('Text with @ special # characters!')).toBe('text-with-special-characters');
		});

		it('should handle multiple spaces and hyphens correctly', () => {
			expect(slugify('text   with---multiple spaces')).toBe('text-with-multiple-spaces');
		});

		it('should strip leading and trailing hyphens', () => {
			expect(slugify('---leading and trailing---')).toBe('leading-and-trailing');
		});

		it('should return the correct result from cache when called multiple times', () => {
			const input = 'Cache Test String';
			const firstCall = slugify(input);
			const secondCall = slugify(input);
			expect(firstCall).toBe('cache-test-string');
			expect(secondCall).toBe('cache-test-string');
			expect(firstCall).toBe(secondCall);
		});

		it('should not return the same cached value for different inputs', () => {
			const firstInput = 'First Unique String';
			const secondInput = 'Second Unique String';
			const firstCall = slugify(firstInput);
			const secondCall = slugify(secondInput);
			expect(firstCall).toBe('first-unique-string');
			expect(secondCall).toBe('second-unique-string');
			expect(firstCall).not.toBe(secondCall);
		});
	});
});
