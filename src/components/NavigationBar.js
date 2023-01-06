import React from 'react';
import FileSaver from 'file-saver';
import M from 'materialize-css'
//import "../styles/style.css"
import { Navbar, Icon, NavItem } from 'react-materialize';


function NavigationBar({ currentPage, handlePageChange }) {
let lawnGrey = "#7C8A94"
    return (
        <div>
            <div className="divider"></div>
            <nav className="nav-extended customColorNav">
                <Navbar
                    brand={<a
                        onClick={() => handlePageChange('Aboutme')}
                        className={currentPage === 'Aboutme'} {..."customColorNav"}
                        style={{backgroundColor: lawnGrey}}
                        href="#Aboutme"
                    >
                        <img src="https://lelandbyrd.com/images/Artboard-1-copy-17color-36.png"
                            className="customColorNav logo" />
                    </a>
                    }
                    className={currentPage === 'Aboutme'}
                    style={{backgroundColor: lawnGrey}}
                    sidenav={<ul>
                        <li><a href="https://github.com/Byrdbass" target={"_blank"}>Github</a></li>
                        <li><a href="https://www.linkedin.com/in/leland-byrd/">LinkedIn</a></li>
                        <li><a href="https://linktr.ee/byrdbass">Linktr.ee</a></li>
                    </ul>}
                ></Navbar>
                <div className="customColorNav">
                    <a
                        href="#Aboutme" onClick={() => handlePageChange('Aboutme')} className={currentPage === 'Aboutme'}
                    >
                        <img src="https://lelandbyrd.com/images/Artboard-1-copy-17color-36.png"
                            className="customColorNav logo" />
                    </a>
                    {/* the href here to the side-nav trigger is not pulling up menu */}
                    <a
                        href="#"
                        data-target="mobile-demo" className="sidenav-trigger customColorNav"
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
                    </ul>
                </div>
            </nav>
            <ul className="sidenav" id="mobile-demo" href="#">
                <li><a href="https://github.com/Byrdbass">Github</a></li>
                <li><a href="https://www.linkedin.com/in/leland-byrd/">LinkedIn</a></li>
                <li><a href="https://linktr.ee/byrdbass">Linktr.ee</a></li>
            </ul>
        </div>
    );
}

export default NavigationBar;
