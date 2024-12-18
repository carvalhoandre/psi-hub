import React from 'react';

import { InputProps } from './types';

import OptimizedImage from 'components/OptimizedImage';

import EyeIcon from '../../../public/images/icons/eye.svg';
import EyeSlashIcon from '../../../public/images/icons/eye-slash.svg';

const Input: Component<InputProps> = ({
	id,
	label,
	type = 'text',
	value,
	placeholder = '',
	required = false,
	onChange,
}) => {
	const [showPassword, setShowPassword] = React.useState(false);

	const togglePasswordVisibility = () => {
		setShowPassword((prevState) => !prevState);
	};

	const isPasswordType = type === 'password';

	return (
		<div className='mb-4 relative'>
			<label htmlFor={id} className='block text-sm font-medium text-gray-700'>
				{label}
			</label>
			<div className='relative'>
				<input
					type={isPasswordType && showPassword ? 'text' : type}
					id={id}
					value={value}
					onChange={onChange}
					placeholder={placeholder}
					className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm'
					required={required}
				/>

				{isPasswordType && (
					<button
						type='button'
						onClick={togglePasswordVisibility}
						className='absolute inset-y-0 right-3 flex bg-transparent cursor-pointer items-center text-gray-500 hover:text-gray-700 focus:outline-none'
					>
						<OptimizedImage
							alt='password-icon'
							src={showPassword ? EyeIcon : EyeSlashIcon}
						/>
					</button>
				)}
			</div>
		</div>
	);
};

export default Input;
