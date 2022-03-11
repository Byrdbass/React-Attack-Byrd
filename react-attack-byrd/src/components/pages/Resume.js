import React from 'react';
import FileSaver from 'file-saver';

function Resume () {
    const saveResume = () => {
        FileSaver.saveAs("../../LelandByrdResume030422.pdf", "leland-byrd-resume.pdf");
    };
    return (
        <>
        <h1>Resume</h1>
        <a className="resumeBtn" onClick={saveResume} target="_blank">Download resume here</a>
        <h2>Technologies known</h2>
        <ul>
            <li>Javascript</li>
            <li>MERN</li>

        </ul>
        <h3>Frameworks</h3>
        <ul>
        <li>React</li>
            <li>Redux</li>
            <li>Materialize</li>
        </ul>
        
        </>

    );
}

export default Resume;