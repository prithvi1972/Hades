import React from 'react';
import './style.css';
import { toggleSideNav } from './utils';
import profile from './res/profile.jpg';

function SideNavigation() {
	return (
		<>
			<div id={'sidenav-overlay'} onClick={toggleSideNav} />
			<nav className={'sidenav'} id={'sidenav'}>
				<img src={profile} alt={'profile'} className={'logo'} />
				<span className={'sideNavName'}>Moonto Bassi</span>
				<div className={'navItem'}>Films</div>
				<div className={'navItem'}>Blog</div>
				<div className={'navItem'}>Connect</div>
			</nav>
		</>
	);
}
export default SideNavigation;
