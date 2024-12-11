const applyPseudoSelector = (
	classNamesEntry: string,
	pseudoSelector: string | string[]
): string => {
	if (!classNamesEntry.trim()) return '';

	const selectors = Array.isArray(pseudoSelector)
		? pseudoSelector
		: [pseudoSelector];

	const classNamesList = classNamesEntry.split(' ');

	return classNamesList
		.reduce((acc: string, className: string) => {
			if (!className) return acc;

			const classNameWithSelector = selectors
				.map((selector) => `${selector}:${className}`)
				.join('');

			return `${acc} ${classNameWithSelector}`;
		}, '')
		.trim();
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
