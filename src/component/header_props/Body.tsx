import React from 'react';
import s from './Site.module.css';

export type PropsBodyType = {
  title:string
}

export const Body = (props:PropsBodyType) => {
  return (
    <div className={s.site}>
      {props.title}
    </div>
  );
};

