import React from 'react';
import './style.css';
import ProductCard from '../../../../components/cards/productCard';

const cards = [
	{title: 'esdrft', subTitle: 'ubhj ygbhn ybhujnk vgbh', image:'/img/intro-bck.jpeg'},
	{title: 'esdrft', subTitle: 'ubhj ygbhn ybhujnk vgbh', image:'/img/intro-bck.jpeg'},
	{title: 'esdrft', subTitle: 'ubhj ygbhn ybhujnk vgbh', image:'/img/intro-bck.jpeg'},
	{title: 'esdrft', subTitle: 'ubhj ygbhn ybhujnk vgbh', image:'/img/intro-bck.jpeg'},
];

function FilmSection() {
	return (
		<section className={'filmsSection'}>
			<h2 className={'filmsHead'}>Films</h2>
			<div className={'cardsWrapper'}>
				{cards.map(({ title, subTitle, image, onClick }) => (
					<ProductCard
						title={title}
						subTitle={subTitle}
						image={image}
						onClick={onClick}
					/>
				))}
			</div>
		</section>
	);
}

export default FilmSection;
