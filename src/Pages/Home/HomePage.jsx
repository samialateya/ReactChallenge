import { GameComponent } from './GameComponent.jsx';
import { HeaderComponent } from '../../Components/HeaderComponent.jsx';

export default function HomePage() {
	return (
		<>
			<HeaderComponent />
			<section className='container'>
				<GameComponent />
			</section>
		</>
	)
}
