import React, { useState } from 'react';
import Inputs from './components/Inputs';
import Buttons from './components/Buttons';

const App = () => {
  const [question, setQuestion] = useState('');
  const [description, setDescription] = useState('');
  const [answers, setAnswers] = useState(['']);

  const handleQuestionChange = (value) => {
    setQuestion(value);
  };

  const handleDescriptionChange = (value) => {
    setDescription(value);
  };

  const handleConfirm = () => {
    const data = {
      question: question,
      description: description,
      answers: answers
    };
    const json = JSON.stringify(data);
    localStorage.setItem('Data', json); 
    console.log('Данные сохранены в локальное хранилище:', json);
  };

  return (
    <div className='App'>
      <h1>Добавление вариантов ответа</h1>
      <Inputs onQuestionChange={handleQuestionChange} onDescriptionChange={handleDescriptionChange} />
      <Buttons answers={answers} setAnswers={setAnswers} /> 
      
      <button onClick={handleConfirm}>Подтвердить</button>
    </div>
  );
}

export default App;
