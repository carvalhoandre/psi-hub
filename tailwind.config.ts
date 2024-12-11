import type { Config } from 'tailwindcss';
const { fontFamily } = require('tailwindcss/defaultTheme');

export default {
	corePlugins: {
		preflight: false,
	},
	content: ['./src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			screens: {
				'max-sm': { max: '640px' },
			},
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
			borderRadius: {
				small: '0.2rem',
			},
			boxShadow: {
				'inset-white': 'inset 0 -60px var(--color-white)',
				'nav-mobile': '0 1px 2px rgba(0, 0, 0, 0.2)',
				'mobile-button': '0 0 0 3px var(--color-secondary)',
				'mobile-button-after': '0 8px currentColor, 0 -8px currentColor',
				'inset-card': '0 4px 6px #0000001a',
			},
		},
		boxShadow: {},
	},
	plugins: [],
} satisfies Config;
