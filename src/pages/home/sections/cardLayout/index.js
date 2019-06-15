import React from 'react';
import './style.css';
import { grid } from './config';
import ProductCard from '../../../../components/cards/productCard';

function CardLayoutSection() {
	return (
		<section>
			<h2 className={'sectionHead'}>Written & Directed By...</h2>
			<div className={'grid'}>
				{grid.map(grid => (
					<div className={'grid-col'}>
						{grid.map(({ rowSpan, image, title, subTitle }) => (
							<ProductCard
								rowSpan={rowSpan}
								image={image}
								title={title}
								subTitle={subTitle}
							/>
						))}
					</div>
				))}
			</div>
		</section>
	);
}
export default CardLayoutSection;
