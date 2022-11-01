import React, {MouseEvent} from 'react'
import s from './Button.module.css'


export const Button = () => {

  const onClickHandler = (name: string) => {
    alert(name)
  }
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

  return (
    <div className={s.site}>
      <button className={s.button} onClick={(event)=>onClickHandler('Срочно нажал и подписался, Вася!')}>Mir Podvoha</button>
      <button className={s.button_2} onClick={(event)=>onClickHandler('Сам ты Вася!')}> Subscriber</button>
      <button className={s.button_3} onClick={(event)=>onClickHandler('А ну, заткнулись оба!')}>Admin</button>
    </div>

  );

}


