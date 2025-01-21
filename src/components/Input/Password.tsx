'use client';

import React from 'react';

import classNames from 'classnames';

import OptimizedImage from 'components/OptimizedImage';

import { InputBaseProps } from './types';

import { InputBase } from './Base';

import EyeIcon from '../../../public/images/icons/eye.svg';
import EyeSlashIcon from '../../../public/images/icons/eye-slash.svg';

const InputPassword: React.FC<InputBaseProps> = (props) => {
	const [hasValidateError, setHasValidateError] = React.useState(false);
	const [showPassword, setShowPassword] = React.useState(false);

	const togglePasswordVisibility = () => {
		setShowPassword((prevState) => !prevState);
	};

	const eyeButtonClassname = classNames(
		'absolute inset-y-0 right-3 flex bg-transparent cursor-pointer items-center text-gray-500 hover:text-gray-700 focus:outline-none',
		hasValidateError ? 'top-[4px]' : 'top-[24px]'
	);

	return (
		<div className='mb-4 relative'>
			<InputBase
				{...props}
				type={showPassword ? 'text' : 'password'}
				onValidate={setHasValidateError}
			/>

			<button
				type='button'
				onClick={togglePasswordVisibility}
				className={eyeButtonClassname}
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
