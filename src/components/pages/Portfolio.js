import React, {useEffect, useRef, useState} from 'react';
import Cards from '../Cards'
// DOUBLE CHECK IF THIS IS COPIED CORRECTLY FROM WORKSPACE FOR LELAND BYRD.COM

/* TODO:
ADD A SSL certificate and change all links with LelandByrd.com to https: from http:*/

function Portfolio() {
    const portfolioArray = [
        //POKE-WEATHER
        {
            deployedLink: "http://lelandbyrd.com/assets/Poke-Weather/index.html",
            cardImage: "http://lelandbyrd.com/images/PokeWeather.gif",
            cardAltText: "screenshot of poke-weather app",
            title: "Poke Weather",
            content: "A weather API with pokemon based off of weather conditions",
            gitHubRepo: "https://github.com/Byrdbass/Poke-Weather"
        },
        //BLOG BONANZA
        {
            deployedLink: "https://blog-bonanza.herokuapp.com",
            cardImage: "http://lelandbyrd.com/images/Blog-Bonanza.gif",
            cardAltText: "screenshot of Blog-Bonanza app",
            title: "Blog Bonanza",
            content: "A full stack tech blog!",
            gitHubRepo: "https://github.com/Byrdbass/Blog-Bonanza"
        },
        //NOTE-TAKER
        //CREATE DELETE FUNCTIONALITY!!!
        {
            deployedLink: "https://write-some-notes.herokuapp.com/",
            cardImage: "https://lelandbyrd.com/images/Note%20Taker.gif",
            cardAltText: "screenshot of Note Taker app",
            title: "Write Some Notes",
            content: "A simple note taking app",
            gitHubRepo: "https://github.com/Byrdbass/note-taker"

        },
        // TEAM-PROFILE GEN
        {
            deployedLink: 'https://github.com/Byrdbass/Team-Profile-Generator',
            cardImage: 'https://lelandbyrd.com/images/team-profile-generator-gif.gif',
            cardAltText: 'screenshot of Team profile Generator app',
            title: 'Team Profile Generator',
            content: 'A node app to create an Employee Database',
            gitHubRepo: 'https://github.com/Byrdbass/Team-Profile-Generator'

        },
        // README-GEN
        {
            deployedLink: 'https://github.com/Byrdbass/MarkDown-MUHsheeen',
            cardImage: 'https://lelandbyrd.com/images/README-generator-gif.gif',
            cardAltText: 'screenshot of a readme generator',
            title: 'MarkDown MUHsheeen',
            content: 'A markdown file generator for easy GitHub deployment',
            gitHubRepo: 'https://github.com/Byrdbass/MarkDown-MUHsheeen'

        },
        //Weather dashboard
        {
            deployedLink: 'https://byrdbass.github.io/weather-dashboard/',
            cardImage: 'https://lelandbyrd.com/images/Weather-Dashboard-ScreenShot.gif',
            cardAltText: 'screenshot of Weather app',
            title: 'Weather Dashboard',
            content: 'A 5 day weather forecast based off location',
            gitHubRepo: 'https://github.com/Byrdbass/weather-dashboard'
        }
    ]
    const containerRef = useRef(null);
    const [isVisible, setIsVisible] = useState(true);

    const callbackFunction = entries => {
        const [ entry ] = entries
        setIsVisible(entry.isIntersecting)
    }
    const options = {
        root: document.querySelector("scrollArea"),
        rootMargin: "5px",
        threshold: .05
    }

    useEffect(()=> {
        const observer = new IntersectionObserver(callbackFunction, options)
        if(containerRef.current) {
            observer.observe(containerRef.current)
        }

        return () => {
            if (containerRef.current) {
                observer.unobserve(containerRef.current)
            }
        }
    }, [containerRef, options])
    return (
        <div className='container'>
            <body className='scrollArea'>
                {isVisible ? 
                <div className=''>
                    {/* called attributes aka props */}
                    {portfolioArray.map((project, i) => 
                    <Cards className=""key={i}
                    deployedLink={project.deployedLink} 
                    cardImage={project.cardImage}
                    cardAltText={project.cardAltText}
                    title={project.title}
                    content={project.content}
                    gitHubRepo={project.gitHubRepo} />)}
                </div>
            : setIsVisible}   
            </body>
        </div>
    );
}

export default Portfolio;