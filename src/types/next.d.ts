import React from 'react';

declare global {
	type NextPage<Params = {}, SearchParams = {}> = (props: {
		params: Params;
		searchParams: SearchParams;
	}) => React.ReactNode | Promise<React.ReactNode>;

	type PasswordResetSearchParams = { key: string; login: string };

	export type PageProps = {
		Home: NextPage;
		Login: NextPage;
		ConfirmAccount: NextPage;
		PasswordReset: NextPage<{}, PasswordResetSearchParams>;
	};

	export type PagesName = keyof PageProps;

	export type Page<_PageName extends PagesName> = PageProps[_PageName];
}

export {};
