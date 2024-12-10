import Logo from '../../assets/logo.svg';
import Nav from '../Nav';

// import './styles.css';

const Header: Component = () => {
	return (
		<header className='header' id='header'>
			<div className='container header-subcontainer'>
				<div className='header-profile'>
					{/* <Image src={Logo} alt='Giovanna Dias logo' className='logo' /> */}

					<div>
						<h1 className='profile-name'>Giovanna Dias</h1>
						<p className='profile-crp'>Psicóloga - CRP 06/200951</p>
					</div>
				</div>

				<Nav />
			</div>
		</header>
	);
};

export { Header };
