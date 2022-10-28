import React from 'react';
import s from './Site.module.css'

export type PropsHeaderType = {
  title:string
}

export const Header = (props:PropsHeaderType) => {
  return (
    <div className={s.site}>
      {props.title}
    </div>
  );
};

