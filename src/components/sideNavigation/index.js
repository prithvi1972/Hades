import React from 'react';
import './style.css';
import {toggleSideNav} from "./utils";

function SideNavigation() {
	return (
		<>
			<div id={'sidenav-overlay'} onClick={toggleSideNav} />
			<nav className={'sidenav'} id={'sidenav'}>
				<div className={'logo'}>logo</div>
				<div className={'navItem'}>Item 1</div>
				<div className={'navItem'}>Item 1</div>
				<div className={'navItem'}>Item 1</div>
			</nav>
		</>
	);
}
export default SideNavigation;
