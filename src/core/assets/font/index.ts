import { Poppins } from 'next/font/google';
import { Calligraffitti } from 'next/font/google';

export const fontPrimary = Poppins({
	weight: ['600', '500', '400'],
	subsets: ['latin'],
	variable: '--font-primary-poppins',
	display: 'swap',
});
