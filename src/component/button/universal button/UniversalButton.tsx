import React from 'react';
import s from '../Button.module.css'

export type PropsUniversalButtonType = {
  name: string
  callback: () => void
}

export const UniversalButton = (props: PropsUniversalButtonType) => {

  const onClickHandler = () => {
    props.callback()
  }
  return (
    <div className={s.site}>
      <button className={s.button_4} onClick={onClickHandler}>{props.name}</button>
    </div>
  );
};

