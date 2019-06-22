import React from 'react';
import './style.css';

function Footer() {
	return (
		<section className={'footer'}>
			<span className={'footerDesc'}>&copy; MontooBassi.com 2019</span>
			<div className={'socialLinks'}>
				<i className="footerLink fab fa-facebook-f" />
				<i className="footerLink fab fa-youtube" />
				<i className="footerLink fab fa-instagram" />
			</div>
		</section>
	);
}
export default Footer;
