import React, {MouseEvent} from 'react'
import s from './Button.module.css'


export const Button = () => {


  // const newSubscriber = (event:MouseEvent<HTMLButtonElement>) => {
  //   alert('Срочно нажал и подписался, Вася!')
  // }
  //
  // const newSubscriber_2 = (event:MouseEvent<HTMLButtonElement>) => {
  //   alert('Сам ты Вася!')
  // }
  // const admin = () => {
  //   alert('А ну, заткнулись оба!')
  // }
  // const foo_1 = () => {
  //   alert('200100')
  // }
  //
  // const foo_2 = () => {
  //   alert('100200')
  // }
  const onClickHandler = (name: string) => {
    alert(name)
  }

  const onClickHandlerFoo = (name: number) => {
    alert(name)
  }
  const onClickHandlerFoo_2 = () => {
    alert(200100)
  }

  return (
    <div className={s.site}>
      <button className={s.button} onClick={(event) => onClickHandler('Срочно нажал и подписался, Вася!')}>Mir Podvoha
      </button>
      <button className={s.button_2} onClick={(event) => onClickHandler('Сам ты Вася!')}> Subscriber</button>
      <button className={s.button_3} onClick={(event) => onClickHandler('А ну, заткнулись оба!')}>Admin</button>
      <button className={s.button} onClick={(event) => onClickHandlerFoo(100200)}>200100</button>
      <button className={s.button} onClick={onClickHandlerFoo_2}>100200</button>

    </div>

  );

}


