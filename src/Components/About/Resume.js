import React from 'react';

const Resume = () => {
  return (
    <div className="Resume">

        <h3>Download My Resume:</h3>
        <div className="resLinks">
            <a className="resume-link" href="DanHintzResume.docx" target="_blank">Word</a>
            &nbsp;&nbsp;|&nbsp;&nbsp;
            <a className="resume-link" href="DanHintzResume.pdf" target="_blank">PDF</a>
        </div>
    </div>
  );
}

export default Resume;
