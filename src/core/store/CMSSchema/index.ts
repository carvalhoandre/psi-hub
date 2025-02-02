import type { CMSSchemaStore } from 'types/store/CMSSchemaStore';

import { createStoreFactory } from '../createStore';

const CMSSchemaStore = createStoreFactory<CMSSchemaStore>(() => ({
	groups: [],
	fields: [],
}));

export default CMSSchemaStore;
