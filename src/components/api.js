// отправим на сервер!

function sendResultsToServer(results) {
    fetch('https://localhost:3000/save-results', {   // заменить на реальный адрес
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(results)
    })
    .then(response => {
        if (response.ok) {
            console.log('Результаты успешно отправлены на сервер');
        } else {
            console.error('Ошибка при отправке результатов на сервер');
        }
    })
    .catch(error => console.error('Ошибка:', error));
  }
  
  
  let results = { /* тут будут результаты. Я ожидаю от функции результаты всех, кто прошел опрос */ };
  sendResultsToServer(results);

  export { sendResultsToServer };
  