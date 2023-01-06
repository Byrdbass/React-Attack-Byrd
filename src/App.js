import React, { useState } from "react";
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
    const [currentPage, setCurrentPage] = useState('Aboutme')
    //constant for the states of the about me section using useState() method
    //constant for the projectsCards/portfolio section to appear()
    //resume
    const renderPage = () => {
        if (currentPage === 'Aboutme') {
            return <Aboutme />;
        }
        if (currentPage === 'Portfolio') {
            return <Portfolio />
        }
        if (currentPage === 'Resume') {
            return <Resume />
        } 
        if (currentPage === 'ContactForm') {
            return <ContactForm />
        }
    }

    const handlePageChange = (page) => setCurrentPage(page)

    return (
        <div style={{backgroundColor: beauBlue}}>
            <Banner />
            <NavigationBar currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
            <Footer />




        </div>
    )
}

export default App;