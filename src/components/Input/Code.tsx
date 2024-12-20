import React from 'react';

import { InputCodeProps } from './types';

const InputCode: Component<InputCodeProps> = ({ quantity = 4, ...props }) => {
	const handleInputChange = (
		e: React.ChangeEvent<HTMLInputElement>,
		index: number
	) => {
		const { value } = e.target;

		if (/^\d?$/.test(value)) {
			e.target.value = value;

			if (value && index < quantity - 1) {
				const nextInput = document.getElementById(
					`digit-${index + 1}`
				) as HTMLInputElement;
				nextInput?.focus();
			}
		}
	};

	const handleKeyDown = (
		e: React.KeyboardEvent<HTMLInputElement>,
		index: number
	) => {
		if (e.key === 'Backspace' && !e.currentTarget.value && index > 0) {
			const prevInput = document.getElementById(
				`digit-${index - 1}`
			) as HTMLInputElement;
			prevInput?.focus();
		}
	};

	return (
		<div className='flex justify-start gap-8 w-full'>
			{Array(quantity)
				.fill(0)
				.map((_, index) => (
					<input
						key={index}
						id={`digit-${index}`}
						name={`digit-${index}`}
						type='text'
						inputMode='numeric'
						maxLength={1}
						onChange={(e) => handleInputChange(e, index)}
						onKeyDown={(e) => handleKeyDown(e, index)}
						className='w-12 h-12 text-center text-lg border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-dark focus:border-primary-dark'
						required
						{...props}
					/>
				))}
		</div>
	);
};

export default InputCode;
