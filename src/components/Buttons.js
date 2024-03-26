import { useState } from 'react';

const DynamicInputFields = () => {
  const [inputs, setInputs] = useState([{ answer: '' }]); // создаем и отслеживаем инпуты

  const handleAddInput = () => {
    setInputs([...inputs, { answer: '' }]);   // добавляем новый объект с пустым значением answer в массив inputs
  };

  const handleChange = (event, index) => {     
    let { value } = event.target;             
    let onChangeValue = [...inputs];
    onChangeValue[index].answer = value;
    setInputs(onChangeValue);
  };

// const handleChange - эта функция позволяет динамически обновлять значение поля unswer в элементе массива inputs по указанному индексу при изменении ввода пользователем.
// Извлекается значение из события изменения ввода: let { value } = event.target;. Значение ввода, введенное пользователем, сохраняется в переменной value.
// Создается копия массива inputs с помощью оператора расширения: let onChangeValue = [...inputs];. Это делается для того, чтобы избежать изменения исходного состояния напрямую.
// Обновляется значение поля answer в элементе массива с указанным индексом: onChangeValue[index].answer = value;. Таким образом, значение в поле фnswer элемента с индексом index заменяется на новое значение value.
// Обновленный массив onChangeValue устанавливается в качестве нового состояния с помощью setInputs(onChangeValue);. Это приводит к обновлению состояния inputs с учетом внесенных изменений.

  const handleDeleteInput = (index) => {    // удаляет элемент с указанным индексом из массива inputs, обновляя состояние без этого элемента
    const newArray = [...inputs];
    newArray.splice(index, 1);
    setInputs(newArray);
  };


  return (
    <div className='container'>
      {inputs.map((item, index) => (
        <div className='input_container' key={index}>
          <input
            name='answer'
            type='text'
            value={item.answer}
            onChange={(event) => handleChange(event, index)}
          />
          {inputs.length > 1 && (
            <button onClick={() => handleDeleteInput(index)}>Удалить</button>
          )}
          {index === inputs.length - 1 && (
            <button onClick={() => handleAddInput()}>Добавить</button>
          )}
        </div>
      ))}

      <div className='body'> {JSON.stringify(inputs)} </div>
    </div>
  );
}


export default DynamicInputFields;
