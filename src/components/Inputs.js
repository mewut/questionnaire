import React from 'react';


const Inputs = ({ onQuestionChange, onDescriptionChange }) => {
  const handleQuestionChange = (event) => {
    onQuestionChange(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    onDescriptionChange(event.target.value);
  };

  return (
    <div>
      <input type="text" placeholder="Введите ваш вопрос" onChange={handleQuestionChange} />
      <input type="text" placeholder="Введите описание вопроса" onChange={handleDescriptionChange} />
    </div>
  );
};

export default Inputs;
