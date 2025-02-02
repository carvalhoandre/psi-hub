import React from 'react';

import Title from 'components/Title';
import CmsBody from 'components/Cms/CmsBody';

const Cms: Page<'Cms'> = async () => {
	return (
		<>
			<Title text='CMS' />

			<CmsBody />

			{/* <SectionGroup
				title='Introdução'
				id='introduction'
				fieldList={[
					{ type: 'text', label: 'Título', id: 'title' },
					{ type: 'text', label: 'Subtítulo', id: 'subtitle' },
					{ type: 'text', label: 'Descrição', id: 'description' },
					{ type: 'text', label: 'Texto do Botão', id: 'text-of-button' },
					{
						type: 'image',
						label: 'Foto do Profissional',
						id: 'professional-photo',
					},
				]}
			/>

			<Divider />

			<SectionGroup
				title='Como posso te ajudar'
				id='who-help-you'
				fieldList={[{ type: 'text', label: 'Título', id: 'title' }]}
			/>

			<Divider />

			<SectionGroup
				title='Sobre'
				id='about'
				fieldList={[{ type: 'text', label: 'Título', id: 'title' }]}
			/>

			<Divider />

			<SectionGroup
				title='Contato'
				id='contact'
				fieldList={[{ type: 'text', label: 'Título', id: 'title' }]}
			/>

			<Divider />

			<SectionGroup
				title='Rodapé'
				id='footer'
				fieldList={[{ type: 'text', label: 'Título', id: 'title' }]}
			/> */}
		</>
	);
};

export default Cms;
