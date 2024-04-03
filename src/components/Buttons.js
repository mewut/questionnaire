import React from 'react';
// import { Reorder } from 'framer-motion';

const Buttons = ({ answer, index, handleAnswerChange, handleRemoveAnswer, setAnswers, answers }) => {
  return (
    <>
      {/* <Reorder.Item key={index} value={index}> */}
        <div>
          <input
            type="text"
            value={answer}
            onChange={(event) => handleAnswerChange(index, event.target.value)}
          />
          <button onClick={() => handleRemoveAnswer(answer)}>Удалить</button>
        </div>
      {/* </Reorder.Item> */}
    </>
  );
};

export default Buttons;
