import React from 'react';

const Buttons = (props) => {
  const { answers, setAnswers } = props;

  const handleAddAnswer = () => {
    setAnswers([...answers, '']);
  };

  const handleRemoveAnswer = (answer) => {
    const updatedAnswers = answers.filter((currentAnswer) => currentAnswer !== answer);
    setAnswers(updatedAnswers);
  };

  const handleAnswerChange = (index, value) => {
    setAnswers(answers.map((currentAnswer, currentIndex) => {
      if (currentIndex === index) {
        return value; 
      }
      return currentAnswer; 
    }));
  };

  return (
    <div>
      {answers && answers.map((answer, index) => (
        <div key={index}>
          <input
            type="text"
            value={answer}
            onChange={(event) => handleAnswerChange(index, event.target.value)}
          />
          <button onClick={() => handleRemoveAnswer(answer)}>Удалить</button>
        </div>
      ))}

      <button onClick={handleAddAnswer}>Добавить ответ</button>
    </div>
  );
};

export default Buttons;
