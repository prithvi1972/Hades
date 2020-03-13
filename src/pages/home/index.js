import React from 'react';
import IntroSection from './sections/introSection';
import AdSections from "./sections/adSections";
// import BlogSection from './sections/blogSection/index';

function Home() {
	return (
		<>
			<IntroSection />
			<AdSections/>
		</>
	);
}

export default Home;
