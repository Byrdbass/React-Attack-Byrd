import React, {useEffect, useRef, useState} from 'react';

// ADD STYLING HERE AS CONST FOR .show -CHECK CLASS REFERENCES
function Cards(props) {

    const containerRef = useRef(null);
    const [isVisible, setIsVisible] = useState(true);

    const callbackFunction = entries => {
        //console.log(entries)
        const [ entry ] = entries
        entries.forEach( entry => {
            entry.target.classList.toggle("show", setIsVisible(entry.isIntersecting))
        })
        
    }
    const options = {
        root: document.querySelector("custom-card"),
        rootMargin: "200px",
        threshold: 1
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
    //console.log(containerRef.current)
    return(
    <>
         
        <div className="row custom-card" >
            <div className="col s12 m5 l4 custom-card" ref={containerRef}>
            {/* {isVisible ? */}
                <a href= {props.deployedLink} target="_blank" className="">
                    <div className="card cardlink ">
                        <div className="card-image custom-card-image">
                            <img src={props.cardImage} alt={props.cardAltText} />
                            <span className="card-title transparent">{props.title}</span>
                        </div>
                    </div>
                </a>
                {/* : setIsVisible} */}
                <div className="card-content">
                    <p>{props.content}</p>
                </div>
                <div className="card-action">
                    <a href={props.gitHubRepo} target="_blank" className="blue-text">Link to Github Repo</a>
                </div>
            </div>
        </div>

    </>
    );
}

export default Cards;