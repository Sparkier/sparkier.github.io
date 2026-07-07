import { describe, it, expect } from 'vitest';
import { contacts } from './contacts';

describe('contacts', () => {
	it('should be a non-empty array of objects', () => {
		expect(Array.isArray(contacts)).toBe(true);
		expect(contacts.length).toBeGreaterThan(0);
	});

	it('should have required fields for all contacts', () => {
		contacts.forEach((contact) => {
			expect(contact).toHaveProperty('id');
			expect(typeof contact.id).toBe('string');
			expect(contact.id.length).toBeGreaterThan(0);

			expect(contact).toHaveProperty('href');
			expect(typeof contact.href).toBe('string');
			expect(contact.href.length).toBeGreaterThan(0);

			expect(contact).toHaveProperty('text');
			expect(typeof contact.text).toBe('string');

			expect(contact).toHaveProperty('icon');
			expect(contact.icon).toBeDefined();

			expect(contact).toHaveProperty('blank');
			expect(typeof contact.blank).toBe('boolean');
		});
	});
});
