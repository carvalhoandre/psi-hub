'use client';

import { addField, createGroup } from 'core/useCases/CMSSchema';
import * as CMSExceptions from 'core/utils/exceptions/CMSSchemaStore';

const _handleCMSError = async (error: unknown) => {
	const errorHasName = Boolean((error as any).name);

	if (errorHasName) {
		const errorName = (error as { name: string }).name;

		if (errorName in CMSExceptions.CMSSchemaStoreExceptionNames) return;
	}

	throw error;
};

const setupIntroductionCMS = async () => {
	try {
		const GROUP_ID = 'introduction';

		createGroup({
			id: GROUP_ID,
			title: 'Introdução',
			onReceiveValue: async () => ({}),
			onUpdateValue: async () => {},
		});

		addField({
			id: 'title',
			defaultValue: '',
			groupId: GROUP_ID,
			label: 'Título',
			type: 'text',
		});

		addField({
			id: 'subtitle',
			defaultValue: '',
			groupId: GROUP_ID,
			label: 'Sub-Título',
			type: 'text',
		});

		addField({
			id: 'bannerSrc',
			defaultValue: '',
			groupId: GROUP_ID,
			label: 'Foto da Profissional',
			type: 'image',
		});

		addField({
			id: 'apresentation',
			defaultValue: '',
			groupId: GROUP_ID,
			label: 'Apresentação',
			type: 'text',
		});
	} catch (error) {
		await _handleCMSError(error);
	}
};

const setupHowHelpYouCMS = async () => {
	try {
		const GROUP_ID = 'who-help-you';

		createGroup({
			id: GROUP_ID,
			title: 'Como posso te ajudar',
			onReceiveValue: async () => ({}),
			onUpdateValue: async () => {},
		});

		addField({
			id: 'title',
			defaultValue: '',
			groupId: GROUP_ID,
			label: 'Título',
			type: 'text',
		});

		addField({
			id: 'subtitle',
			defaultValue: '',
			groupId: GROUP_ID,
			label: 'Sub-Título',
			type: 'text',
		});

		addField({
			id: 'first-card-title',
			defaultValue: '',
			groupId: GROUP_ID,
			label: 'Títudo Primeiro do Card',
			type: 'text',
		});

		addField({
			id: 'first-card-content',
			defaultValue: '',
			groupId: GROUP_ID,
			label: 'Contéudo Primeiro do Card',
			type: 'text',
		});
	} catch (error) {
		await _handleCMSError(error);
	}
};

const setupAbout = async () => {
	try {
		const GROUP_ID = 'about';

		createGroup({
			id: GROUP_ID,
			title: 'Sobre Você',
			onReceiveValue: async () => ({}),
			onUpdateValue: async () => {},
		});

		addField({
			id: 'title',
			defaultValue: '',
			groupId: GROUP_ID,
			label: 'Título',
			type: 'text',
		});

		addField({
			id: 'subtitle',
			defaultValue: '',
			groupId: GROUP_ID,
			label: 'Sub-Título',
			type: 'text',
		});

		addField({
			id: 'first-card-title',
			defaultValue: '',
			groupId: GROUP_ID,
			label: 'Títudo Primeiro do Card',
			type: 'text',
		});

		addField({
			id: 'first-card-content',
			defaultValue: '',
			groupId: GROUP_ID,
			label: 'Contéudo Primeiro do Card',
			type: 'text',
		});
	} catch (error) {
		await _handleCMSError(error);
	}
};

const setupContact = async () => {
	try {
		const GROUP_ID = 'contact';

		createGroup({
			id: GROUP_ID,
			title: 'Contato',
			onReceiveValue: async () => ({}),
			onUpdateValue: async () => {},
		});

		addField({
			id: 'title',
			defaultValue: '',
			groupId: GROUP_ID,
			label: 'Título',
			type: 'text',
		});

		addField({
			id: 'subtitle',
			defaultValue: '',
			groupId: GROUP_ID,
			label: 'Sub-Título',
			type: 'text',
		});

		addField({
			id: 'description',
			defaultValue: '',
			groupId: GROUP_ID,
			label: 'Descrição',
			type: 'text',
		});

		addField({
			id: 'social-title',
			defaultValue: '',
			groupId: GROUP_ID,
			label: 'Título Rede Social',
			type: 'text',
		});

		addField({
			id: 'first-social-icon',
			defaultValue: '',
			groupId: GROUP_ID,
			label: 'Ícone Da rede social',
			type: 'image',
		});
	} catch (error) {
		await _handleCMSError(error);
	}
};

export const setupCMS = async () => {
	await setupIntroductionCMS();
	await setupHowHelpYouCMS();
	await setupAbout();
	await setupContact();
};
