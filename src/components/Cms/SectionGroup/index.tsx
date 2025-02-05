'use client';

import React from 'react';

import * as Types from './types';
import CmsField from 'components/Cms/CmsField';

const SectionGroup: Component<Types.SectionGroupProps> = ({
	id: sectionId,
	title,
	fieldList,
}) => {
	return (
		<section>
			<h2>{title}</h2>

			<ul className='flex flex-col gap-2 my-4'>
				{fieldList.map(({ id, ...fieldProps }) => (
					<li key={`${sectionId}-${id}`} className='max-w-96'>
						<CmsField id={id} {...fieldProps} />
					</li>
				))}
			</ul>
		</section>
	);
};

export default SectionGroup;
