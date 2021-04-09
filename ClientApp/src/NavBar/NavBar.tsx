import React, { useState, useEffect, useRef, MouseEvent } from 'react';
import './NavBar.scss';
import { Link } from 'react-router-dom';
import { Spin as Hamburger } from 'hamburger-react';

function NavBar() {
    const [selectedPage, setSelectedPage] = useState('null');
    const [mobileNavState, setMobileNavState] = useState('closed')
    const [isOpen, setOpen] = useState(false)

    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let handler = (event: any) => {
            if (menuRef.current !== null && !menuRef.current.contains(event.target)) {
                setMobileNavState("closed");
                setOpen(false);
            }
        };

        document.addEventListener("mousedown", handler);

        return () => {
            document.removeEventListener("mousedown", handler)
        }
    });

    return (
        <div>
            <nav className="web-nav-bar">
                <ul className="web-nav-bar-list">
                    <div className="page-headers">
                        <li className="web-nav-bar-list-item"><Link to="/" className={selectedPage == 'home' ? 'active' : 'inactive'} onClick={() => setSelectedPage('home')}>Home</Link></li>
                        <li className="web-nav-bar-list-item"><Link to="/getting-started" className={selectedPage == 'started' ? 'active' : 'inactive'} onClick={() => setSelectedPage('started')}>Getting Started</Link></li>
                        <li className="web-nav-bar-list-item"><Link to="/submit-sighting" className={selectedPage == 'submit-sighting' ? 'active' : 'inactive'} onClick={() => setSelectedPage('submit-sighting')}>Submit a Sighting</Link></li>
                        <li className="web-nav-bar-list-item"><Link to="/conservation" className={selectedPage == 'conservation' ? 'active' : 'inactive'} onClick={() => setSelectedPage('conservation')} >Conservation</Link></li>
                        {/* <li className="web-nav-bar-list-item"><Link to="/authetication/logout" className={selectedPage == 'logout' ? 'active' : 'inactive'} onClick={() => setSelectedPage('conservation')} >Logout</Link></li> */}
                    </div>
                </ul>
            </nav>

            <div ref={menuRef} className="mobile-nav-bar-container">
                <div className="mobile-nav-bar">
                    <a href="/" className="mobile-nav-bar-title"> Whale Spotting </a>
                    <div className={mobileNavState == 'open' ? 'open-nav-bar' : 'closed-nav-bar'}>
                        <a href="/" className={selectedPage == 'home' ? 'active' : 'inactive'} onClick={() => setSelectedPage('home')}>Home</a>
                        <a href="/getting-started" className={selectedPage == 'started' ? 'active' : 'inactive'} onClick={() => setSelectedPage('started')}>Getting Started</a>
                        <a href="/submit-sighting" className={selectedPage == 'submit-sighting' ? 'active' : 'inactive'} onClick={() => setSelectedPage('submit-sighting')}>Submit a Sighting</a>
                        <a href="/conservation" className={selectedPage == 'conservation' ? 'active' : 'inactive'} onClick={() => setSelectedPage('conservation')} >Conservation</a>
                        <a href="/whale-species" className={selectedPage == 'whale-species' ? 'active' : 'inactive'} onClick={() => setSelectedPage('whale-species')} >Whale Species</a>
                    </div>
                </div>

                <div className="icon" id="hamburger-menu">
                    <Hamburger toggled={isOpen} toggle={setOpen} label="Show menu" rounded onToggle={
                        () => {
                            if (mobileNavState == 'closed') {
                                setMobileNavState('open')
                            } else {
                                setMobileNavState('closed')
                            }
                        }} />
                </div>
            </div>

        </div>
    );
}

export { NavBar }