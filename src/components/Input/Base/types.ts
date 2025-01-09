import { HTMLProps } from 'react';

export type ContainerProps = HTMLProps<HTMLDivElement>;

export type LabelProps = HTMLProps<HTMLLabelElement>;

export type FieldProps = HTMLProps<HTMLInputElement>;

export type InputBaseProps = HTMLProps<HTMLInputElement> &
	Pick<LabelProps, 'label'>;
