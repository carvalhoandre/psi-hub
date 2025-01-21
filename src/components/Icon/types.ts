import SvgList from './svg';

type SvgListType = typeof SvgList;
type SvgListNames = keyof SvgListType;

export type IconProps = {
	name: SvgListNames;

	size?: number;
	width?: number;
	height?: number;
	disabled?: boolean;
	onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
};
