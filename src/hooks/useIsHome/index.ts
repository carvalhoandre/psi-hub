'use client';

import { usePathname } from 'next/navigation';

const useIsHome = (): boolean => {
	const pathname = usePathname();
	return pathname === '/';
};

export default useIsHome;
