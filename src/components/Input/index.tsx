import React from 'react';

import { InputProps } from './types';

import InputBase from './Base';
import InputPassword from './Password';

const Input: Component<InputProps> = ({ type = 'text', ...props }) => {
	if (type === 'password') {
		return <InputPassword {...props} />;
	}

	return <InputBase {...props} type={type} />;
};

export default Input;
