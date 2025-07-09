import Measurements from './home/Measurements';
import Editorial from './home/Editorial';
import About from './home/About';
import Hero from './home/Hero';

export default function Home() {
	return (
		<main>
			<Hero />
			<Editorial />
			<About />
			<Measurements />
		</main>
	);
}
