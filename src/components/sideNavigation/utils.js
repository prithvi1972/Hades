export function toggleSideNav() {
	const sideNav = document.getElementById('sidenav'),
		overlay = document.getElementById('sidenav-overlay');
	sideNav.classList.toggle('sidenav-show');
	console.log(overlay.style.display);
	overlay.style.display = ['none', ''].indexOf(overlay.style.display) !== -1 ? 'block' : 'none';
	document.body.style.overflow = document.body.style.overflow === 'hidden' ? 'scroll' : 'hidden';
}
