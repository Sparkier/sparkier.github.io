import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { imageDimensions } from './vite-plugin-image-dimensions.ts';

export default defineConfig({
	plugins: [imageDimensions(), sveltekit()]
});
