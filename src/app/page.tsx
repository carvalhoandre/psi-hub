import { Metadata } from 'next';

import { About } from 'components/Home/About';

const AppUrl = process.env.NEXT_PUBLIC_APP_URL;

const title = 'Giovanna Dias';
const description =
	'Sou a psicóloga Giovanna Dias, apaixonada por ajudar pessoas a ressignificarem suas experiências e a encontrarem um novo sentido para suas vidas. Acredito que cada um de nós carrega um potencial de transformação incrível, e meu papel é te acompanhar nesse processo, oferecendo escuta, acolhimento e compreensão.';

export const metadata: Metadata = {
	title,
	description,
	keywords: [
		'Psicóloga online',
		'Terapia individual',
		'Atendimento psicológico remoto',
		'Psicóloga Giovanna Dias',
		'Terapia para ansiedade',
		'Psicoterapia personalizada',
		'Psicóloga para saúde mental',
		'Psicologia e autoconhecimento',
	],
	openGraph: {
		title,
		description,
		url: AppUrl,
		siteName: title,
		locale: 'pt_BR',
		type: 'website',
		images: [
			{
				url: `${AppUrl}/assets/img.jpg`,
				width: 1200,
				height: 630,
			},
		],
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
	verification: {
		google: 'google-site-verification-code',
		yandex: 'yandex-verification-code',
	},
};

const Home: Page<'Home'> = () => {
	return (
		<>
			<About />
		</>
	);
};

export default Home;
