import React from 'react';



function Cards(props) {
    console.log(props)
    return(
    <>
        <div className="row">
            <div className="col s12 m5 l4">
                <a href= {props.deployedLink} target="_blank">
                    <div className="card cardlink">
                        <div className="card-image custom-card-image">
                            <img src={props.cardImage} alt={props.cardAltText} />
                            <span className="card-title transparent">{props.title}</span>
                        </div>
                    </div>
                </a>
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