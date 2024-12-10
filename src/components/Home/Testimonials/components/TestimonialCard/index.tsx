import { TestimonialCardProps } from 'components/Home/Testimonials/components/TestimonialCard/types';

const TestimonialCard: Component<TestimonialCardProps> = ({ text, author }) => {
	return (
		<div
			className='
        bg-primary 
        rounded-[10px] 
        p-5 
        min-w-[250px] 
        shadow
      '
		>
			<p
				className="
          relative
          text-base leading-[1.5] text-text-dark text-center mb-[10px] relative w-[290px]
          font-sans
          before:content-['“']
          before:text-[2.5rem]
          before:absolute
          before:left-[-5px]
          before:top-[-18px]
          before:text-text-dark
          after:content-['”']
          after:text-[2.5rem]
          after:absolute
          after:bottom-[-18px]
          after:text-text-dark
        "
			>
				{text}
			</p>
			<p className='text-sm text-text-dark italic font-sans'>{author}</p>
		</div>
	);
};

export default TestimonialCard;
