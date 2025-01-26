import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

const FlashcardList = ({ setFlashcards }) => {
  const [categories, setCategories] = useState([]);
  const categoryEl = useRef();
  const amountEl = useRef();

  useEffect(() => {
    // Fetch categories on mount
    axios.get('https://opentdb.com/api_category.php')
      .then((res) => setCategories(res.data.trivia_categories));
  }, []);
  // Function to decode HTML entities like &quot; to "
  const decodeString = (str) => {
    const textArea = document.createElement('textarea');
    textArea.innerHTML = str;
    return textArea.value;
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const category = categoryEl.current.value;
    const amount = amountEl.current.value;

    // Fetch flashcard data
    axios.get('https://opentdb.com/api.php', {
      params: {
        amount: amount,
        category: category,
      },
    }).then((res) => {
      setFlashcards(
        res.data.results.map((item, index) => ({
          id: `${index}-${Date.now()}`,
          question: decodeString(item.question),
          answer: decodeString(item.correct_answer),
        }))
      );
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="category">Category: </label>
        <select id="category" ref={categoryEl}>
          {categories.map((category) => (
            <option value={category.id} key={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>
      <p></p>
      <div className="form-group">
        <label htmlFor="amount">Number of Questions: </label>
        <input type="number" id="amount" min="1" step="1" defaultValue="10" ref={amountEl} />
      </div>
      <p></p>
      <button type="submit" className="btn">Generate</button>
      <p></p>
    </form>
    
  );
};

export default FlashcardList;
