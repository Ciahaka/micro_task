import React from 'react';
import s from './Button.module.css'


// export const newSubscriber = () => {
//   alert('Сам ты Вася!')
// }
//
// export const newSubscriber_2 = () => {
//   alert('Сам ты Вася!')
// }
// export const admin = () => {
//   alert('А ну, заткнулись оба!')
// }



export const onClickHandler =(phrase:string)=> {
  console.log(phrase)
}

export const Button = () => {


  return (
    <div className={s.site}>
      <button className={s.button} onClick={(event)=>onClickHandler}>Mir Podvoha Youtube Chanel</button>
      <button className={s.button_2} onClick={(event)=>onClickHandler}>Оветочка</button>
      <button className={s.button_3} onClick={(event)=>onClickHandler}>Злой админ</button>
    </div>
  );
};

