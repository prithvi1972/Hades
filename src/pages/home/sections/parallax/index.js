import React, { useEffect } from 'react';
import './style.css';
import mouseParallax from './utils/mouseParallax';
import { layers } from './config';

import bck from './res/bck.jpg';
import img1 from './res/1.png';
import img2 from './res/2.png';
import img3 from './res/3.png';
import img4 from './res/4.png';
import img5 from './res/5.png';
import img6 from './res/6.png';
import img7 from './res/7.png';
import img8 from './res/8.png';
// import img9 from './res/9.png';

function initParallax() {
	if (!document) return;
	const parallaxBox = document.getElementById('box'),
		{ left, top } = layers.reduce(
			(acc, layer) => ({
				left: [...acc.left, document.getElementById(layer.id).offsetLeft],
				top: [...acc.top, document.getElementById(layer.id).offsetTop],
			}),
			{ left: [], top: [] },
		);

	parallaxBox.onmousemove = function(event) {
		event = event || window.event;
		const x = event.clientX - parallaxBox.offsetLeft,
			y = event.clientY - parallaxBox.offsetTop;
		layers.forEach((layer, i) => {
			mouseParallax(layer.id, left[i], top[i], x, y, layer.speed);
		});
	};
}

function ParallaxSection() {
	useEffect(initParallax, []);
	return (
		<section id="box">
			<img src={bck} alt="typewriter" id="parallaxBck" />
			<div className="layer" id="l1">
				<img src={img1} id="img1" alt="" />
			</div>
			<div className="layer" id="l2">
				<img src={img2} id="img2" alt="" />
			</div>
			<div className="layer" id="l3">
				<img src={img3} id="img3" alt="" />
			</div>
			<div className="layer" id="l4">
				<img src={img4} id="img4" alt="" />
			</div>
			<div className="layer" id="l5">
				<img src={img5} id="img5" alt="" />
			</div>
			<div className="layer" id="l6">
				<img src={img6} id="img6" alt="" />
			</div>
			<div className="layer" id="l7">
				<img src={img7} id="img7" alt="" />
			</div>
			<div className="layer" id="l8">
				<img src={img8} id="img8" alt="" />
			</div>
			<div className="layer" id="l9">
				{/*<img src={img9} id="img9" alt="" />*/}
				<div className="heading-main">
					<div className="heading-square-inner"> Heading </div>
				</div>
			</div>
		</section>
	);
}
export default ParallaxSection;
