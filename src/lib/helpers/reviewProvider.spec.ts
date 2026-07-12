import { describe, it, expect } from 'vitest';
import { reviews } from './reviewProvider';
import { Review } from '../types';

describe('reviewProvider', () => {
	it('should export a non-empty array of reviews', () => {
		expect(Array.isArray(reviews)).toBe(true);
		expect(reviews.length).toBeGreaterThan(0);
	});

	it('should contain valid Review objects with venue and years', () => {
		reviews.forEach((review) => {
			expect(review).toBeInstanceOf(Review);
			expect(review.venue).toBeDefined();
			expect(typeof review.venue).toBe('string');
			expect(review.venue.length).toBeGreaterThan(0);

			expect(review.years).toBeDefined();
			expect(typeof review.years).toBe('string');
			expect(review.years.length).toBeGreaterThan(0);
		});
	});
});
