import { EntryTextValue } from '../types';

export const isEmpty = (value?: EntryTextValue): boolean => {
	if (typeof value === 'string') return value.trim() === '';

	return true;
};
