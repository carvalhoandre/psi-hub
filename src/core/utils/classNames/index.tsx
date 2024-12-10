const applyPseudoSelector = (
	classNamesEntry: string,
	pseudoSelector: string | string[]
): string => {
	if (!classNamesEntry.trim()) return '';

	const selectors = Array.isArray(pseudoSelector)
		? pseudoSelector
		: [pseudoSelector];

	return classNamesEntry
		.split(' ')
		.reduce(
			(acc, className) =>
				className
					? `${acc}${acc ? ' ' : ''}${selectors
							.map((selector) => `${selector}:${className}`)
							.join(' ')}`
					: acc,
			''
		);
};

export const afterClassNames = (classNamesEntry: string): string => {
	return applyPseudoSelector(classNamesEntry, 'after');
};

export const beforeClassNames = (classNamesEntry: string): string => {
	return applyPseudoSelector(classNamesEntry, 'before');
};

export const interactionStatesClassNames = (
	classNamesEntry: string
): string => {
	return applyPseudoSelector(classNamesEntry, ['hover', 'focus', 'active']);
};
