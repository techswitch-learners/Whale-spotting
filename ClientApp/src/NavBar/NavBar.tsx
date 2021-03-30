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
                <ul>
                    <div className="page-headers">
                    <li><Link to="/" className={selectedPage == 'home' ? 'active' : 'inactive'} onClick={() => setSelectedPage('home')}>Home</Link></li>
                    <li><Link to="/submit-sighting" className={selectedPage == 'submit-sighting' ? 'active' : 'inactive'} onClick={() => setSelectedPage('submit-sighting')}>Submit a Sighting</Link></li>
                    <li><Link to="/Conservation" className={selectedPage == 'conservation' ? 'active' : 'inactive'} onClick={() => setSelectedPage('conservation')} >Conservation</Link></li>
                    <li><Link to="/Started" className={selectedPage == 'started' ? 'active' : 'inactive'} onClick={() => setSelectedPage('started')}>Find a Whale!</Link></li>
                    </div>
                </ul>
            </nav>

            <div ref={menuRef} className="mobile-nav-bar-container">
                <div className="mobile-nav-bar">
                    <a href="/" className="mobile-nav-bar-title"> Whale Spotting </a>
                    <div className={mobileNavState == 'open' ? 'open-nav-bar' : 'closed-nav-bar'}>
                        <a href="/" className={selectedPage == 'home' ? 'active' : 'inactive'} onClick={() => setSelectedPage('home')}>Home</a>
                        <a href="/submit-sighting" className={selectedPage == 'submit-sighting' ? 'active' : 'inactive'} onClick={() => setSelectedPage('submit-sighting')}>Submit a Sighting</a>
                        <a href="/Conservation" className={selectedPage == 'conservation' ? 'active' : 'inactive'} onClick={() => setSelectedPage('conservation')} >Conservation</a>
                        <a href="/Started" className={selectedPage == 'started' ? 'active' : 'inactive'} onClick={() => setSelectedPage('started')}>Find a Whale!</a>
                    </div>
                </div>
              
                <div className="icon">
                    <Hamburger toggled={isOpen} toggle={setOpen} label="Show menu" rounded onToggle={
                        () => { if (mobileNavState=='closed'){
                            setMobileNavState('open')
                        } else {
                            setMobileNavState('closed')
                        }
                    }}  />
                </div>
            </div>
        </div>
    );
}

export { NavBar }