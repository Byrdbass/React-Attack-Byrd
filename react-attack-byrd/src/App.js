import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Aboutme from "./components/Aboutme";
import ProjectCards from "./components/ProjectCards";
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
        if (currentPage === 'ProjectCards') {
            return <ProjectCards />
        }
        // if (currentPage === 'Resume') {
        //     return <Resume />
        // }
    }
    return (
        <div>
            <Banner />
            <Navbar />
            {renderPage()}
            {/* create a footer */}




        </div>
    )
}

export default App;