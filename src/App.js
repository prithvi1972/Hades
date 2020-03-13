import React, { useState } from 'react';
import SideNavigation from './components/sideNavigation';
// import Header from './components/header';
import Footer from './components/footer';
import Home from './pages/home';
import { StoreContext } from './store';

function App() {
	const [store, setStore] = useState({
		selectedEntityId: null,
		youtubePlayer: { visible: false, url: null },
	});

	return (
		<StoreContext.Provider value={{ store, setStore }}>
			<SideNavigation />
			{/*<Header />*/}
			<Home />
			<Footer />
		</StoreContext.Provider>
	);
}

export default App;
