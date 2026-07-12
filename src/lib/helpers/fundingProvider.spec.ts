import { describe, it, expect } from 'vitest';
import { getFunding } from './fundingProvider';
import { Funding } from '../types';

describe('fundingProvider', () => {
	it('should return a non-empty array of funding items', () => {
		const funding = getFunding();
		expect(Array.isArray(funding)).toBe(true);
		expect(funding.length).toBeGreaterThan(0);
	});

	it('should contain valid Funding instances', () => {
		const funding = getFunding();
		funding.forEach((item) => {
			expect(item).toBeInstanceOf(Funding);
			expect(item.name).toBeDefined();
			expect(typeof item.name).toBe('string');
			expect(item.type).toBeDefined();
			expect(typeof item.type).toBe('string');
			expect(item.timeframe).toBeDefined();
			expect(typeof item.timeframe).toBe('string');
		});
	});
});
