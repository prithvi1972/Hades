import React from 'react';
import { PrintCard } from '../components/PrintCard';
import { printAds } from '../config';

export function PrintAdsSection() {
	return (
		<div>
			{printAds.map(printAd => (
				<PrintCard {...printAd} />
			))}
		</div>
	);
}
