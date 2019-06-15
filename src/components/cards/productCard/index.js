import React from 'react';
import './style.css';

function ProductCard({ rowSpan = 1, title = '', subTitle = '', image = '' }) {
	return (
		<div className={rowSpan === 2 ? 'card card-2x' : 'card'}>
			<img className={'card-bck'} src={image} alt={title} />
			<div className={'overlay'}>
				<i className="card-play fab fa-youtube" />
				<h2 className={'title'}>{title}</h2>
				<h3 className={'sub-title'}>{subTitle}</h3>
			</div>
		</div>
	);
}

export default ProductCard;
