import React from 'react';
import '../styles/materialize.css';
import '../styles/style.css';
import '../utils/materialize.js'
import M from 'materialize-css'

function Navbar() {
    return (
        <div>
            <div class="divider"></div>

            <nav class="nav-extended">
                <div class="nav-wrapper customColorNav">
                    <a href="index.html" class="brand-logo"><img src="./images/Artboard-1-copy-17color-36.png"
                        class="customColorNav logo" /></a>
                    <a href="#" data-target="mobile-demo" class="sidenav-trigger customColorNav">
                        <i class="material-icons customColorNav">menu</i></a>
                    <ul id="nav-mobile" class="right hide-on-med-and-down">
                        <li><a class="customColorNav" href="https://github.com/Byrdbass" target="_blank">Github</a></li>
                        <li><a class="customColorNav" href="https://www.linkedin.com/in/leland-byrd/" target="_blank">LinkedIn</a></li>
                        <li><a class="customColorNav" href="https://linktr.ee/byrdbass" target="_blank">Linktr.ee</a></li>
                    </ul>
                </div>
                <div class="nav-content customColorNav">
                    <ul class="tabs tabs-transparent">
                        <li class="tab customColorNav"><a href="./assets/Poke-Weather/index.html" target="_blank">PokeWeather</a></li>
                        {/* <!-- <li class="tab"><a class="active" href="#test2">Repair Revolution</a></li> --> */}
                        <li class="tab customColorNav"><a href="https://byrdbass.github.io/passwordGenerator/" target="_blank">Password
                            Generator</a></li>
                        <li class="tab customColorNav"><a class="resumeBtn" target="_blank">Resume</a></li>
                    </ul>
                </div>
            </nav>

            <ul class="sidenav" id="mobile-demo">
                <li><a href="https://github.com/Byrdbass">Github</a></li>
                <li><a href="https://www.linkedin.com/in/leland-byrd/">LinkedIn</a></li>
                <li><a href="https://linktr.ee/byrdbass">Linktr.ee</a></li>
            </ul>
        </div>
    );
}

export default Navbar;
