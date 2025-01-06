import React from 'react';

import { InputProps } from './types';

import { Field } from './Base';
import InputPassword from './Password';
import Token from './Token';

const Input: Component<InputProps> = (props) => {
	if (props.type === 'token') return <Token {...props} />;

	if (props.type === 'password') return <InputPassword {...props} />;

	return <Field {...props} />;
};

export default Input;
