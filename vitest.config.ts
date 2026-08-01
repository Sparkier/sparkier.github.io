import { defineConfig } from 'vitest/config';
import { sveltekit } from '@sveltejs/kit/vite';
import { imageDimensions } from './vite-plugin-image-dimensions.ts';

export default defineConfig({
	plugins: [imageDimensions(), sveltekit()],
	test: {
		environment: 'jsdom',
		globals: true
	}
});
