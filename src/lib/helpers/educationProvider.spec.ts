import { describe, it, expect } from 'vitest';
import { getEducationElements } from './educationProvider';
import { Education, LinkWithIcon } from '../types';

describe('educationProvider', () => {
	describe('getEducationElements', () => {
		it('should return a non-empty array', () => {
			const elements = getEducationElements();
			expect(Array.isArray(elements)).toBe(true);
			expect(elements.length).toBeGreaterThan(0);
		});

		it('should contain valid Education instances', () => {
			const elements = getEducationElements();
			for (const element of elements) {
				expect(element).toBeInstanceOf(Education);

				// Verify primitive fields
				expect(typeof element.type).toBe('string');
				expect(element.type.length).toBeGreaterThan(0);

				expect(typeof element.subject).toBe('string');
				expect(element.subject.length).toBeGreaterThan(0);

				expect(typeof element.institute).toBe('string');
				expect(element.institute.length).toBeGreaterThan(0);

				expect(typeof element.timeframe).toBe('string');
				expect(element.timeframe.length).toBeGreaterThan(0);

				expect(typeof element.details).toBe('string');
				expect(element.details.length).toBeGreaterThan(0);

				// Verify iconElements
				expect(Array.isArray(element.iconElements)).toBe(true);
				for (const iconElement of element.iconElements) {
					expect(typeof iconElement.description).toBe('string');
					expect(iconElement.description.length).toBeGreaterThan(0);

					expect(iconElement.icon).toBeInstanceOf(LinkWithIcon);
					expect(typeof iconElement.icon.link).toBe('string');
					expect(iconElement.icon.icon).toBeDefined();
				}
			}
		});
	});
});
