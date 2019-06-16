import React, { useState } from 'react';
import './style.css';
import { grid } from './config';
import ProductCard from '../../../../components/cards/productCard';

function CardLayoutSection() {
	const [youtubeUrl, setYoutubeUrl] = useState(null),
		youtubePlayer = youtubeUrl ? (
			<div className={'video-bck'} onClick={() => setYoutubeUrl(null)}>
				<iframe
					className={'youtube-frame'}
					src={youtubeUrl}
					title={youtubeUrl}
					width={904}
					height={723}
					frameBorder="0"
					allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
					allowFullScreen
				/>
			</div>
		) : null;

	return (
		<section>
			{/*<h2 className={'sectionHead'}>Films</h2>*/}
			<div className={'grid'}>
				{grid.map(grid => (
					<div className={'grid-col'}>
						{grid.map(({ rowSpan, image, title, subTitle, url }) => (
							<ProductCard
								rowSpan={rowSpan}
								image={image}
								title={title}
								subTitle={subTitle}
								onClick={() => setYoutubeUrl(url)}
							/>
						))}
					</div>
				))}
			</div>
			{youtubePlayer}
		</section>
	);
}
export default CardLayoutSection;
