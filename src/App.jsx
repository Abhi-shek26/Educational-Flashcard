import React, { useState, useEffect } from 'react';
import Flashcard from './components/Flashcard';
import ProgressBar from './components/ProgressBar';
import Navigation from './components/Navigation';
import DarkModeToggle from './components/DarkModeToggle';
import FlashcardList from './components/flashcardlist';
import './App.css';

const App = () => {
  const [flashcards, setFlashcards] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [darkMode, setDarkMode] = useState(false);
  const [resetFlip, setResetFlip] = useState(0); // Reset counter

// Dark mode setup
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

// Navigation functions
  const nextCard = () => {
    if (currentIndex < flashcards.length - 1) {
      setResetFlip((prev) => prev + 1); // Trigger flip reset
      setTimeout(() => setCurrentIndex(currentIndex + 1), 300); // Wait for reset before showing the next card
    }
  };

  const prevCard = () => {
    if (currentIndex > 0) {
      setResetFlip((prev) => prev + 1); // Trigger flip reset
      setTimeout(() => setCurrentIndex(currentIndex - 1), 300); // Wait for reset before showing the previous card
    }
  };

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div className={`app ${darkMode ? 'dark-mode' : ''}`}>
      <DarkModeToggle toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      <FlashcardList setFlashcards={setFlashcards} />
      {flashcards.length > 0 ? (
        <>
          <ProgressBar current={currentIndex + 1} total={flashcards.length} />
          <Flashcard
            question={flashcards[currentIndex]?.question}
            answer={flashcards[currentIndex]?.answer}
            resetFlip={resetFlip}
          />
          <Navigation nextCard={nextCard} prevCard={prevCard} />
        </>
      ) : (
        <p>Please generate flashcards to begin.</p>
      )}
    </div>
  );
};

export default App;


