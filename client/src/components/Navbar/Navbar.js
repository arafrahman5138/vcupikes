import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../CustomButton/Button';
import './Navbar.css';
import { ImMenu } from 'react-icons/im';
import { IconButton } from '@material-ui/core';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };
    useEffect(() => {
        showButton();
    }, []);
    window.addEventListener('resize', showButton);
    return (
        <>
          <nav className="navbar">
          <div className="navbar-container">
             <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                 <img alt="" className="fa-typo3" src="images/PIKE_Rev.png" height="35px" width="125px"/> 
             </Link>
             {/* <i className='fab fa-typo3'/> */}
             <div className = "menu-icon" onClick={handleClick}> 
                {/* <i className={click ? 'fas fa-times' : 'fas fa-bars'} /> */}
                <IconButton><ImMenu/></IconButton>
             </div>
             <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                 <li className='nav-item'>
                 <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                 Home 
                </Link>
                 </li>
                 <li className='nav-item'>
                 <Link to="/rushevents" className="nav-links" onClick={closeMobileMenu}>
                 Rush Events 
                </Link>
                 </li>
                 <li className='nav-item'>
                 <Link to="/rushform" className="nav-links" onClick={closeMobileMenu}>
                 Rush Form 
                </Link>
                 </li>
                 <li className='nav-item'>
                 <a href="http://firemanschallenge.org/" target="_blank" className="nav-links" onClick={closeMobileMenu}>
                 Fireman's Challenge
                </a>
                 </li>
                 {/* <li className='nav-item'>
                 <Link to="/profile" className="nav-links-mobile" onClick={closeMobileMenu}>
                 Profile 
                </Link>
                 </li> */}
             </ul>
             {/* {button && <Button buttonStyle='btn--outline' path='/profile'>Profile</Button>} */}
          </div>
          </nav>
        </>
    )
}

export default Navbar
