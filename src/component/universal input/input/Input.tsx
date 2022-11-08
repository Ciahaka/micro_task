import React, {ChangeEvent, useState} from 'react';


export const Input = () => {
  let [text, setText] = useState('')

  const eventInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.currentTarget.value)
  }

  return (
    <div>
      <input onChange={eventInputHandler}/>
    </div>
  );
};

