import React from 'react';
import s from './Site.module.css';

export type PropsFooterType = {
  title:string
}

export const Footer = (props:PropsFooterType) => {
  return (
    <div className={s.site}>
      {props.title}
    </div>
  );
};

