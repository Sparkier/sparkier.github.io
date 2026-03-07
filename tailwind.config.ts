/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				serif: ['Instrument Serif', 'Georgia', 'serif'],
				sans: ['Inter', 'system-ui', 'sans-serif']
			},
			colors: {
				primary: {
					DEFAULT: '#e8654a',
					light: '#f4a393'
				},
				text: {
					DEFAULT: '#1a1a1a',
					muted: '#6b6b6b'
				},
				background: {
					DEFAULT: '#faf8f5',
					card: '#ffffff'
				},
				h2: {
					DEFAULT: '#1a1a1a'
				},
				h3: {
					DEFAULT: '#333333'
				},
				h4: {
					DEFAULT: '#333333'
				}
			}
		}
	},
	plugins: [require('@tailwindcss/typography')]
};
