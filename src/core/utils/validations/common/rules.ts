import { EntryTextValue } from '../types';

export const isEmpty = (value?: EntryTextValue): boolean => {
	return value === undefined || value === null || value === '';
};
