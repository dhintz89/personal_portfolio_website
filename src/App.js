import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
        <h3>Download My Resume:</h3>
        <a
          className="resume-link"
          href="DanHintzResume.docx"
          target="_blank"
        >
          Word
        </a>&nbsp;&nbsp;|&nbsp;&nbsp;
        <a
          className="resume-link"
          href="DanHintzResume.pdf"
          target="_blank"
        >
          PDF
        </a>
    </div>
  );
}

export default App;
