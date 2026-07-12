import { describe, it, expect } from 'vitest';
import { talks } from './talkProvider';
import { Talk } from '../types';

describe('talkProvider', () => {
	it('should return a non-empty array of talks', () => {
		expect(Array.isArray(talks)).toBe(true);
		expect(talks.length).toBeGreaterThan(0);
	});

	it('should contain only valid Talk instances', () => {
		for (const talk of talks) {
			expect(talk).toBeInstanceOf(Talk);
			expect(talk.venue).toBeDefined();
			expect(talk.title).toBeDefined();
			expect(talk.abstract).toBeDefined();
			expect(talk.date).toBeInstanceOf(Date);
			expect(Array.isArray(talk.links)).toBe(true);
		}
	});

	it('should be sorted in descending order by date', () => {
		for (let i = 0; i < talks.length - 1; i++) {
			const currentDate = talks[i].date.getTime();
			const nextDate = talks[i + 1].date.getTime();
			expect(currentDate).toBeGreaterThanOrEqual(nextDate);
		}
	});
});
