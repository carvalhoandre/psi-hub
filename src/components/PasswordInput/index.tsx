'use client';

import React from 'react';

import EyeIcon from '../../../public/images/icons/eye.svg';
import EyeSlashIcon from '../../../public/images/icons/eye-slash.svg';

import OptimizedImage from 'components/OptimizedImage';
import InputBase from 'components/InputBase';

const PasswordInput: React.FC<React.HTMLProps<HTMLInputElement>> = ({
	id,
	value,
	placeholder = '',
	required = false,
	onChange,
}) => {
	const [showPassword, setShowPassword] = React.useState(false);

	const togglePasswordVisibility = () => {
		setShowPassword((prevState) => !prevState);
	};

	return (
		<div className='mb-4 relative'>
			<InputBase
				id={id}
				value={value}
				placeholder={placeholder}
				required={required}
				onChange={onChange}
				type={showPassword ? 'text' : 'password'}
			/>

			<button
				type='button'
				onClick={togglePasswordVisibility}
				className='absolute inset-y-0 right-3 top-[24px] flex bg-transparent cursor-pointer items-center text-gray-500 hover:text-gray-700 focus:outline-none'
			>
				<OptimizedImage
					alt='password-icon'
					src={showPassword ? EyeIcon : EyeSlashIcon}
				/>
			</button>
		</div>
	);
};

export default PasswordInput;
