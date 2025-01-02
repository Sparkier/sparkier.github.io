/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				primary: {
					DEFAULT: '#fa8072'
				},
				text: {
					DEFAULT: '#121212'
				},
				background: {
					DEFAULT: '#f4f6fb'
				},
				h2: {
					DEFAULT: '#030712'
				},
				h3: {
					DEFAULT: '#374151'
				},
				h4: {
					DEFAULT: '#374151'
				}
			}
		}
	},
	plugins: [require('@tailwindcss/typography')]
};
