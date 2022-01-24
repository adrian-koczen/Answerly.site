import React, { useState } from "react";
import { BiLinkAlt } from "react-icons/bi";
import { FaInfo } from "react-icons/fa";

const AnswerComponent = ({ answer }) => {
  const [plusAlert, setPlusAlert] = useState(false);
  const [date, setDate] = useState(false);
  const addPlusAlert = (id) => {
    setPlusAlert(true);
    setTimeout(() => {
      setPlusAlert(false);
    }, 2000);
  };

  return (
    <div className="answer">
      <div className="answer-author">
        <div className="answer-author-left">
          <div className="answer-author-avatar">
            <span>{answer.initials}</span>
          </div>
          <div>
            <div className="answer-author-name">{answer.name}</div>
            {date && (
              <div className="answer-date">
                <span>Date</span>
              </div>
            )}
          </div>
        </div>

        <div className="answer-buttons-copy-link">
          <a
            href={answer.originalLinkOfAnswer}
            target="_blank"
            rel="noreferrer"
          >
            <BiLinkAlt />
          </a>
        </div>
      </div>
      <div className="answer-text">
        {answer.answer.map((paragraph, index) => {
          return <p key={index}>{paragraph}</p>;
        })}
      </div>
      <div className="answer-buttons"></div>
      {plusAlert && (
        <div className="login-to-vote">
          <FaInfo />
          <span>Sie müssen sich anmelden, um die Antwort zu bewerten.</span>
        </div>
      )}
    </div>
  );
};

export default AnswerComponent;
