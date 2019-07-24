import React from 'react';

function BlogCard({ title = '', subTitle = '', image = '', onClick }) {
	return (
		<div className={'card'} onClick={onClick} title={title}>
			<img className={'card-bck'} src={image} alt={title} />
			<div className={'overlay'}>
				<i className="card-play fas fa-arrow-right" />
				<h2 className={'title'}>{title}</h2>
				<h3 className={'sub-title'}>{subTitle}</h3>
			</div>
		</div>
	);
}

export default BlogCard;
