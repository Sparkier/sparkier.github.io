import { describe, it, expect } from 'vitest';
import { books } from './bookProvider';
import { Book } from '../types';

describe('bookProvider', () => {
	it('should return a non-empty array of books', () => {
		expect(Array.isArray(books)).toBe(true);
		expect(books.length).toBeGreaterThan(0);
	});

	it('should contain valid Book instances', () => {
		books.forEach((item) => {
			expect(item).toBeInstanceOf(Book);

			expect(item.title).toBeDefined();
			expect(typeof item.title).toBe('string');
			expect(item.title.length).toBeGreaterThan(0);

			expect(item.date).toBeInstanceOf(Date);
			expect(!isNaN(item.date.getTime())).toBe(true);

			expect(item.rating).toBeDefined();
			expect(typeof item.rating).toBe('number');

			expect(item.comment).toBeDefined();
			expect(typeof item.comment).toBe('string');
			expect(item.comment.length).toBeGreaterThan(0);
		});
	});
});
