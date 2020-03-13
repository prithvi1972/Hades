import React from 'react';
import './style.css';

function Footer() {
	return (
		<section className={'footer'}>
			<div className={'footerLeft'}>
				<h4>Lorel Ipsum Dolor Sit Amet</h4>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat cum vitae fugit est, eaque ea, quod
				pariatur numquam
			</div>
			<div className={'footerMiddle'} />
			<div className={'footerRight'}>
				<i className="footerLink fab fa-facebook-f" />
				<i className="footerLink fab fa-youtube" />
				<i className="footerLink fab fa-pinterest-p" />
				<div className="footerRightBottomInfo">Copyright 2020 / All rights reserved</div>
				<div className="footerRightBottomInfo">
					Designed by <b>spyfly</b>
				</div>
			</div>
		</section>
	);
}
export default Footer;
