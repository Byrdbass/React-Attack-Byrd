import React from 'react';
import FileSaver from 'file-saver';
import M from 'materialize-css'
//import "../styles/style.css"
import Portfolio from './pages/Portfolio'
import { Navbar, NavItem, Tabs, Tab } from 'react-materialize';


function NavigationBar({ currentPage, handlePageChange }) {
    const lawnGrey = "#7C8A94"
    const right = 'right'
    return (
        <div>
            <div className="divider"></div>
            <nav className="nav-extended customColorNav">
                <Navbar

                    alignLinks="right"
                    className={currentPage === 'Aboutme'}
                    style={{ backgroundColor: lawnGrey }}

                    brand={<a
                        onClick={() => handlePageChange('Aboutme')}
                        className={currentPage === 'Aboutme'}
                        style={{ backgroundColor: lawnGrey }}
                        href="#Aboutme"
                    >
                        <img src="https://lelandbyrd.com/images/Artboard-1-copy-17color-36.png"
                            className="customColorNav logo" />
                    </a>
                    }

                    extendWith={<Tabs className="tabs-transparent" scope="tabs-13">
                        <Tab className="white-text"
                            options={{
                                duration: 300,
                                onShow: null,
                                responsiveThreshold: Infinity,
                                swipeable: false
                            }}
                            title="Portfolio">
                                <Portfolio/>
                        
                        </Tab>
                        <Tab active className="white-text"
                            options={{
                                duration: 300,
                                onShow: null,
                                responsiveThreshold: Infinity,
                                swipeable: false
                            }}
                            title="test 2">Test 2</Tab>
                        <Tab className="white-text" disabled
                            options={{
                                duration: 300,
                                onShow: null,
                                responsiveThreshold: Infinity,
                                swipeable: false
                            }}
                            title="disabled tab">Disabled Tab</Tab>
                        <Tab className="white-text"
                            options={{
                                duration: 300,
                                onShow: null,
                                responsiveThreshold: Infinity,
                                swipeable: false
                            }}
                            title="test 4">Test 4</Tab>
                    </Tabs>}

                    sidenav={<ul>
                        <li><a href="https://github.com/Byrdbass" target={"_blank"}>Github</a></li>
                        <li><a href="https://www.linkedin.com/in/leland-byrd/" target={"_blank"}>LinkedIn</a></li>
                        <li><a href="https://linktr.ee/byrdbass" target={"_blank"}>Linktr.ee</a></li>
                    </ul>}
                >
                    <ul className="tabs tabs-transparent"
                    // style={{alightItems: center}}
                    >
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
                    <NavItem style={{ float: right }} href="https://github.com/Byrdbass" target={"_blank"}> Github </NavItem>
                    <NavItem href="https://www.linkedin.com/in/leland-byrd/" target={"_blank"}>LinkedIn</NavItem>
                    <NavItem href="https://linktr.ee/byrdbass" target={"_blank"}>Linktr.ee</NavItem>
                </Navbar>
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
