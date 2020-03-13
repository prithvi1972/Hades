import React from 'react';
import './style.css';

export function VideoCard({ title = '', subTitle = '', image = '', onClick }) {
	return (
		<div className={'card'} onClick={onClick} title={title}>
			<img className={'card-bck'} src={image} alt={title} />
			<div className={'overlay'}>
				<i className="card-play fab fa-youtube" />
				<h2 className={'title'}>{title}</h2>
				<h3 className={'sub-title'}>{subTitle}</h3>
			</div>
		</div>
	);
}
