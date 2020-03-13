import React from 'react';
import './style.css';

export function PrintCard({ title = '', subTitle = '', image = '', url }) {
	return (
		<a href={url} className={'card'} title={title}>
			<img className={'card-bck'} src={image} alt={title} />
			<div className={'overlay'}>
				<i className="card-play fas fa-arrow-right" />
				<h2 className={'title'}>{title}</h2>
				<h3 className={'sub-title'}>{subTitle}</h3>
			</div>
		</a>
	);
}
