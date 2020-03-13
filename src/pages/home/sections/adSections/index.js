import React, { useContext } from 'react';
import { EntitySelector } from './components/EntitySelector';
import { YoutubePlayer } from './components/YoutubePlayer';
import { StoreContext } from '../../../../store';
import { PrintAdsSection } from './printAdsSection';
import { FilmAdsSection } from './filmAdsSection';
import { RadioAdsSection } from './radioAdsSection';

function AdSections() {
	const { store } = useContext(StoreContext);
	return (
		<section>
			<EntitySelector />
			{[null, 1].includes(store.selectedEntityId) && <PrintAdsSection />}
			{[null, 2].includes(store.selectedEntityId) && <FilmAdsSection />}
			{[null, 3].includes(store.selectedEntityId) && <RadioAdsSection />}
			<YoutubePlayer />
		</section>
	);
}

export default AdSections;
