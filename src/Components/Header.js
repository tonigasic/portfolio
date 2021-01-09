import React, {useEffect, useRef, useState} from 'react';
import '../assets/css/Header.css';
import {Link} from "react-router-dom";
import Logo from '../assets/images/my-logo.png';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

function Header({tab}) {
    const [active, setActive] = useState(tab);
    const [toogleMenu, setToogleMenu] = useState(false);
    const mobileNavBarRef = useRef();

    useEffect(() => {
        setActive(tab);
    }, [tab])

    const handleClickOutside = (event) => {
        if (mobileNavBarRef.current && !mobileNavBarRef.current.contains(event.target)) {
            setToogleMenu(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    });

    return (
        <div className="header">
            <Link to="/">
                <img className="header__logo" src={Logo} alt=""/>
            </Link>
            <div className="header__nav">
                <div className="header__option">
                    <Link to={'/'}>
                        <span className={active === 'home' ? 'active' : ''} onClick={(e) => setActive('home')}>
                            <span>Home</span>
                        </span>
                    </Link>
                </div>
                <div className="header__option">
                    <Link to={'/about'}>
                        <span className={active === 'about' ? 'active' : ''} onClick={(e) => setActive('about')}>
                            <span>About Me</span>
                        </span>
                    </Link>
                </div>
                <div className="header__option">
                    <Link to={'/skills'}>
                        <span className={active === 'skills' ? 'active' : ''} onClick={(e) => setActive('skills')}>
                            <span>My Skills</span>
                        </span>
                    </Link>
                </div>
                <div className="header__option">
                    <Link to={'/work'}>
                        <span className={active === 'work' ? 'active' : ''} onClick={(e) => setActive('work')}>
                            <span>My Work</span>
                        </span>
                    </Link>
                </div>
                <div className="header__option">
                    <Link to={'/contact'}>
                        <span className={active === 'contact' ? 'active' : ''} onClick={(e) => setActive('contact')}>
                            <span>Contact Me</span>
                        </span>
                    </Link>
                </div>
            </div>
            <div className="header__navMobile">
                <MenuIcon fontSize="large" onClick={() => setToogleMenu(!toogleMenu)}/>
                <div ref={mobileNavBarRef} className={"header__navMobileContainer " + (toogleMenu ? "showBurgerMenu" : "hideBurgerMenu")}>
                    { toogleMenu ?
                        <div>
                            <div className="header__navMobileContainerClose">
                                <CloseIcon onClick={() => setToogleMenu(!toogleMenu)}/>
                            </div>
                            <div className="header__navMobileOption">
                                <Link to={'/'} onClick={() => setToogleMenu(!toogleMenu)}>
                                    <span className={active === 'home' ? 'active' : ''} onClick={(e) => setActive('home')}>
                                        <span>Home</span>
                                    </span>
                                </Link>
                            </div>
                            <div className="header__navMobileOption">
                                <Link to={'/about'} onClick={() => setToogleMenu(!toogleMenu)}>
                                    <span className={active === 'about' ? 'active' : ''} onClick={(e) => setActive('about')}>
                                        <span>About Me</span>
                                    </span>
                                </Link>
                            </div>
                            <div className="header__navMobileOption">
                                <Link to={'/skills'} onClick={() => setToogleMenu(!toogleMenu)}>
                                    <span className={active === 'skills' ? 'active' : ''} onClick={(e) => setActive('skills')}>
                                        <span>My Skills</span>
                                    </span>
                                </Link>
                            </div>
                            <div className="header__navMobileOption">
                                <Link to={'/work'} onClick={() => setToogleMenu(!toogleMenu)}>
                                    <span className={active === 'work' ? 'active' : ''} onClick={(e) => setActive('work')}>
                                        <span>My Work</span>
                                    </span>
                                </Link>
                            </div>
                            <div className="header__navMobileOption">
                                <Link to={'/contact'} onClick={() => setToogleMenu(!toogleMenu)}>
                                    <span className={active === 'contact' ? 'active' : ''} onClick={(e) => setActive('contact')}>
                                        <span>Contact Me</span>
                                    </span>
                                </Link>
                            </div>
                        </div>
                        :
                        ''
                    }
                </div>
            </div>
        </div>
    );
}

export default Header;
