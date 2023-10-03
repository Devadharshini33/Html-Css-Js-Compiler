"use client"
import React, { useState } from 'react';

const HtmlEditor = () => {
  const [htmlCode, setHtmlCode] = useState('');
  const [cssCode, setCssCode] = useState('');
  const [jsCode, setJsCode] = useState('');
  const [output, setOutput] = useState('');

  const handleRunClick = () => {
    // Create a data URL for the combined HTML, CSS, and JavaScript
    const combinedCode = `
      <html>
        <head>
          <style>${cssCode}</style>
        </head>
        <body>
          ${htmlCode}
          <script>${jsCode}</script>
        </body>
      </html>
    `;

    // Create a data URL
    const dataUrl = `data:text/html;charset=utf-8,${encodeURIComponent(combinedCode)}`;

    // Set the data URL as the iframe source
    setOutput(dataUrl);
  };

  const handleHtmlChange = (event) => {
    setHtmlCode(event.target.value);
  };

  const handleCssChange = (event) => {
    setCssCode(event.target.value);
  };

  const handleJsChange = (event) => {
    setJsCode(event.target.value);
  };

  return (
    <div className="html-editor">
      <h2>HTML, CSS, and JavaScript Editor</h2>
      <div className="code-container">
        <div className="code-tab">
          <h3>HTML</h3>
          <textarea
            rows="10"
            cols="50"
            placeholder="Enter HTML code here..."
            value={htmlCode}
            onChange={handleHtmlChange}
            className="active-code"
          />
        </div>
        <div className="code-tab">
          <h3>CSS</h3>
          <textarea
            rows="10"
            cols="50"
            placeholder="Enter CSS code here..."
            value={cssCode}
            onChange={handleCssChange}
            className="active-code"
          />
        </div>
        <div className="code-tab">
          <h3>JavaScript</h3>
          <textarea
            rows="10"
            cols="50"
            placeholder="Enter JavaScript code here..."
            value={jsCode}
            onChange={handleJsChange}
            className="active-code"
          />
        </div>
      </div>
      <div className="button-container">
        <button className="run-button" onClick={handleRunClick}>
          Run
        </button>
      </div>
      <div className="output-container">
        <h3>Output:</h3>
        <iframe
          title="Output"
          className="output-frame"
          src={output}
        ></iframe>
      </div>

      {/* Add CSS styles */}
      <style jsx>{`
        .html-editor {
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          background-color: #f7f7f7;
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .code-container {
          display: flex;
          justify-content: space-around;
          margin-top: 20px;
          width: 100%;
        }

        .code-tab {
          text-align: center;
          width: 30%;
          background-color: white;
          border: 1px solid #e0e0e0;
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .code-tab h3 {
          font-size: 20px;
          margin-bottom: 10px;
        }

        .code-container textarea {
          width: 100%;
          padding: 10px;
          margin-top: 10px;
          border: 1px solid #ccc;
          border-radius: 4px;
          font-size: 14px;
        }

        .button-container {
          margin-top: 20px;
        }

        .run-button {
          padding: 12px 24px;
          font-size: 16px;
          background-color: #009688; /* Change the button color */
          color: white;
          border: none;
          cursor: pointer;
          border-radius: 4px;
        }

        .run-button:hover {
          background-color: #007770; /* Change the hover color */
        }

        .active-code {
          display: block;
          width: 100%;
          min-height: 200px;
        }

        h2 {
          font-size: 24px;
          margin-bottom: 20px;
        }

        h3 {
          font-size: 20px;
        }

        .output-container {
          margin-top: 20px;
        }

        .output-frame {
          width: 100%;
          height: 300px;
          border: 1px solid #e0e0e0;
          border-radius: 8px;
          /* Additional styles for the output area */
          margin-top: 10px;
          background-color: #f0f0f0; /* Change the background color */
          color: #333; /* Change the text color */
        }
      `}</style>
    </div>
  );
};

export default HtmlEditor;


