'use client';

import React from 'react';

import classNames from 'classnames';

import * as Types from './types';

import { Container, Field, Label } from './components';
import ErrorMessage from 'components/ErrorMessage';

export const InputBase: Component<Types.InputBaseProps> = ({
	testId = 'input-base',
	label,
	value = '',
	onChange,
	onBlur,
	onFocus,
	onChangeText,
	validateError,
	mask = (value) => value!,
	onValidate,
	...props
}) => {
	const [validationError, setValidationError] = React.useState<string>('');
	const hasError = Boolean(validationError);

	const handleOnChange: React.FormEventHandler<HTMLInputElement> = (e) => {
		const maskedValue = mask(e.currentTarget.value);

		onChange?.(e);

		onChangeText?.(maskedValue);
	};

	const handleOnBlur = (event: React.FocusEvent<HTMLInputElement>) => {
		if (validateError && !props.disabled) {
			setValidationError(validateError(String(value)));
		}

		onChangeText?.(mask(String(value)));

		onBlur?.(event);
	};

	const handleOnFocus = (event: React.FocusEvent<HTMLInputElement>) => {
		if (validateError && !props.disabled) setValidationError('');

		onFocus?.(event);
	};

	React.useEffect(() => {
		if (validateError) onValidate?.(Boolean(validationError));
	}, [validationError]);

	return (
		<Container testId={`${testId}-container`}>
			<Label testId={`${testId}-label`} label={label} />

			<Field
				testId={`${testId}-field`}
				{...props}
				onChange={handleOnChange}
				onBlur={handleOnBlur}
				onFocus={handleOnFocus}
			/>

			{hasError && (
				<ErrorMessage
					testId={`${testId}-error`}
					className='mt-1'
					error={validationError}
				/>
			)}
		</Container>
	);
};
