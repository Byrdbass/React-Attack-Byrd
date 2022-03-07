import React from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Aboutme from "./components/Aboutme";
import ProjectCards from "./components/ProjectCards";

function App() {
    return (
        <div>
            <Banner />
            <Navbar />
            <Aboutme />
            <ProjectCards />


        </div>
    )
}

export default App;