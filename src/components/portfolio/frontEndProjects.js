import React from "react";

function frontEndProjects() {
    const frontEndArray = [
        //POKE-WEATHER
        {
            deployedLink: "http://lelandbyrd.com/assets/Poke-Weather/index.html",
            cardImage: "http://lelandbyrd.com/images/PokeWeather.gif",
            cardAltText: "screenshot of poke-weather app",
            title: "Poke Weather",
            content: "A weather API with pokemon based off of weather conditions",
            gitHubRepo: "https://github.com/Byrdbass/Poke-Weather"
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
        }
    ]
}

export default frontEndProjects;