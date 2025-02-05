'use client';

import React from 'react';

import Image from 'next/image';

import Icon from 'components/Icon';
import { Label } from 'components/Input/components';

import * as Types from './types';
import Show from 'components/Show';

const ImagePreview: Component<Types.ImagePreviewProps> = ({ image }) => {
	if (!image)
		return (
			<div className='w-[500px] h-[500px] bg-gray-50 flex flex-col items-center justify-center gap-4'>
				<Icon name='upload' className='text-gray-400 !w-12 !h-12' />
				<p>Faça o upload da imagem.</p>
			</div>
		);

	return (
		<Image
			src={image}
			alt='Preview'
			layout='responsive'
			width={500}
			height={500}
		/>
	);
};

const ImageUpload: Component<Types.ImageUploadProps> = ({ id, label }) => {
	const [image, setImage] = React.useState<string | null>(null);

	const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files?.[0];

		if (file) {
			const reader = new FileReader();

			reader.onloadend = () => {
				setImage(reader.result as string);
			};

			reader.readAsDataURL(file);
		}
	};

	return (
		<div className='flex flex-col gap-1'>
			<Show isShowing={Boolean(label)}>
				<Label label={label} />
			</Show>

			<div className='relative'>
				<input
					name={id}
					id={id}
					className='absolute top-0 left-0 pointer-events-none invisible'
					type='file'
					accept='image/*'
					onChange={handleImageChange}
				/>

				<label
					htmlFor={id}
					className='cursor-pointer overflow-hidden w-fit h-fit block border-2 border-border border-solid rounded-lg'
				>
					<ImagePreview image={image} />
				</label>
			</div>
		</div>
	);
};

export default ImageUpload;
