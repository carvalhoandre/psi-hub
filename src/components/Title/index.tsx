import { TitleProps } from './types';

const Title: Component<TitleProps> = ({ text }) => {
	return (
		<div className='relative inline-block'>
			<h1 className='font-semibold text-[3rem] leading-[1.125] font-poppins relative z-10'>
				{text}
			</h1>
			<span className='absolute w-6 h-6 bg-primary-main bottom-[5px] left-[-5px] rounded-sm z-0' />
		</div>
	);
};

export default Title;
