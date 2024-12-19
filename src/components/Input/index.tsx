import React from 'react';

import { InputProps } from './types';

import InputBase from 'components/InputBase';
import InputPassword from 'components/InputPassword';

const Input: Component<InputProps> = ({
	type = 'text',
	label,
	id,
	value,
	placeholder = '',
	required = false,
	onChange,
}) => {
	if (type === 'password') {
		return (
			<InputPassword
				id={id}
				value={value}
				placeholder={placeholder}
				required={required}
				onChange={onChange}
				label={label}
			/>
		);
	}

	return (
		<InputBase
			id={id}
			value={value}
			placeholder={placeholder}
			required={required}
			onChange={onChange}
			type={type}
			label={label}
		/>
	);
};

export default Input;
