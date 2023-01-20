import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from "./components/NavigationBar";
import Banner from "./components/Banner";
import Aboutme from "./components/pages/Aboutme";
import Portfolio from "./components/pages/Portfolio";
import Resume from "./components/pages/Resume";
//import './styles/materialize.css';
import './styles/style.css';
import 'materialize-css/dist/css/materialize.min.css'
//import M from 'materialize-css'
import Footer from "./components/Footer";
import ContactForm from "./components/pages/ContactForm";

function App() {
    const beauBlue = "#BCD1E0"
    //constant for the states of the about me section using useState() method
    //constant for the projectsCards/portfolio section to appear()
    //resume
    const [currentPage, setCurrentPage] = useState(false);

    const renderPage =() => {
        if (currentPage === 'aboutme') {
            return <Aboutme/>
        }
        if (currentPage === 'portfolio') {
            return <Portfolio/>
        }
        if (currentPage === 'contactform') {
            return <ContactForm/>
        }
    }

    const handlePageChange = (page) => setCurrentPage(page);

    return (

        <div style={{backgroundColor: beauBlue}}>
            <Banner />

            <NavigationBar currentPage={currentPage} handlePageChange={handlePageChange}/>
            {renderPage()}

            <Footer />
        </div>

    )
}

export default App;