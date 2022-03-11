import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Aboutme from "./components/pages/Aboutme";
import Portfolio from "./components/pages/Portfolio";
import Resume from "./components/pages/Resume";
import './styles/materialize.css';
import './styles/style.css';
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css'

function App() {
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
    }

    const handlePageChange = (page) =>setCurrentPage(page)

    return (
        <div>
            <Banner />
            <Navbar currentPage={currentPage} handlePageChange={handlePageChange}/>
            {renderPage()}
            {/* create a footer */}




        </div>
    )
}

export default App;