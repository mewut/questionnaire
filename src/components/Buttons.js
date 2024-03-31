import React, { useState } from 'react';

const Buttons = () => {
  const [answers, setAnswers] = useState(['']);

  const handleAddAnswer = () => {
    setAnswers([...answers, '']);
  };

  const handleRemoveAnswer = (answer) => {
    const updatedAnswers = answers.filter((answers) => answers !== answer);
    setAnswers(updatedAnswers);
  };

  const handleAnswerChange = (index, value) => {
    setAnswers(answers.map((answer, currentIndex) => {
      if (currentIndex === index) {
        return value; 
      }
      return answer; 
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