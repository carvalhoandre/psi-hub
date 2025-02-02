import { ContentField } from 'types/store/CMSSchemaStore';

export type SectionGroupProps = {
	title: string;
	id: string;

	fieldList: ContentField[];
};
