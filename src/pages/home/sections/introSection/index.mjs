import React from 'react';
import './style.css';
import config from './config';

function IntroSection() {
	return (
		<section className="introSection">
			<img src={config.introImage.src} alt={config.introImage.alt} className="introImage" />
			<h1 className="introTitle">Hello, I'm Montoo Bassi</h1>
			<h2 className="introSubtitle">The creative Ad Maker</h2>
		</section>
	);
}

export default IntroSection;
