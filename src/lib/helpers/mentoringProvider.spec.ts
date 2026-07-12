import { describe, it, expect } from 'vitest';
import { getMentorshipActivities } from './mentoringProvider';
import { Mentorship } from '../types';

describe('mentoringProvider', () => {
	it('should return a non-empty array of mentorship activities', () => {
		const mentorships = getMentorshipActivities();
		expect(Array.isArray(mentorships)).toBe(true);
		expect(mentorships.length).toBeGreaterThan(0);
	});

	it('should contain valid Mentorship instances', () => {
		const mentorships = getMentorshipActivities();
		mentorships.forEach((item) => {
			expect(item).toBeInstanceOf(Mentorship);
			expect(item.name).toBeDefined();
			expect(typeof item.name).toBe('string');
			expect(item.position).toBeDefined();
			expect(typeof item.position).toBe('string');
			expect(item.institution).toBeDefined();
			expect(typeof item.institution).toBe('string');
			expect(item.topic).toBeDefined();
			expect(typeof item.topic).toBe('string');
			expect(item.timeframe).toBeDefined();
			expect(typeof item.timeframe).toBe('string');
		});
	});
});
