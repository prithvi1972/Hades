import React from 'react';
import SideNavigation from './components/sideNavigation';
// import Header from './components/header';
// import Footer from './components/footer';
import Home from './pages/home';
import './App.css';

function App() {
	return (
		<>
			<SideNavigation />
			{/*<Header />*/}
			<Home />
			{/*<Footer />*/}
		</>
	);
}

export default App;
