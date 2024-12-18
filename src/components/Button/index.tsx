import React from 'react';

import { ButtonProps } from './types';

const Button: Component<ButtonProps> = ({ label, onClick }) => {
	return (
		<button
			onClick={onClick}
			type='submit'
			className='w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-main hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary'
		>
			{label}
		</button>
	);
};

export default Button;
