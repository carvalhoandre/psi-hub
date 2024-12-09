import type { Config } from 'tailwindcss';

export default {
	corePlugins: {
		preflight: false,
	},
	content: ['./src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: 'var(--color-primary)',
				secondary: 'var(--color-secondary)',
				highlight: 'var(--color-highlight)',
				white: 'var(--color-white)',
				text: {
					dark: 'var(--color-text-dark)',
					light: 'var(--color-text-light)',
				},
				background: 'var(--color-background)',
				border: 'var(--color-border)',
			},
			fontFamily: {
				poppins: ['var(--font-poppins)'],
				playfair: ['var(--font-playfair)', 'serif'],
				roboto: ['var(--font-roboto)', 'sans-serif'],
			},
			fontSize: {
				smaller: 'var(--smaller-font-size)',
				small: 'var(--small-font-size)',
				normal: 'var(--normal-font-size)',
				big: 'var(--big-font-size)',
				h1: 'var(--h1-font-size)',
				h2: 'var(--h2-font-size)',
				h3: 'var(--h3-font-size)',
			},
		},
	},
	plugins: [],
} satisfies Config;
