import React from 'react';
import '../../App.css';

const Main = () => {
  return (
    <div className="Main">

        <h3>Download My Resume:</h3>
        <div className="resLinks">
            <a className="resume-link" href="DanHintzResume.docx" target="_blank">Word</a>
            &nbsp;&nbsp;|&nbsp;&nbsp;
            <a className="resume-link" href="DanHintzResume.pdf" target="_blank">PDF</a>
        </div>
    </div>
  );
}

export default Main;
