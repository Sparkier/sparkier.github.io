import { describe, it, expect } from 'vitest';
import { blogEntries } from './blogProvider';
import { BlogEntry } from '$lib/types';

describe('blogProvider', () => {
	describe('blogEntries', () => {
		it('should be a non-empty array', () => {
			expect(Array.isArray(blogEntries)).toBe(true);
			expect(blogEntries.length).toBeGreaterThan(0);
		});

		it('should contain valid BlogEntry instances', () => {
			for (const entry of blogEntries) {
				expect(entry).toBeInstanceOf(BlogEntry);

				// Verify fields
				expect(typeof entry.title).toBe('string');
				expect(entry.title.length).toBeGreaterThan(0);

				expect(entry.date).toBeInstanceOf(Date);
				expect(!isNaN(entry.date.getTime())).toBe(true); // check valid date

				expect(typeof entry.content_md).toBe('string');
				expect(entry.content_md.length).toBeGreaterThan(0);

				expect(typeof entry.abstract).toBe('string');
				expect(entry.abstract.length).toBeGreaterThan(0);
			}
		});

		it('should contain the expected number of initial entries', () => {
			// At the moment there are 3 entries, let's verify that.
			expect(blogEntries.length).toBeGreaterThanOrEqual(3);
		});
	});
});
