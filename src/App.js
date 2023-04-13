import { Routes, Route, Link, NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import Home from './pages/Home';
import Pets from './pages/Pets';
import React, { useState, useEffect } from 'react';

const App = () => {
    const [modalActive, setModalActive] = React.useState(false);
    const [windowSize, setWindowSize] = useState([window.innerWidth]);

    useEffect(() => {
        const handleWindowResize = () => {
            setWindowSize([window.innerWidth]);
        };
        window.addEventListener('resize', handleWindowResize);
        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    });

    let w = "";
    let d = "active"
    windowSize[0] > 1279 ? w = "inactive" : w = "active";

    function checkBurgerMenu() {
        modalActive ? setModalActive(false) : setModalActive(true);
        modalActive ? document.querySelector("body").classList.remove("scroll") : document.querySelector("body").classList.add("scroll");
    };

    return (
        <>
            <header>
                <div class="header">
                    <div class="container">
                        <div class="logo">
                            <Link to='Home'>
                                <h1 class="title">Cozy House</h1>
                            </Link>
                            <p class="subtitle">Shelter for pets in Boston</p>
                        </div>
                        <nav>
                            <ul class="list">
                                <li class="item">
                                    <NavLink to='Home'><HashLink smooth to='Home#about'>About the shelter</HashLink></NavLink>
                                </li>
                                <li class="item">
                                    <NavLink to='Pets'>Our pets</NavLink>
                                </li>
                                <li class="item">
                                    <HashLink smooth to='Home#help'>Help the shelter</HashLink>
                                </li>
                                <li class="item">
                                    <HashLink smooth to="Home#contacts">Contacts</HashLink>
                                </li>
                            </ul>
                        </nav>
                        <div className={modalActive ? "burger-menu bactive" : "burger-menu"} onClick={checkBurgerMenu}>
                            <div className="burger-button">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>

                        </div>
                    </div>
                </div>
            </header>
            <div className={modalActive ? "list-menu menu-active" : "list-menu"}>
                <ul>
                    <li class="item">
                        <NavLink to='Home'><HashLink smooth to='Home#about' onClick={checkBurgerMenu}>About the shelter</HashLink></NavLink>
                    </li>
                    <li class="item">
                        <NavLink to='Pets' onClick={checkBurgerMenu}>Our pets</NavLink>
                    </li>
                    <li class="item">
                        <HashLink smooth to='Home#help' onClick={checkBurgerMenu}>Help the shelter</HashLink>
                    </li>
                    <li class="item">
                        <HashLink smooth to="Home#contacts" onClick={checkBurgerMenu}>Contacts</HashLink>
                    </li>
                </ul>
            </div>
            <main class="main">
                <Routes>
                    <Route path='Home' element={<Home />} />
                    <Route path='Pets' element={<Pets width={w} active={w !== d} />} />
                    <Route path='*' element={<Home />} />
                </Routes>
            </main>
            <footer id="contacts">
                <div class="footer">
                    <div class="content">
                        <div class="contacts">
                            <h3>For questions and suggestions</h3>
                            <a href="https://mail.yandex.ru/" target="blank" rel="noopener">
                                <div class="item">
                                    <img src="icons/icon-email.svg" alt="mail" />
                                    <h4> email@shelter.com</h4>
                                </div>
                            </a>
                            <a href="tel:+136745677554">
                                <div class="item">
                                    <img src="icons/icon-phone.svg" alt="phone" />
                                    <h4>+13 674 567 75 54</h4>
                                </div>
                            </a>
                        </div>
                        <div class="locations">
                            <h3>We are waiting for your visit</h3>
                            <a href="https://www.google.com/maps/place/1+Centre+St+Terrace,+Boston,+MA+02119,+%D0%A1%D0%A8%D0%90/data=!4m2!3m1!1s0x89e37a29f109ad67:0x3c3f6a5c559c7586?sa=X&amp;ved=2ahUKEwiz-5qfxZ33AhWwxIsKHakhB0AQ8gF6BAgMEAE" target="blank" rel="noopener">
                                <div class="item">
                                    <img src="icons/icon-marker.svg" alt="marker" />
                                    <h4>1 Central Street, Boston (entrance from the store)</h4>
                                </div>
                            </a>
                            <a href="https://www.google.com/maps/place/18+S+Park+Cres,+London+SE6+1JW,+%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B1%D1%80%D0%B8%D1%82%D0%B0%D0%BD%D0%B8%D1%8F/data=!4m2!3m1!1s0x47d8a9e35f520529:0x8d1b5611767e32ec?sa=X&amp;ved=2ahUKEwjuxKfOxZ33AhUulIsKHYSzAhgQ8gF6BAgMEAE" target="blank" rel="noopener">
                                <div class="item">
                                    <img src="icons/icon-marker.svg" alt="marker" />
                                    <h4>18 South Park, London</h4>
                                </div>
                            </a>
                        </div>
                        <img src="images/footer-puppy.png" alt="puppy" />
                    </div>
                </div>
            </footer>
        </>
    )
};

export default App;