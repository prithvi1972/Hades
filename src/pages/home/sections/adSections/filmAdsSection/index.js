import React, { useContext } from 'react';
import { VideoCard } from '../components/VideoCard';
import { filmAds } from '../config';
import { StoreContext } from '../../../../../store';

export function FilmAdsSection() {
	const { store, setStore } = useContext(StoreContext);
	return (
		<div>
			{filmAds.map(({ title, subTitle, image, url }) => (
				<VideoCard
					{...{ title, subTitle, image }}
					onClick={() => {
						setStore({ ...store, youtubePlayer: { visible: true, url: `${url}?autoplay=1` } });
					}}
				/>
			))}
		</div>
	);
}
