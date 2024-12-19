import OptimizedImage from 'components/OptimizedImage';
import { socials } from 'components/SocialsIcons/constant';

const SocialsIcons: Component = ({ testId = 'social-icon' }) => {
	return socials.map(({ link, src, name }, index) => (
		<a
			key={`${testId}-${index}`}
			href={link}
			target='_blank'
			rel='noreferrer noopener'
			className='home_social-icon'
			data-testid={testId}
			aria-label={name}
		>
			<OptimizedImage alt={name} src={src} className='w-[40px] h-[40px]' />
		</a>
	));
};

export default SocialsIcons;
