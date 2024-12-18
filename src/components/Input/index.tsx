import React from 'react';

import { InputProps } from './types';

const Input: Component<InputProps> = ({
	id,
	label,
	type = 'text',
	value,
	onChange,
	placeholder = '',
	required = false,
}) => {
	return (
		<div className='mb-4'>
			<label htmlFor={id} className='block text-sm font-medium text-gray-700'>
				{label}
			</label>
			<input
				type={type}
				id={id}
				value={value}
				onChange={onChange}
				placeholder={placeholder}
				className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm'
				required={required}
			/>
		</div>
	);
};

export default Input;
