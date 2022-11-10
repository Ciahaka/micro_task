import React, {ChangeEvent} from 'react';
import s from '../UniversalInput.module.css'

type AloneInputPropsType={
  aloneInput:string
  setAloneInput:(aloneInput: string)=>void
}

export const AloneInput = (props:AloneInputPropsType) => {
  let onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
      props.setAloneInput(event.currentTarget.value)
  }
  return (
    <div className={s.site}>
      <input className={s.input} value={props.aloneInput} onChange={onChangeInputHandler} />
    </div>
  );
};

