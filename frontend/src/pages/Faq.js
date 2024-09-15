import React, { useState, useEffect } from 'react';

const Faq = () => {
  const [faqs, setFaqs] = useState([]);
  const [newFaq, setNewFaq] = useState({ question: '', answer: '' });
  const [editingFaq, setEditingFaq] = useState(null);

  useEffect(() => {
    fetch('/api/faqs')
      .then((response) => response.json())
      .then((data) => setFaqs(data))
      .catch((error) => console.error('Error fetching FAQs:', error));
  }, []);

  const handleAddFaq = () => {
    fetch('/api/faqs', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newFaq),
    })
      .then((response) => response.json())
      .then((data) => {
        setFaqs([...faqs, data]);
        setNewFaq({ question: '', answer: '' });
      })
      .catch((error) => console.error('Error adding FAQ:', error));
  };

  const handleUpdateFaq = (id) => {
    fetch(`/api/faqs/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newFaq),
    })
      .then(() => {
        setFaqs(
          faqs.map((faq) =>
            faq.id === id ? { ...faq, ...newFaq } : faq
          )
        );
        setNewFaq({ question: '', answer: '' });
        setEditingFaq(null);
      })
      .catch((error) => console.error('Error updating FAQ:', error));
  };

  const handleDeleteFaq = (id) => {
    fetch(`/api/faqs/${id}`, { method: 'DELETE' })
      .then(() => setFaqs(faqs.filter((faq) => faq.id !== id)))
      .catch((error) => console.error('Error deleting FAQ:', error));
  };

  const handleEditClick = (faq) => {
    setNewFaq({ question: faq.question, answer: faq.answer });
    setEditingFaq(faq.id);
  };

  return (
    <div className="faq-page">
      <h1>FAQ</h1>
      <div className="faq-form">
        <input
          type="text"
          placeholder="Question"
          value={newFaq.question}
          onChange={(e) => setNewFaq({ ...newFaq, question: e.target.value })}
        />
        <textarea
          placeholder="Answer"
          value={newFaq.answer}
          onChange={(e) => setNewFaq({ ...newFaq, answer: e.target.value })}
        />
        {editingFaq ? (
          <button onClick={() => handleUpdateFaq(editingFaq)}>Update</button>
        ) : (
          <button onClick={handleAddFaq}>Add</button>
        )}
      </div>
      <div className="faq-list">
        {faqs.map((faq) => (
          <div key={faq.id} className="faq-item">
            <h2>{faq.question}</h2>
            <p>{faq.answer}</p>
            <button onClick={() => handleEditClick(faq)}>Edit</button>
            <button onClick={() => handleDeleteFaq(faq.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
