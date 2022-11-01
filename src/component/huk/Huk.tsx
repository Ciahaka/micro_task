import React, {useState} from 'react';
import s from '../button/Button.module.css'


const Huk = () => {

  let [a, setA] = useState(0)

  const onClickHandler = () => {
    setA(++a)
    console.log(a)
  }



  const onClickHandlerNull = () => {
    setA(0)
    console.log(0)
  }

  return (
    <div className={s.site}>
      <h1>{a}</h1>
      <button className={s.button_2} onClick={onClickHandler}>Цiснi сюды</button>
      <button className={s.button_4} onClick={onClickHandlerNull}>Обнулён срок</button>
    </div>
  );
};

export default Huk;