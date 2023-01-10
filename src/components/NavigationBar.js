import React from 'react';
import FileSaver from 'file-saver';
import M from 'materialize-css'
//import "../styles/style.css"
import Portfolio from './pages/Portfolio'
import Resume from './pages/Resume'
import ContactFor from './pages/ContactForm';
import Aboutme from './pages/Aboutme';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navbar, NavItem, Tabs, Tab } from 'react-materialize';
import ContactForm from './pages/ContactForm';


function NavigationBar({ currentPage, handlePageChange }) {
    const lawnGrey = "#7C8A94"
    return (
       
                <div>
                     {/* <Router>
            <Routes>
                <Route path="/" element = {<Aboutme/>}></Route> */}
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
                                    title="Portfolio"
                                    // this doesn't work! - need to clear out when Logo is clicked
                                    onClick={() => currentPage == Portfolio}>
                                    <Portfolio />
                                </Tab>
                                <Tab active className="white-text"
                                    options={{
                                        duration: 300,
                                        onShow: null,
                                        responsiveThreshold: Infinity,
                                        swipeable: false
                                    }}
                                    title="Resume">
                                    <Resume />
                                </Tab>
                                <Tab className="white-text"
                                    options={{
                                        duration: 300,
                                        onShow: null,
                                        responsiveThreshold: Infinity,
                                        swipeable: false
                                    }}
                                    title="Contact Form">
                                    <ContactForm />
                                </Tab>
                                <Tab className="white-text"
                                    options={{
                                        duration: 300,
                                        onShow: null,
                                        responsiveThreshold: Infinity,
                                        swipeable: false
                                    }}
                                    title="About Me">
                                    <Aboutme />
                                </Tab>
                            </Tabs>}

                            sidenav={<ul>
                                <li><a href="https://github.com/Byrdbass" target={"_blank"}>Github</a></li>
                                <li><a href="https://www.linkedin.com/in/leland-byrd/" target={"_blank"}>LinkedIn</a></li>
                                <li><a href="https://linktr.ee/byrdbass" target={"_blank"}>Linktr.ee</a></li>
                            </ul>}
                        >
                            <NavItem href="https://github.com/Byrdbass" target={"_blank"}> Github </NavItem>
                            <NavItem href="https://www.linkedin.com/in/leland-byrd/" target={"_blank"}>LinkedIn</NavItem>
                            <NavItem href="https://linktr.ee/byrdbass" target={"_blank"}>Linktr.ee</NavItem>
                        </Navbar>
                    </nav>
                    {/* </Routes>
                    </Router> */}
                </div>
            
        
    );
}

export default NavigationBar;
