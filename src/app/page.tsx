import Measurements from './home/Measurements';
import Editorial from './home/Editorial';
import Footer from './home/Footer';
import About from './home/About';
import Hero from './home/Hero';
import Polaroids from './home/Polaroids';

export default function Home() {
	return (
		<main>
			<Hero />
			<Editorial />
			<About />
			<Measurements />
			<Polaroids />
			<Footer />
		</main>
	);
}
