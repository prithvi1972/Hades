import React from 'react';
import IntroSection from './sections/introSection';
import FilmSection from './sections/filmSection';
import BlogSection from './sections/blogSection/index';

function Home() {
	return (
		<>
			<IntroSection />
			<FilmSection />
			<BlogSection />
		</>
	);
}

export default Home;
