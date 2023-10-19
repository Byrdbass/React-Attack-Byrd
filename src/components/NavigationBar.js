import React, { useState, useEffect } from "react";
import FileSaver from "file-saver";
import M from "materialize-css";
// import "../styles/style.css"
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";
import ContactFor from "./pages/ContactForm";
import Aboutme from "./pages/Aboutme";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import {
  Navbar,
  NavItem,
  Tabs,
  Tab,
  Dropdown,
  Icon,
  Divider,
  Button,
  Col,
  Row,
} from "react-materialize";
import ContactForm from "./pages/ContactForm";

function NavigationBar({ currentPage, handlePageChange }) {
  const lawnGrey = "#7C8A94";
  //add use state here to test change in tab page changes
  return (
    <div>
      <div className="divider"></div>
      <nav className="nav-extended customColorNav">
        <Navbar
          alignLinks="right"
          className={"Aboutme"}
          style={{ backgroundColor: lawnGrey }}
          brand={
            <a
              style={{ backgroundColor: lawnGrey }}
              href="https://LelandByrd.com"
            >
              <img
                src="https://lelandbyrd.com/images/Artboard-1-copy-17color-36.png"
                className="customColorNav logo"
              />
            </a>
          }
          extendWith={
            <Tabs className="tabs-transparent" scope="tabs-13">
              <Tab title="Portfolio">
                <Portfolio />
              </Tab>
              <Tab title="Resume">
                <Resume />
              </Tab>
            </Tabs>
          }
          sidenav={
            <ul>
              <li>
                <a href="https://github.com/Byrdbass" target={"_blank"}>
                  Github
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/leland-byrd/"
                  target={"_blank"}
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://linktr.ee/byrdbass" target={"_blank"}>
                  Linktr.ee
                </a>
              </li>
            </ul>
          }
        >
          <NavItem href="https://github.com/Byrdbass" target={"_blank"}>
            {" "}
            Github{" "}
          </NavItem>
          <NavItem
            href="https://www.linkedin.com/in/leland-byrd/"
            target={"_blank"}
          >
            LinkedIn
          </NavItem>
          <NavItem href="https://linktr.ee/byrdbass" target={"_blank"}>
            Linktr.ee
          </NavItem>
        </Navbar>
      </nav>
    </div>
  );
}

export default NavigationBar;
