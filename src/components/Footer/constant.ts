import { FooterInfo, NavLink } from 'components/Footer/types';

import Map from '../../../public/images/icons/map-marker.svg';
import Envelope from '../../../public/images/icons/envelope.svg';
import Phone from '../../../public/images/icons/phone.svg';

export const footerInfo: Array<FooterInfo> = [
	{
		src: Map,
		title: 'Atendimentos Online',
	},
	{
		src: Envelope,
		title: 'Email',
		subtitle: 'giovanna.diasss09@gmail.com',
		link: 'mailto:giovanna.diasss09@gmail.com?Subject=Olá Giovanna',
	},
	{
		src: Phone,
		title: 'Telefone',
		subtitle: '+55 (11) 94305-0454',
		link: 'https://api.whatsapp.com/send?phone=5511943050454&text=Ol%C3%A1!',
	},
];

export const navLinks: Array<NavLink> = [
	{ href: '#about', label: 'Sobre Mim' },
	{ href: '#approaches', label: 'Abordagens' },
	{ href: '#testimonials', label: 'Depoimentos' },
	{ href: '#contact', label: 'Contato' },
];
