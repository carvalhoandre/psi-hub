import React from 'react';

import classNames from 'classnames';

import * as Types from './types';

export const Container: Component<Types.ContainerProps> = ({
	testId = 'input-container',
	children,
	className,
	...props
}) => {
	const containerClassName = classNames('mb-4', className);

	return (
		<div data-testid={testId} className={containerClassName} {...props}>
			{children}
		</div>
	);
};

export const Label: Component<Types.LabelProps> = ({
	testId = 'input-label',
	label,
	className,
	id,
}) => {
	const labelClassName = classNames(
		'block text-sm font-medium text-gray-700',
		className
	);

	return (
		<label data-testid={testId} htmlFor={id} className={labelClassName}>
			{label}
		</label>
	);
};

export const Field: Component<Types.FieldProps> = ({
	testId = 'input-field',
	className,
	id,
	required,
	...props
}) => {
	const inputClassName = classNames(
		'mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm',
		className
	);

	return (
		<input
			data-testid={testId}
			id={id}
			className={inputClassName}
			required={required}
			aria-required={required ? 'true' : 'false'}
			name={id}
			{...props}
		/>
	);
};

export const InputBase: Component<Types.InputBaseProps> = ({
	testId = 'input-base',
	label,
	...props
}) => {
	return (
		<Container testId={`${testId}-container`}>
			<Label testId={`${testId}-label`} label={label} />

			<Field testId={`${testId}-field`} {...props} />
		</Container>
	);
};
