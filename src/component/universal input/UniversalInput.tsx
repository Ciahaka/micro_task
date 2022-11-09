import React, {useState} from 'react';
import s from './UniversalInput.module.css'
import {Input} from './input/Input';
import {ButtonFor} from './button/ButtonFor';

export const UniversalInput = () => {

  let [message, setMessage] = useState([
      {message: 'message1'},
      {message: 'message2'},
      {message: 'message3'},
    ]
  )

  const addTextForGlobal =(textButton:string)=>{
    // console.log(textButton)
    let newMessage={message:textButton}
    setMessage([newMessage, ...message])
  }

  return (
    <div className={s.site}>
      {/*<input type={'text'} />*/}
      {/*<button>PiP</button>*/}
      <Input />
      <ButtonFor name={'PiP'} addTextForGlobal={addTextForGlobal}/>
      {message.map((el, index) => {
        return <div>{el.message}</div>
      })}
    </div>
  );
};

