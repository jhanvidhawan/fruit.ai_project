import React, { useEffect, useState } from 'react';

const Chatbot = () => {
  const [fruits, setFruits] = useState([]);
  const [selectedFruit, setSelectedFruit] = useState(null);

  useEffect(() => {
    fetch('/api/fruits')
      .then((response) => response.json())
      .then((data) => setFruits(data))
      .catch((error) => console.error('Error fetching fruits:', error));
  }, []);

  return (
    <div className="chatbot-page">
      <h1>Chatbot</h1>
      <div className="fruit-list">
        {fruits.map((fruit) => (
          <div
            key={fruit.id}
            className="fruit-card"
            onClick={() => setSelectedFruit(fruit)}
          >
            <h2>{fruit.name}</h2>
            <p>{fruit.description}</p>
          </div>
        ))}
      </div>
      {selectedFruit && (
        <div className="fruit-detail">
          <h1>{selectedFruit.name}</h1>
          <p>{selectedFruit.details}</p>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
