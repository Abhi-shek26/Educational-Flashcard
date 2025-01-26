import React from 'react';
import "./Navigation.css";

const Navigation = ({ nextCard, prevCard }) => {
  return (
    <div className="navigation">
      <button onClick={prevCard}>Previous</button>
      <button onClick={nextCard}>Next</button>
    </div>
  );
};

export default Navigation;