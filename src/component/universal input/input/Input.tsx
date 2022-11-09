import React, {ChangeEvent, useState} from 'react';


export const Input = () => {
  let [textInput, setInputText] = useState('')

  const eventInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setInputText(event.currentTarget.value)
  }

  return (
    <div>
      <input onChange={eventInputHandler}/>
    </div>
  );
};

