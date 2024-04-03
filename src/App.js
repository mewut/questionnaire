import React, { useState } from 'react';
import Inputs from './components/Inputs';
import Buttons from './components/Buttons';
// import { Reorder } from 'framer-motion'; 

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

  const handleAnswerChange = (index, value) => {
    setAnswers(answers.map((currentAnswer, currentIndex) => {
      if (currentIndex === index) {
        return value;
      }
      return currentAnswer;
    }));
  };

  const handleRemoveAnswer = (answer) => {
    const updatedAnswers = answers.filter((currentAnswer) => currentAnswer !== answer);
    setAnswers(updatedAnswers);
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

  const addAnswer = () => {
    setAnswers([...answers, '']);
  };

  return (
    <div className='App'>
      <h1>Добавление вариантов ответа</h1>
      <Inputs details={details} onQuestionChange={handleQuestionChange} onDescriptionChange={handleDescriptionChange} />
      {/* <Reorder.Group as='ul' axis='y' values={answers} onReorder={setAnswers}> */}
        {answers.map((answer, index) => (
          <Buttons key={index} answer={answer} index={index} handleAnswerChange={handleAnswerChange} handleRemoveAnswer={handleRemoveAnswer} />
        ))}
      {/* </Reorder.Group> */}
      <button onClick={addAnswer}>Добавить ответ</button>
      <button onClick={handleConfirm}>Подтвердить</button>
    </div>
  );
}

export default App;
