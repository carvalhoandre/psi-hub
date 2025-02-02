'use client';

import React from 'react';

import { setupCMS } from '../../startCms';

const Boot: Component = () => {
	const startCms = async () => {
		try {
			await setupCMS();
		} catch (_) {}
	};

	React.useEffect(() => {
		startCms();
	}, []);

	return <></>;
};

export default Boot;
