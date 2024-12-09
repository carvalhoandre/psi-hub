import type { Metadata } from 'next';
import classNames from 'classnames';

import { fontPrimary, fontSecondary } from 'core/assets/font';

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
		fontPrimary.variable,
		fontSecondary.variable
	);

	return (
		<html className={rootClassNames} lang='pt-BR'>
			<body>{children}</body>
		</html>
	);
}
