import React from 'react';
import './style.css';

function Separator({ color }) {
	return color ? (
		<div className="section-separator" style={{ backgroundColor: `${color}` }} />
	) : (
		<div className={'section-separator'} />
	);
}

export default Separator;
