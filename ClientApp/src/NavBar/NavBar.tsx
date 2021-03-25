// import React, { Component } from 'react';
import React, { useState, useEffect, useRef } from 'react';
import './NavBar.scss';
import { Link } from 'react-router-dom';

function NavBar() {
    const [selectedPage, setSelectedPage] = useState('home');

    return (
        <header>
        <div>
            <nav>
                <ul>
                    <li><Link to="/" className={selectedPage == 'home' ? 'active' : 'inactive'} onClick={() => setSelectedPage('home')}>Home</Link></li>
                    <li><Link to="/SubmitSighting" className={selectedPage == 'submitsighting' ? 'active' : 'inactive'} onClick={() => setSelectedPage('submitsighting')}>Submit a Sighting</Link></li>
                    <li><Link to="/Conservation" className={selectedPage == 'conservation' ? 'active' : 'inactive'} onClick={() => setSelectedPage('conservation')} >Conservation</Link></li>
                    <li><Link to="/Started" className={selectedPage == 'started' ? 'active' : 'inactive'} onClick={() => setSelectedPage('started')}>Find a Whale!</Link></li>
                    
                </ul>
            </nav>
        </div>
        </header>
    );

}

export { NavBar }