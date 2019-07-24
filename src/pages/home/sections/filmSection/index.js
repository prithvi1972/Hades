import React, { useState, useEffect } from 'react';
import './style.css';
import ProductCard from '../../../../components/cards/productCard';
import { grid } from './config';

function FilmSection() {
	const [youtubeUrl, setYoutubeUrl] = useState(null),
		youtubePlayer = youtubeUrl ? (
			<div className={'video-bck'} onClick={() => setYoutubeUrl(null)}>
				<div className={'youtube-frame'}>
					<iframe
						src={youtubeUrl}
						title={youtubeUrl}
						frameBorder="0"
						allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
						allowFullScreen
						style={{
							position: 'absolute',
							top: '0',
							left: '0',
							width: '100%',
							height: '100%',
						}}
					/>
				</div>
			</div>
		) : null;

	function handleBodyScroll() {
		document.body.style.overflow = youtubeUrl ? 'hidden' : 'scroll';
	}
	useEffect(handleBodyScroll);

	return (
		<section className={'filmsSection'} name="films">
			<h2 className={'filmsHead'}>Films</h2>
			<div className={'cardsWrapper'}>
				{grid.map(({ title, subTitle, image, url }) => (
					<ProductCard
						title={title}
						subTitle={subTitle}
						image={image}
						onClick={() => setYoutubeUrl(`${url}?autoplay=1`)}
					/>
				))}
			</div>
			{youtubePlayer}
		</section>
	);
}

export default FilmSection;
