import React from 'react';
import s from '../UniversalInput.module.css'

export type AloneButtonPropsType = {
  name: string
  callback: () => void

}

export const AloneButton = (props: AloneButtonPropsType) => {

  let onClickHandlerButton = () => {
    props.callback()
  }
  return (
    <div className={s.site}>
      <button className={s.button} onClick={onClickHandlerButton}>{props.name}</button>
    </div>
  );
};

