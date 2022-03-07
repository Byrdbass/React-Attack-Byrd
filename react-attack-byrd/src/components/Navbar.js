import React from 'react';
import FileSaver from 'file-saver';


function Navbar() {
    const saveResume = () => {
        FileSaver.saveAs("../../public/LelandByrdResume030422.pdf", "leland-byrd-resume.pdf");
    };
    return (
        <div>
            <div className="divider"></div>

            <nav className="nav-extended">
                <div className="nav-wrapper customColorNav">
                    <a href="index.html" className="brand-logo"><img src="https://lelandbyrd.com/images/Artboard-1-copy-17color-36.png"
                        className="customColorNav logo" /></a>
                    <a href="#" data-target="mobile-demo" className="sidenav-trigger customColorNav">
                        <i className="material-icons customColorNav">menu</i></a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><a className="customColorNav" href="https://github.com/Byrdbass" target="_blank">Github</a></li>
                        <li><a className="customColorNav" href="https://www.linkedin.com/in/leland-byrd/" target="_blank">LinkedIn</a></li>
                        <li><a className="customColorNav" href="https://linktr.ee/byrdbass" target="_blank">Linktr.ee</a></li>
                    </ul>
                </div>
                <div className="nav-content customColorNav">
                    <ul className="tabs tabs-transparent">
                        <li className="tab customColorNav"><a href="./assets/Poke-Weather/index.html" target="_blank">PokeWeather</a></li>
                        {/* <!-- <li className="tab"><a className="active" href="#test2">Repair Revolution</a></li> --> */}
                        <li className="tab customColorNav"><a href="https://byrdbass.github.io/passwordGenerator/" target="_blank">Password
                            Generator</a></li>
                        <li className="tab customColorNav"><a className="resumeBtn" onClick={saveResume} target="_blank">Resume</a></li>
                    </ul>
                </div>
            </nav>

            <ul className="sidenav" id="mobile-demo">
                <li><a href="https://github.com/Byrdbass">Github</a></li>
                <li><a href="https://www.linkedin.com/in/leland-byrd/">LinkedIn</a></li>
                <li><a href="https://linktr.ee/byrdbass">Linktr.ee</a></li>
            </ul>
        </div>
    );
}

export default Navbar;
