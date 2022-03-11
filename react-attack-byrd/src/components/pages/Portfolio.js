import React from 'react';
import Cards from '../Cards'
// DOUBLE CHECK IF THIS IS COPIED CORRECTLY FROM WORKSPACE FOR LELAND BYRD.COM


function Portfolio() {
    const portfolioArray = [
        {
            deployedLink: "assets\Poke-Weather\index.html",
            cardImage: "https://lelandbyrd.com/images/PokeWeather.gif",
            cardAltText: "screenshot of poke-weather app",
            title: "Poke Weather",
            content: "A weather API with pokemon based off of weather conditions",
            gitHubRepo: "https://github.com/Byrdbass/Poke-Weather"
        }
        // blogBonanza: {
        //     deployedLink:
        //     cardImage:
        //     cardAltText:
        //     title:
        //     content:
        //     gitHubRepo:

        // },
        // writeSomeNotes: {
        //     deployedLink:
        //     cardImage:
        //     cardAltText:
        //     title:
        //     content:
        //     gitHubRepo:

        // },
        // teamProfileGen: {
        //     deployedLink:
        //     cardImage:
        //     cardAltText:
        //     title:
        //     content:
        //     gitHubRepo:

        // },
        // readMeGen: {
        //     deployedLink:
        //     cardImage:
        //     cardAltText:
        //     title:
        //     content:
        //     gitHubRepo:

        // },
        // weatherDashboard: {
        //     deployedLink:
        //     cardImage:
        //     cardAltText:
        //     title:
        //     content:
        //     gitHubRepo:
        // }

    ]
    return (
        <div>
            <body>
                <div className='container'>
                    {/* called attributes aka props */}
                    {
                    portfolioArray.map((project, i) => 
                    <Cards key={i}
                    deployedLink={project.deployedLink} 
                    cardImage={project.cardImage}
                    cardAltText={project.cardAltText}
                    title={project.title}
                    content={project.content}
                    gitHubRepo={project.gitHubRepo}
                    />)}

                    {/* <div className="row">
                    <div className="col s12 m5 l4">
                        <a href="assets\Poke-Weather\index.html" alt="Poke-Weather project link" target="_blank">
                            <div className="card cardlink">
                                <div className="card-image">
                                    <img src="https://lelandbyrd.com/images/PokeWeather.gif" alt="screenshot of poke-weather app" />
                                    <span className="card-title transparent">Poke Weather</span>
                                </div>
                            </div>
                        </a>
                        <div className="card-content">
                            <p>A weather API with pokemon based off of weather conditions</p>
                        </div>
                        <div className="card-action">
                            <a href="https://github.com/Byrdbass/Poke-Weather" target="_blank" className="blue-text">Link to Github Repo</a>
                        </div>
                    </div>
                </div> */}
                    {/* <div className="row">
                    <div className="col s12 m6 l4">
                        <a href="https://blog-bonanza.herokuapp.com" alt="Blog-Bonanza Heroku Link" target="_blank">
                            <div className="card cardlink">
                                <div className="card-image">
                                    <img src="https://lelandbyrd.com/images/Blog-Bonanza.gif" alt="screenshot of Blog-Bonanza app" />
                                    <span className="card-title transparent">Blog Bonanza</span>
                                </div>
                            </div>
                        </a>
                        <div className="card-content">
                            <p>A full stack tech blog!</p>
                        </div>
                        <div className="card-action">
                            <a href="https://github.com/Byrdbass/Blog-Bonanza" target="_blank">Link to Github Repo</a>
                        </div>
                    </div>
                </div> */}
                    {/* <!-- NOTE TAKER --> */}
                    {/* <div className="row">
                    <div className="col s12 m6 l4">
                        <a href="https://write-some-notes.herokuapp.com/" alt="Note-Taker Heroku Link" target="_blank">
                            <div className="card cardlink">
                                <div className="card-image">
                                    <img src="https://lelandbyrd.com/images/Note%20Taker.gif" alt="screenshot of Note Taker app" />
                                    <span className="card-title transparent blue-grey-text">Write Some Notes</span>
                                </div>
                            </div>
                        </a>
                        <div className="card-content">
                            <p>A simple note taking app</p>
                            {/* <!-- DELETE FUNCTION IS NOT WORKING --> */}
                    {/* </div>
                        <div className="card-action">
                            <a href="https://github.com/Byrdbass/note-taker" target="_blank" className="blue-text">Link to Github Repo</a>
                        </div>
                    </div>
                </div> */}
                    {/* 
            <!-- TEAM PROFILE GEN --> */}
                    {/* <div className="row">
                     <div className="col s12 m6 l4"> */}
                    {/* <a href="https://github.com/Byrdbass/Team-Profile-Generator" alt="Team Profile Generator Repo link"
                            target="_blank">
                            <div className="card cardlink">
                                <div className="card-image">
                                    <img src="https://lelandbyrd.com/images/team-profile-generator-gif.gif" alt="screenshot of Team profile Generator app" />
                                    <span className="card-title transparent blue-grey-text lighten-1">Team Profile Generator</span>
                                </div>
                            </div>
                        </a>
                        <div className="card-content">
                            <p>A node app to create an Employee Database</p>
                        </div>
                        <div className="card-action">
                            <a href="https://github.com/Byrdbass/Team-Profile-Generator" target="_blank" className="blue-text">Link to Github
                                Repo</a>
                        </div>
                    </div>
                </div> */}

                    {/* <!-- MARKDOWN MUHSHEEEN --> */}
                    {/* // <div className="row">
                //     <div className="col s12 m6 l4">
                //         <a href="https://github.com/Byrdbass/MarkDown-MUHsheeen" alt="Readme Generator Repo link" target="_blank">
                //             <div className="card cardlink">
                //                 <div className="card-image">
                //                     <img src="https://lelandbyrd.com/images/README-generator-gif.gif" alt="screenshot of a readme generator" />
                //                     <span className="card-title transparent">MarkDown MUHsheeen</span>
                //                 </div>
                //             </div>
                //         </a>
                //         <div className="card-content">
                //             <p>A markdown file generator for easy GitHub deployment</p>
                //         </div>
                //         <div className="card-action">
                //             <a href="https://github.com/Byrdbass/MarkDown-MUHsheeen" target="_blank" className="blue-text">Link to Github
                //                 Repo</a>
                //         </div>
                //     </div>
                // </div> */}
                    {/* <!-- weather dashboard --> */}
                    {/* // <div className="row">
                //     <div className="col s12 m6 l4">
                //         <a href="https://byrdbass.github.io/weather-dashboard/" alt="Repair-Revolution Heroku Link" target="_blank">
                //             <div className="card cardlink">
                //                 <div className="card-image">
                //                     <img src="https://lelandbyrd.com/images/Weather-Dashboard-ScreenShot.gif" alt="screenshot of Weather app" />
                //                     <span className="card-title transparent black-text">Weather Dashboard</span>
                //                 </div>
                //             </div>
                //         </a>
                //         <div className="card-content">
                //             <p>A 5 day weather forecast based off location</p>
                //         </div>
                //         <div className="card-action">
                //             <a className="blue-text" href="https://github.com/Byrdbass/weather-dashboard" target="_blank">Link to Github
                //                 Repo</a>
                //         </div>
                //     </div>
                // </div>

            </div> */}
                </div>
            </body>
        </div>
    );
}

export default Portfolio;