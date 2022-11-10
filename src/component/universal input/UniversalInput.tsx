import React, {ChangeEvent, useState} from 'react';
import s from './UniversalInput.module.css'

export type ButtonForPropsType = {
  name: string
  addTextForGlobal: (textInput: string) => void
}

export const UniversalInput = (props: ButtonForPropsType) => {
  let [textInput, setInputText] = useState('')

  const eventInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setInputText(event.currentTarget.value)
  }

  const onClickButtonHandler = () => {
    props.addTextForGlobal(textInput)
    setInputText('')

  }
  return (
    <div className={s.site}>
      <input className={s.input} value={textInput} onChange={eventInputHandler}/>

      <button className={s.button} onClick={onClickButtonHandler}>{props.name}</button>
    </div>
  );
};

