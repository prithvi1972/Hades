import React from 'react';
import './style.css';
import bck from './res/bck.jpg';

function Footer() {
	return (
		<section className={'footer'}>
			<img src={bck} alt="typewriter" className={'footer-bck'} />
			<div className={'footer-contact'}>
				<h2 className={'sectionHead'}>Let's connect!</h2>
				<div className={'social-icons'}>
					<i className="fab fa-facebook-f" />
					<i className="fab fa-youtube" />
					<i className="fab fa-instagram" />
				</div>
				<form action="">
					<textarea name="message" className={'footer-message'} rows="5" placeholder={'Drop a message by...'} />
					<input type="submit" value={'Send'} className={'footer-submit'} />
				</form>
			</div>
		</section>
	);
}
export default Footer;
