import React, { useState } from 'react';
import Inputs from './components/Inputs';
import Buttons from './components/Buttons';

const App = () => {
  const [details, setDetails] = useState({
    question: '',
    description: '',
  });

  const [answers, setAnswers] = useState(['']); 

  const handleQuestionChange = (value) => {
    setDetails({ ...details, question: value });
  };

  const handleDescriptionChange = (value) => {
    setDetails({ ...details, description: value });
  };

  const handleConfirm = () => {
    const data = {
      question: details.question,
      description: details.description,
      answers: answers
    };
    const json = JSON.stringify(data);
    localStorage.setItem('Data', json); 
    console.log('Данные сохранены в локальное хранилище:', json);
  };

  return (
    <div className='App'>
      <h1>Добавление вариантов ответа</h1>
      <Inputs details={details} onQuestionChange={handleQuestionChange} onDescriptionChange={handleDescriptionChange} />
      <Buttons answers={answers} setAnswers={setAnswers} /> 
      
      <button onClick={handleConfirm}>Подтвердить</button>
    </div>
  );
}

export default App;
