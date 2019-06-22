import React from 'react';
import './style.css';

function IntroSection() {
	return (
		<section className={'introSection'}>
			<div className={'introContent'}>
				<div className={'mainHead'}>Montoo Bassi</div>
				<div className={'typewriter'}>
					<h1>Writer, Film Director, Lyricist, Adman</h1>
				</div>
			</div>
			<div className={'scrollDown'}>
				<i className={'downArr'} />
			</div>
		</section>
	);
}

export default IntroSection;
