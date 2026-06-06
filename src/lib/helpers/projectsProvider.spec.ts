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

            for (let i = 0; i < projects.length - 1; i++) {
                const currentYear = parseInt(projects[i].year);
                const nextYear = parseInt(projects[i + 1].year);

                expect(currentYear).toBeGreaterThanOrEqual(nextYear);
            }
        });
    });
});
