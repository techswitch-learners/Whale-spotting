// import React, { Component } from 'react';
import React, { useState, useEffect, useRef } from 'react';
import './NavBar.scss';
import { Link } from 'react-router-dom';

function NavBar() {
    const [selectedPage, setSelectedPage] = useState('home');

    return (
        <div>
            <nav className="navbar">
                <ul>
                    <li><Link to="/" className={selectedPage == 'home' ? 'active' : 'inactive'} onClick={() => setSelectedPage('home')}>Home</Link></li>
                    <li><Link to="/submit-sighting" className={selectedPage == 'submit-sighting' ? 'active' : 'inactive'} onClick={() => setSelectedPage('submit-sighting')}>Submit a Sighting</Link></li>
                    <li><Link to="/Conservation" className={selectedPage == 'conservation' ? 'active' : 'inactive'} onClick={() => setSelectedPage('conservation')} >Conservation</Link></li>
                    <li><Link to="/Started" className={selectedPage == 'started' ? 'active' : 'inactive'} onClick={() => setSelectedPage('started')}>Find a Whale!</Link></li>
                </ul>
            </nav>
        </div>

    );

}

export { NavBar }