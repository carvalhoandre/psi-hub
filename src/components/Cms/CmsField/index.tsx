'use client';

import React from 'react';

import * as Types from './types';

import Input from 'components/Input';
import ImageUpload from 'components/ImageUpload';

const CmsField: Component<Types.CmsFieldProps> = ({ type, ...props }) => {
	if (type === 'image') {
		console.log(props.label);
		return <ImageUpload id={props.id} label={props.label} />;
	}

	return <Input type={type} {...props} />;
};

export default CmsField;
