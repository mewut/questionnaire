import React from 'react';

const Inputs = ({ details, onQuestionChange, onDescriptionChange }) => {
  const handleQuestionChange = (event) => {
    onQuestionChange(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    onDescriptionChange(event.target.value);
  };

  return (
    <div>
      <input type="text" placeholder="Введите ваш вопрос" value={details.question} onChange={handleQuestionChange} />
      <input type="text" placeholder="Введите описание вопроса" value={details.description} onChange={handleDescriptionChange} />
    </div>
  );
};

export default Inputs;
