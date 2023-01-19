import React, { useState, useEffect } from 'react';
import FileSaver from 'file-saver';
import M from 'materialize-css'
// import "../styles/style.css"
import Portfolio from './pages/Portfolio'
import Resume from './pages/Resume'
import ContactFor from './pages/ContactForm';
import Aboutme from './pages/Aboutme';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navbar, NavItem, Tabs, Tab, Dropdown, Icon, Divider, Button } from 'react-materialize';
import ContactForm from './pages/ContactForm';


function NavigationBar() {
    const lawnGrey = "#7C8A94"

    return (

        <div>
            <div className="divider"></div>
            <nav className="nav-extended customColorNav">

                <Navbar
                    alignLinks="right"
                    className={'Aboutme'}
                    style={{ backgroundColor: lawnGrey }}
                    brand={<a
                        style={{ backgroundColor: lawnGrey }}
                        href="https://LelandByrd.com"
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
                            title="About Me">
                            <Aboutme />
                        </Tab>
                        <Tab className="white-text"
                            options={{
                                duration: 300,
                                onShow: null,
                                responsiveThreshold: Infinity,
                                swipeable: false
                            }}
                            title="Portfolio">
                            <Dropdown
                                id="Dropdown_8"
                                options={{
                                    alignment: 'center',
                                    autoTrigger: true,
                                    closeOnClick: true,
                                    constrainWidth: true,
                                    container: null,
                                    coverTrigger: true,
                                    hover: false,
                                    inDuration: 150,
                                    onCloseEnd: null,
                                    onCloseStart: null,
                                    onOpenEnd: null,
                                    onOpenStart: null,
                                    outDuration: 250
                                }}
                                trigger={<Button node="button">Full Stack Projects</Button>}
                            >
                               <Portfolio/>
                                <a href="#">
                                    two
                                </a>
                                <Divider />
                                <a href="#">
                                    three
                                </a>
                                <a href="#">
                                    <Icon>
                                        view_module
                                    </Icon>
                                    four
                                </a>
                                <a href="#">
                                    <Icon>
                                        cloud
                                    </Icon>
                                    {' '}five
                                </a>
                            </Dropdown>
                        </Tab>

                        {/* 
                        <Tab active className="white-text"
                            options={{
                                duration: 300,
                                onShow: null,
                                responsiveThreshold: Infinity,
                                swipeable: false
                            }}
                            title="Resume">
                            <Resume />
                        </Tab> */}
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
        </div>


    );
}

export default NavigationBar;
