import React from 'react';
import '../styles/materialize.css';
import '../styles/style.css';
import '../utils/materialize.js'

function Aboutme() {
    return (
        <div>
            <div id="MQheadshot" class="">
                <img src="https://lelandbyrd.com/images/AISD_headshot_cropped.jpg" class="headshot circle s12 m5"
                    alt="headshot of Leland Byrd smiling with glasses on" />
            </div>
            <div class="aboutme container">
                <h3>About me</h3>
                <p>Full stack web developer and multimedia programmer capitalizing on a music education background to expand
                    the versatility and intuitive nature of the web. If you want to know more about my personal interests click
                    <a class="LBlink" href="http://www.nuggatron.com" alt="A link to my personal website" target="_blank"> Here!</a>
                </p>
            </div>
        </div>
    );
}

export default Aboutme;