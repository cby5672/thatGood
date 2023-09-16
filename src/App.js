import React, { useEffect } from 'react';
import Home from './components/Home';
import Information from './components/Information';
import Move from './components/Move';
import PlayList from './components/PlayList';
import Gallery from './components/Gallery';
import Place from './components/Place';
import Bus from './components/Bus';
import Family from './components/Family';
import Account from './components/Account';
import Footer from './components/Footer';

import './App.css';
import './Button.scss'

function App() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="container">
            <link
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/gh/FortAwesome/Font-Awesome@5.14.0/css/all.min.css"
            />
            <Home />
            <Family />
            <Information />
            {/* <Move /> */}
            <PlayList />
            <Gallery />
            {/* <Account /> */}
            {/* <Bus /> */}
            <Place />
            <Footer />
        </div>
    );
}

export default App;
