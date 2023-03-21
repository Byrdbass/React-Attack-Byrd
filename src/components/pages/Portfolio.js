import React, { useEffect, useRef, useState } from 'react';
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
        // REPAIR-REVOLUTION
        //DEPLOYED LINK IS BROKEN - FIX THIS!
        {
            deployedLink: "https://repairrevolution.herokuapp.com/",
            cardImage: "https://lelandbyrd.com/images/Repair%20Revolution.gif",
            cardAltText: "screenshot of Repair-Revolution app",
            title: "Repair Revolution",
            content: "A blog to advocate for the Right to repair!  Reuse and Recycle!",
            gitHubRepo: "https://github.com/mrlane51/RepairRevolution"
        },
        //DECKED-OUT
        //DEPLOYED LINK BROKEN!
        {
            deployedLink: "https://decked--out.herokuapp.com",
            cardImage: "https://lelandbyrd.com/images/Decked-Out.gif",
            cardAltText: "screenshot of Decked-Out app",
            title: "Decked-Out",
            content: "An app to help you study!  Create an account and study flashcards of your favorite subject, or an upcoming quiz.",
            //LINK TO YOUR REPO ON GITHUB - NOT CLAY'S
            gitHubRepo: "https://github.com/clabel95/Decked-Out"
        },
        //WERD TO THE WORDS
        {
            deployedLink: "https://werd-to-the-words.herokuapp.com/",
            cardImage: "https://lelandbyrd.com/images/J.A.T.E.gif",
            cardAltText: "screen shot of werd to the words app",
            title: "Werd to The Words",
            content: "A progressive web application that functions as a basic text editor.",
            gitHubRepo: "https://github.com/Byrdbass/Werd-to-the-Words"
        },
        //SOCIAL MEDIA API
        {
            deployedLink: "https://github.com/Byrdbass/ByrdsBuddies",
            cardImage: "https://lelandbyrd.com/images/byrdsbuddies-gif.gif",
            cardAltText: "screen shot of byrdsbuddies app",
            title: "ByrdsBuddies application",
            content: "A backend application that helps Social Media apps keep track of users, their thoughts, and necessary login information",
            gitHubRepo: "https://github.com/Byrdbass/ByrdsBuddies"
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
        },
        //password Generator
        {
            deployedLink: 'https://byrdbass.github.io/passwordGenerator/',
            cardImage: 'https://lelandbyrd.com/images/Password_gen_screenshot.png',
            cardAltText: 'screenshot of password Generator app',
            title: 'Password Generator',
            content: 'An app to generate a password with alert boxes.',
            gitHubRepo: 'https://github.com/Byrdbass/passwordGenerator'
        },
        //E-COMMERCE BACK END
        {
            deployedLink: 'https://github.com/Byrdbass/E-commerce-Back-End',
            cardImage: 'https://lelandbyrd.com/images/e-commerce-back-end-screenshot.gif',
            cardAltText: 'screenshot of e-commerce back end app',
            title: 'E-Commerce Back End',
            content: 'Helps vendors link products to categories and other valuable information.',
            gitHubRepo: 'https://github.com/Byrdbass/E-commerce-Back-End'
        },
        //BUSINESS TRACKER
        {
            deployedLink: 'https://github.com/Byrdbass/bizness-trackstar',
            cardImage: 'https://lelandbyrd.com/images/employee-tracker-screenshot.gif',
            cardAltText: 'screenshot of bizness-trackstar app',
            title: 'Bizness-Trackstar',
            content: 'An employee database tracker. Creates solutions for large companies needing to keep track of employee salary, managers, etc..',
            gitHubRepo: 'https://github.com/Byrdbass/bizness-trackstar'
        },
        //WORK-DAY SCHEDULER
        {
            deployedLink: 'https://byrdbass.github.io/work-day-scheduler',
            cardImage: 'https://lelandbyrd.com/images/Work-day-scheduler-screenGif.gif',
            cardAltText: 'screenshot of work-day-scheduler app',
            title: 'Work Day Scheduler',
            content: 'An app to create and monitor a daily work schedule.  Helps you stay organized during your work day!',
            gitHubRepo: 'https://github.com/Byrdbass/work-day-scheduler'
        },
        //CODE-QUIZ
        {
            deployedLink: 'https://byrdbass.github.io/code-quiz/',
            cardImage: 'https://lelandbyrd.com/images/Code-Quiz-gif.gif',
            cardAltText: 'screenshot of an online JS code quiz',
            title: 'Code Quiz',
            content: "Quiz yourself on some basic javascript!  Keeps you fresh on your basic coding skills and let's you compete for high score!",
            gitHubRepo: 'https://github.com/Byrdbass/code-quiz'
        }
    ]
    const containerRef = useRef(null);
    const [isVisible, setIsVisible] = useState(true);

    const callbackFunction = entries => {
        const [entry] = entries
        setIsVisible(entry.isIntersecting)
    }
    const options = {
        root: document.querySelector("scrollArea"),
        rootMargin: "5px",
        threshold: .05
    }

    useEffect(() => {
        const observer = new IntersectionObserver(callbackFunction, options)
        if (containerRef.current) {
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
                            <Cards className="" key={i}
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