import React, { useState } from 'react';
import Inputs from './components/Inputs';
import Buttons from './components/Buttons';

const App = () => {
  const [question, setQuestion] = useState('');
  const [description, setDescription] = useState('');
  const [answers, setAnswers] = useState(['']);

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
// не сохраняет дату в локальное хранилище


  return (
    <div className='App'>
      <h1>Добавление вариантов ответа</h1>
      <Inputs setQuestion={setQuestion} setDescription={setDescription} />
      <Buttons answers={answers} setAnswers={setAnswers} />
      
      <button onClick={handleConfirm}>Подтвердить</button>
    </div>
  );
}

export default App;
