import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from './assets/vite.svg';
import chakraUILogo from './assets/chakra-ui.svg';
import { FaGithub, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import './Starter.css';

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<div>
				<h1 className='title'>
					PROJECT <span className='text-accent'>STARTER</span>
				</h1>

				<a href='https://chakra-ui.com/' target='_blank'>
					<img src={chakraUILogo} className='logo chakra' alt='Chakra UI logo' />
				</a>
				<a href='https://react.dev' target='_blank'>
					<img src={reactLogo} className='logo react' alt='React logo' />
				</a>
				<a href='https://vitejs.dev' target='_blank'>
					<img src={viteLogo} className='logo vite' alt='Vite logo' />
				</a>
			</div>
			<h2>Chakra ~ React ~ Vite</h2>

			<p className='read-the-docs'>
				Project starter created by{' '}
				<a href='https://yvanblanchette.com' className='link'>
					Yvan jr Blanchette
				</a>
			</p>
			<h3 className='social-icons'>
				<a href='https://github.com/YvanBlanchette/project-starter/' className='social-icon'>
					<FaGithub size={50} />
				</a>
				<a href='https://facebook.com/yvanblanchette/' className='social-icon'>
					<FaFacebookF size={50} />
				</a>
				<a href='https://www.linkedin.com/in/yvanblanchette/' className='social-icon'>
					<FaLinkedinIn size={50} />
				</a>
			</h3>
		</>
	);
}

export default App;
