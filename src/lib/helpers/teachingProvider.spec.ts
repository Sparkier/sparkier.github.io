import { describe, it, expect } from 'vitest';
import { lectures } from './teachingProvider';
import { Lecture } from '$lib/types';

describe('teachingProvider', () => {
	describe('lectures', () => {
		it('should be a non-empty array', () => {
			expect(Array.isArray(lectures)).toBe(true);
			expect(lectures.length).toBeGreaterThan(0);
		});

		it('should contain valid Lecture instances', () => {
			for (const lecture of lectures) {
				expect(lecture).toBeInstanceOf(Lecture);

				// Verify fields
				expect(typeof lecture.title).toBe('string');
				expect(lecture.title.length).toBeGreaterThan(0);

				expect(typeof lecture.abstract).toBe('string');
				expect(lecture.abstract.length).toBeGreaterThan(0);

				expect(typeof lecture.timeframe).toBe('string');
				expect(lecture.timeframe.length).toBeGreaterThan(0);
			}
		});

		it('should contain the expected number of initial entries', () => {
			// At the moment there are 3 entries, let's verify that.
			expect(lectures.length).toBeGreaterThanOrEqual(3);
		});
	});
});
