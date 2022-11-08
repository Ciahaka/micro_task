import React, {useState} from 'react';
import s from './UniversalInput.module.css'

export const UniversalInput = () => {
  let [message, setMessage] = useState([
      {message: 'message1'},
      {message: 'message2'},
      {message: 'message3'},
    ]
  )

  return (
    <div className={s.site}>
      <input type={'text'} />
      <button>PiP</button>
      {message.map((el,index)=>{
        return <div>{el.message}</div>
      })}
    </div>
  );
};

