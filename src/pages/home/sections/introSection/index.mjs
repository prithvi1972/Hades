import React from 'react';
import './style.css';

function IntroSection() {
	return (
		<section className={'introSection'}>
			<div className={'introContent'}>
				<div className={'mainHead'}>Prithvi Anand</div>
				<div className={'typewriter'}>
					<h1>Student | UI/UX Developer | Freelancer</h1>
				</div>
			</div>
			<div className={'scrollDown'}>
				<i className={'downArr'}/>
			</div>
		</section>
	);
}

export default IntroSection;
