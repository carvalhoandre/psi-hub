import type { Config } from 'tailwindcss';
const { fontFamily } = require('tailwindcss/defaultTheme');

export default {
	corePlugins: {
		preflight: false,
	},
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		fontFamily: {
			body: ['Poppins', ...fontFamily.sans],
		},
		fontSize: {
			big: '2em',
			h1: '1.5em',
			h2: '1.25em',
			h3: '1.125em',
			normal: '0.938em',
			small: '0.813em',
			smaller: '0.75em',
		},
		extend: {
			colors: {
				primary: '#93cce0',
				secondary: '#d3cce3',
				'text-dark': '#333',
				white: '#fff',
				'text-light': '#555',
				background: '#f2f0ed',
				border: '#e0e0e0',
			},
		},
		boxShadow: {
			'inset-white': 'inset 0 -60px var(--color-white)',
		},
	},
	plugins: [],
} satisfies Config;
