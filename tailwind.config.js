/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				primary: {
					DEFAULT: '#fa8072',
					dark: '#2196f3'
				},
				text: {
					DEFAULT: '#121212',
					dark: '#e4e6eb'
				},
				background: {
					DEFAULT: '#f4f6fb',
					dark: '#121212'
				},
				h2: {
					DEFAULT: '#030712',
					dark: '#f3f4f6'
				},
				h3: {
					DEFAULT: '#374151',
					dark: '#e5e7eb'
				},
				h4: {
					DEFAULT: '#374151',
					dark: '#e5e7eb'
				}
			}
		}
	},
	plugins: [require('@tailwindcss/typography')]
};
