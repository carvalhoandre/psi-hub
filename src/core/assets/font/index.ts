import { Poppins, Playfair_Display, Roboto } from 'next/font/google';

export const fontPoppins = Poppins({
	weight: ['400', '500', '600'],
	subsets: ['latin'],
	variable: '--font-poppins',
	display: 'swap',
});

export const fontPlayfair = Playfair_Display({
	subsets: ['latin'],
	variable: '--font-playfair',
	display: 'swap',
});

export const fontRoboto = Roboto({
	weight: ['400'],
	subsets: ['latin'],
	variable: '--font-roboto',
	display: 'swap',
});
