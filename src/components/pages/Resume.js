import React from "react";
import FileSaver from "file-saver";
import ResumeFile from "../../media/Resume.pdf";
import "../../styles/resume.css"

function Resume() {
  const saveResume = () => {
    FileSaver.saveAs(ResumeFile, "leland-byrd-resume.pdf");
  };

  const langKnownArr = [
    "Java",
    "Git",
    "JavaScript",
    "UNIX",
    "python",
    "jQuery",
    "CSS",
    "HTML",
    "MySQL",
    "noSQL",
  ];

  const frameWorksArr = [
    "React", 
    "Jira", 
    "Spring", 
    "AppDynamics", 
    "SpringBoot", 
    "Linux", 
    "CLI", 
    "MERN stack", 
    "Node", 
    "handlebars", 
    "Splunk", 
    "Hibernate", 
    "Materialize", 
    "REST APIs", 
    "Express", 
    "Mongoose", 
    "MongoDB", 
    "GraphQL", 
    "Ableton Live", 
    "Audio Engineering"
  ]

  return (
    <>
      <h1 className="center">
        <a className="resumeBtn" onClick={saveResume} target="_blank">
          Download resume here
        </a>
      </h1>
      <h3>Languages Known</h3>
        {langKnownArr.map((val) => {
          return (
            <div>
              <p className="center-list">{val}</p>
              {/* <p>&nbsp;</p> */}
            </div>
          );
        })}
      <h3>Frameworks</h3>
      {frameWorksArr.map((val) => {
          return (
            <div>
              <p className="center-list">{val}</p>
              {/* <p>&nbsp;</p> */}
            </div>
          );
        })}
    </>
  );
}

export default Resume;
