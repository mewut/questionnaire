import React, { useState } from 'react';
import { sendResultsToServer } from './components/api';

// массив вопросов и ответов. Можно больше вариантов, вожно меньше. Пока без кнопки подтверждения ответа
const questions = [
  { question: 'Вопрос 1', options: ['Ответ 1', 'Ответ 2', 'Ответ 3'], correctAnswer: 1 },
  { question: 'Вопрос 2', options: ['Ответ 1', 'Ответ 2', 'Ответ 3'], correctAnswer: 2 }
  // здесь другие вопросы и варианты
];

const App = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]); // хукнем useState для управления состоянием текущего вопроса и ответов. useState для хранения и обновления информации о текущем вопросе и ответах, не забудь

// тут обработаем выбор ответа на вопрос
  const handleAnswer = (answer) => {
    setAnswers([...answers, answer]);  // добавляем ответ в массив
    setCurrentQuestion(currentQuestion + 1); // и переходим к следующему вопросу, если он есть. Ниже обработаем
  };

  let results = { answers }; // подготовим результаты для отправки на сервер
    sendResultsToServer(results); // и отправим

  return (
    <div>
      {currentQuestion < questions.length ? (     // проверка, есть ли еще вопросы
        <div>
          <h3>{questions[currentQuestion].question}</h3>   
          {questions[currentQuestion].options.map((option, index) => {
            return (
              <button key={index} onClick={() => handleAnswer(index)}>{option}</button> // cоздание кнопок для вариантов ответов. Кнопка для подтверждения ответа будет после этого по идее
            );
          })}
        </div>
      ) : (
        <div>
          <h3>Результаты опроса:</h3>
          <ul>
            {answers.map((answer, index) => {
              return (
                <li key={index}>{questions[index].question}: {questions[index].options[answer]}</li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default App;
