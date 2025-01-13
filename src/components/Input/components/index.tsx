import React, { HTMLProps } from 'react';

import classNames from 'classnames';

export const Container: Component<HTMLProps<HTMLDivElement>> = ({
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

export const Label: Component<HTMLProps<HTMLLabelElement>> = ({
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

export const Field: Component<HTMLProps<HTMLInputElement>> = ({
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
