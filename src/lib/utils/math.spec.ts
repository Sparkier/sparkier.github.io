import { describe, it, expect } from 'vitest';
import { organicNoise } from './math';

describe('organicNoise', () => {
	it('should return 0 when t and seed are 0', () => {
		expect(organicNoise(0, 0)).toBe(0);
	});

	it('should be bounded between -1 and 1', () => {
		// Since the function sums sines with amplitudes 0.4 + 0.3 + 0.2 + 0.1 = 1.0,
		// the output must always be between -1 and 1.
		for (let i = 0; i < 100; i++) {
			const t = Math.random() * 100;
			const seed = Math.random() * 100;
			const result = organicNoise(t, seed);
			expect(result).toBeGreaterThanOrEqual(-1);
			expect(result).toBeLessThanOrEqual(1);
		}
	});

	it('should be deterministic', () => {
		const t = 42;
		const seed = 1337;
		const result1 = organicNoise(t, seed);
		const result2 = organicNoise(t, seed);
		expect(result1).toBe(result2);
	});

	it('should produce different values for different seeds and t values', () => {
		const result1 = organicNoise(1, 1);
		const result2 = organicNoise(2, 1);
		const result3 = organicNoise(1, 2);

		expect(result1).not.toBe(result2);
		expect(result1).not.toBe(result3);
	});
});
