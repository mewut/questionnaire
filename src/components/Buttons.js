import React from 'react';
import { Reorder } from 'framer-motion';

const Buttons = ({ answers, setAnswers }) => {
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
    <>
      {answers && answers.map((answer, index) => (
        <Reorder.Item key={index}>
          <div>
            <input
              type="text"
              value={answer}
              onChange={(event) => handleAnswerChange(index, event.target.value)}
            />
            <button onClick={() => handleRemoveAnswer(answer)}>Удалить</button>
          </div>
        </Reorder.Item>
      ))}
      <button onClick={handleAddAnswer}>Добавить ответ</button>
    </>
  );
};

export default Buttons;
