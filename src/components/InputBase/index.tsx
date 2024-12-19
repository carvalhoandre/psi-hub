import React from 'react';
import { HTMLProps } from 'react';

const InputBase: Component<HTMLProps<HTMLInputElement>> = ({
	id,
	value,
	placeholder = '',
	required = false,
	onChange,
	type = 'text',
}) => {
	return (
		<div className='mb-4'>
			<label htmlFor={id} className='block text-sm font-medium text-gray-700'>
				{id}
			</label>
			<div className='relative'>
				<input
					type={type}
					id={id}
					value={value}
					onChange={onChange}
					placeholder={placeholder}
					className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm'
					required={required}
					aria-required={required ? 'true' : 'false'}
					name={id}
				/>
			</div>
		</div>
	);
};

export default InputBase;
