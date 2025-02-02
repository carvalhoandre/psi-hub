'use client';

import React from 'react';

import CMSSchemaStore from 'core/store/CMSSchema';

import SectionGroup from 'components/Cms/SectionGroup';
import Show from 'components/Show';
import Divider from 'components/Divider';

const CmsBody: Component = () => {
	const { groups, fields } = CMSSchemaStore.useStore();

	return (
		<>
			{groups.map(({ id, title }, itemIndex) => (
				<React.Fragment key={id}>
					<Show isShowing={itemIndex > 0}>
						<Divider />
					</Show>

					<SectionGroup
						title={title}
						id={id}
						fieldList={fields.filter(({ groupId }) => groupId === id)}
					/>
				</React.Fragment>
			))}
		</>
	);
};

export default CmsBody;
