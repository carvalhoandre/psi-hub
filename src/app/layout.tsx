import type { Metadata } from 'next';

import classNames from 'classnames';

import { fontPlayfair, fontPoppins, fontRoboto } from 'core/assets/font';

import Footer from 'components/Footer';

import './globals.css';

export const metadata: Metadata = {
	title: 'PSI HUB',
	description: 'PSI HUB',
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
			<body>{children}</body>

			<Footer />
		</html>
	);
}
