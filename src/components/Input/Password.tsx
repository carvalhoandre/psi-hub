'use client';

import React from 'react';

import EyeIcon from '../../../public/images/icons/eye.svg';
import EyeSlashIcon from '../../../public/images/icons/eye-slash.svg';

import OptimizedImage from 'components/OptimizedImage';
import InputBase from 'components/Input/Base';

const InputPassword: React.FC<React.HTMLProps<HTMLInputElement>> = (props) => {
	const [showPassword, setShowPassword] = React.useState(false);

	const togglePasswordVisibility = () => {
		setShowPassword((prevState) => !prevState);
	};

	return (
		<div className='mb-4 relative'>
			<InputBase {...props} />

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

export default InputPassword;
