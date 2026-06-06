import { describe, it, expect } from 'vitest';
import { getResearchProjects } from './projectsProvider';

describe('projectsProvider', () => {
    describe('getResearchProjects', () => {
        it('should return a non-empty array of research projects', () => {
            const projects = getResearchProjects();
            expect(projects.length).toBeGreaterThan(0);
        });

        it('should sort projects in descending order by year', () => {
            const projects = getResearchProjects();

            // Assert exact array length to make sure the expected number of projects is returned
            expect(projects.length).toBe(20);

            for (let i = 0; i < projects.length - 1; i++) {
                const currentYear = parseInt(projects[i].year);
                const nextYear = parseInt(projects[i + 1].year);

                expect(currentYear).toBeGreaterThanOrEqual(nextYear);
            }

            // Check first and last item to confirm they are indeed correctly sorted
            expect(projects[0].title).toBe('Intentmaking and Sensemaking: Human Interaction with AI-Guided Mathematical Discovery');
            expect(projects[projects.length - 1].title).toBe('Convolutional neural network (CNN) applied to respiratory motion detection in fluoroscopic frames');
        });
    });
});
