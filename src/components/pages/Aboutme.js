import React from 'react';


function Aboutme() {
    return (
        <div>
            <div id="MQheadshot" className="">
                {/*CHANGE TO HTTPS WHEN AVAILABLE */}
                <img src="http://lelandbyrd.com/images/AISD_headshot_cropped.jpg" className="headshot circle s12 m5"
                    alt="headshot of Leland Byrd smiling with glasses on" />
            </div>
            <div className="aboutme container">
                <h3>About me</h3>
                <p>Full stack web developer and multimedia programmer capitalizing on a music education background to expand
                    the versatility and intuitive nature of the web. If you want to know more about my personal interests click
                    <a className="LBlink" href="https://www.nuggatron.com" alt="A link to my personal website" target="_blank"> Here!</a>
                </p>
            </div>
        </div>
    );
}

export default Aboutme;