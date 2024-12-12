import { ApproachCardProps } from './types';

export const ApproachCard: Component<ApproachCardProps> = ({
	title,
	text,
	iconSrc,
}) => {
	return (
		<div
			className='
        bg-background 
        rounded-[10px] 
        p-[20px]
        shadow 
        text-center
        shadow-inset-card
      '
		>
			{/*
      {iconSrc && (
        <Image
          src={iconSrc}
          alt={title}
          className="w-[60px] h-[60px] mb-[15px]"
        />
      )} */}

			<h3
				className="
          text-[20px] 
          my-[10px] 
          text-text-dark 
          relative 
          inline-block
          font-poppins
          before:content-[''] 
          before:bg-primary-main 
          before:inline-block 
          before:w-[12px] 
          before:h-[8px] 
          before:mr-[10px] 
          before:align-middle 
          before:transition-width 
          before:duration-200
        "
			>
				{title}
			</h3>
			<p
				className='
          font-roboto 
          text-base 
          leading-[1.5] 
          text-text-dark
        '
			>
				{text}
			</p>
		</div>
	);
};
