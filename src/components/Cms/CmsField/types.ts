import { InputProps } from 'components/Input/types';
import { ContentField } from 'types/store/CMSSchemaStore';

export type CmsFieldProps = Omit<InputProps, 'type'> & ContentField;
