import React, { useState } from 'react';
import axios from 'axios';

const Translator = () => {
  const [text, setText] = useState('');
  const [translatedText, setTranslatedText] = useState('');
  const [language, setLanguage] = useState('es');

  const translateText = async (text, language) => {
    try {
      const response = await axios.post('https://translation.googleapis.com/language/translate/v2', {
        q: text,
        target: language,
        key: 'YOUR_API_KEY',
      });
      return response.data.data.translations[0].translatedText;
    } catch (error) {
      console.error('Error translating text:', error.response ? error.response.data : error.message);
      return 'Error translating text';
    }
  };

  const handleTranslate = async () => {
    if (text.trim() === '') {
      alert('Please enter text to translate');
      return;
    }
    const result = await translateText(text, language);
    setTranslatedText(result);
  };

  return (
    <div className="translator-page">
      <h2>Translator</h2>
      <textarea
        placeholder="Enter text to translate"
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows="6"
        cols="50"
      />
      <select
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
      >
        <option value="es">Spanish</option>
        <option value="fr">French</option>
        <option value="de">German</option>
        <option value="en">English</option>
      </select>
      <button onClick={handleTranslate}>Translate</button>
      {translatedText && (
        <div className="translation-result">
          <h3>Translated Text:</h3>
          <p>{translatedText}</p>
        </div>
      )}
    </div>
  );
};

export default Translator;
