import React from 'react';

import { InputProps } from './types';

import InputBase from './Base';
import InputPassword from './Password';
import InputCode from 'components/Input/Code';

const Input: Component<InputProps> = ({ type = 'text', ...props }) => {
	if (type === 'password') {
		return <InputPassword {...props} />;
	}

	if (type === 'code') {
		return <InputCode {...props} />;
	}

	return <InputBase {...props} type={type} />;
};

export default Input;
