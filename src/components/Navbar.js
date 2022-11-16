import React from 'react';
import FileSaver from 'file-saver';
import M from 'materialize-css'


function Navbar({ currentPage, handlePageChange }) {

    return (
        <div>
            <div className="divider"></div>

            <nav className="nav-extended">
                <div className="nav-wrapper customColorNav">
                    <a
                        href="#Aboutme" onClick={() => handlePageChange('Aboutme')} className={currentPage === 'Aboutme'}
                    >
                        {/*CHANGE TO HTTPS WHEN SSL CERT IS THERE! */}
                        <img src="http://lelandbyrd.com/images/Artboard-1-copy-17color-36.png"
                            className="customColorNav logo" />
                    </a>
                    <a
                        // HAMBURGER ICON NOT WORKING IN MOBILE VIEW!!
                        href="#" data-target="mobile-demo" className="sidenav-trigger customColorNav"
                    >
                        <i className="material-icons customColorNav">menu</i>
                    </a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><a className="customColorNav" href="https://github.com/Byrdbass" target="_blank">Github</a></li>
                        <li><a className="customColorNav" href="https://www.linkedin.com/in/leland-byrd/" target="_blank">LinkedIn</a></li>
                        <li><a className="customColorNav" href="https://linktr.ee/byrdbass" target="_blank">Linktr.ee</a></li>
                    </ul>
                </div>
                <div className="nav-content customColorNav">
                    <ul className="tabs tabs-transparent">
                        <li className='tab customColorNav'>
                            <a href="#Portfolio" onClick={() => handlePageChange('Portfolio')}
                                className={currentPage === 'Portfolio'}>Portfolio
                            </a>
                        </li>
                        {/* need to move the onClick event to the Resume component along with it's function saveResume and it's import from file-saver */}
                        <li className="tab customColorNav">
                            <a href="#Resume" onClick={() => handlePageChange('Resume')}
                                className={currentPage === 'Resume'}>Resume
                            </a>
                        </li>
                        <li className="tab customColorNav">
                            <a href="#ContactForm" onClick={() => handlePageChange('ContactForm')}
                                className={currentPage === 'ContactForm'}>Contact
                            </a>
                        </li>
                        <li className="tab customColorNav"><a href="./assets/Poke-Weather/index.html" target="_blank">PokeWeather</a></li>
                        {/* <!-- <li className="tab"><a className="active" href="#test2">Repair Revolution</a></li> --> */}
                        <li className="tab customColorNav"><a href="https://byrdbass.github.io/passwordGenerator/" target="_blank">Password
                            Generator</a></li>
                    </ul>
                </div>
            </nav>

            <ul className="sidenav" id="mobile-demo">
                <li><a href="https://github.com/Byrdbass">Github</a></li>
                <li><a href="https://www.linkedin.com/in/leland-byrd/">LinkedIn</a></li>
                <li><a href="https://linktr.ee/byrdbass">Linktr.ee</a></li>
            </ul>
        </div>
    );
}

export default Navbar;
