import React from "react";
import "./AnswerPanel.css";

const AnswerPanel = ({ response }) => {
  if (!response) return null;

  return (
    <div className="answer-panel">
      <h2 className="answer-title">Answer:</h2>
      <p className="answer-text">{response.answer}</p>
      <h3 className="citation-title">Citation:</h3>
      <p className="citation-text">{response.citations[0].text}</p>
      <a
        href={response.citations[0].link}
        target="_blank"
        rel="noopener noreferrer"
        className="citation-link"
      >
        Open PDF
      </a>
    </div>
  );
};

export default AnswerPanel;
