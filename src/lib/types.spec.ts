import { describe, it, expect } from 'vitest';
import { Review } from './types';

describe('Review', () => {
	it('should correctly initialize venue and years properties', () => {
		const venue = 'Conference on Testing';
		const years = '2020-2023';
		const review = new Review(venue, years);

		expect(review.venue).toBe(venue);
		expect(review.years).toBe(years);
	});
});
