import type { Metadata } from 'next';

import classNames from 'classnames';

import { fontPlayfair, fontPoppins, fontRoboto } from 'core/assets/font';

import Header from 'components/Header';
import Boot from 'components/Boot';
import Footer from 'components/Footer';

import './globals.css';

export const metadata: Metadata = {
	title: 'Giovanna Dias',
	description: 'Giovanna Dias',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const rootClassNames = classNames(
		fontPlayfair.variable,
		fontPoppins.variable,
		fontRoboto.variable
	);

	return (
		<html lang='pt-BR' className={rootClassNames}>
			<body className='page'>
				<Boot />

				<Header />

				{children}

				<Footer />
			</body>
		</html>
	);
}
