import { describe, it, expect } from 'vitest';
import { work } from './workProvider';
import { Work } from '../types';

describe('workProvider', () => {
	it('should return a non-empty array of work experiences', () => {
		expect(Array.isArray(work)).toBe(true);
		expect(work.length).toBeGreaterThan(0);
	});

	it('should contain valid Work instances', () => {
		work.forEach((item) => {
			expect(item).toBeInstanceOf(Work);
			expect(item.title).toBeDefined();
			expect(typeof item.title).toBe('string');
			expect(item.abstract).toBeDefined();
			expect(typeof item.abstract).toBe('string');
			expect(item.timeframe).toBeDefined();
			expect(typeof item.timeframe).toBe('string');
		});
	});
});
