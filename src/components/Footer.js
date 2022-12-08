import React from 'react';


function Footer() {
    return (
        <div className='row'>
            <footer className="customFooter">
                <div className="container customColorFooter">
                    <div className="customColorFooter row">
                        <div className="customColorFooter col l6 s12">
                            <h5 className="customColorFooter">Thank you for visting my site!</h5>
                            <p className="customColorFooter">Check out Leland Byrd's Social Media accounts!</p>
                        </div>
                        <div className="customColorFooter col l4 offset-l2 s12">
                            <h5 className="customColorFooter"></h5>
                            <ul className="customColorFooter">
                                <li>
                                    <a className="customColorFooter"
                                        href="https://github.com/Byrdbass">
                                        <img
                                            className="customColorFooter"
                                            src="https://img.icons8.com/ios-filled/48/000000/github.png" />
                                    </a>
                                </li>

                                <li>
                                    <a className="customColorFooter"
                                        href="https://www.linkedin.com/in/leland-byrd/">
                                        <img
                                            className="customColorFooter"
                                            src="https://img.icons8.com/ios/48/000000/linkedin.png" />
                                    </a>
                                </li>
                                <li>
                                    <a className="customColorFooter"
                                        href="https://linktr.ee/byrdbass">
                                        <img
                                            className="customColorFooter"
                                            src="https://img.icons8.com/color/48/000000/linktree.png" />
                                    </a>
                                </li>
                                <li>
                                    <a className="customColorFooter"
                                        href="https://twitter.com/Byrd_Bass">
                                        <img
                                            className="customColorFooter"
                                            src="https://img.icons8.com/ios/48/000000/twitter--v1.png" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer-copyright customColorFooter">
                    <div className="container customColorFooter">
                        © 2022
                        <a className="grey-text text-lighten-4 right" href="#!"></a>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer;
