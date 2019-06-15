import React from 'react';
import './style.css';
import { toggleSideNav } from '../sideNavigation/utils';

function Header() {
	return (
		<header className={'header'}>
			<i className="nav-link fas fa-search" />
			<i className="nav-link fas fa-bars" onClick={toggleSideNav} />
		</header>
	);
}
export default Header;
