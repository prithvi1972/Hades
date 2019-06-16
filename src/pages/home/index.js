import React from 'react';
import ParallaxSection from './sections/parallax';
import CardLayoutSection from './sections/cardLayout';
// import Separator from '../../components/separator/'

function Home() {
	return (
		<>
			{/*<Separator color={'#ffce00'} />*/}
			<ParallaxSection />
			{/*<Separator color={'#ffce00'} />*/}
			<CardLayoutSection />
			{/*<Separator color={'#ffce00'} />*/}
		</>
	);
}

export default Home;
