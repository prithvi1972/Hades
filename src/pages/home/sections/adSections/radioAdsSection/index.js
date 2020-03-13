import React from 'react';
import { PrintCard } from '../components/PrintCard';
import { radioAds } from '../config';

export function RadioAdsSection() {
	return (
		<div>
			{radioAds.map(printAd => (
				<PrintCard {...printAd} />
			))}
		</div>
	);
}
