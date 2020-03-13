import React, { useContext, useEffect } from 'react';
import { StoreContext } from '../../../../../../store';
import './style.css';

export function YoutubePlayer() {
	const { store, setStore } = useContext(StoreContext),
		{ visible, url } = store.youtubePlayer;

	function handleBodyScroll() {
		document.body.style.overflow = visible ? 'hidden' : 'scroll';
	}
	useEffect(handleBodyScroll);

	return (
		visible &&
		url && (
			<div
				className="video-bck"
				onClick={() => setStore({ ...store, youtubePlayer: { visible: false, url: null } })}
			>
				<div className="youtube-frame">
					<iframe
						src={url}
						title={url}
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
		)
	);
}
