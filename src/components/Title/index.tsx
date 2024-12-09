import { TitleProps } from './types';

const Title: Component<TitleProps> = ({ text }) => {
	return (
		<h1 className='font-semibold text-[3rem] leading-[1.125] font-poppins'>
			{text}
		</h1>
	);
};

export default Title;
