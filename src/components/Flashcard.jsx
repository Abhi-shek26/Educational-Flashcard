import React, { useState, useEffect } from 'react';
import './Flashcard.css';

const Flashcard = ({ question = "No Question", answer = "No Answer", resetFlip }) => {
  const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    setFlipped(false); // Automatically reset flip state when `resetFlip` changes
  }, [resetFlip]);

  return (
    <div
      className={`flashcard ${flipped ? 'flipped' : ''}`}
      onClick={() => setFlipped(!flipped)}
    >
      <div className="flashcard-inner">
        <div className="front">{question}</div>
        <div className="back">{answer}</div>
      </div>
    </div>
  );
};

export default Flashcard;

