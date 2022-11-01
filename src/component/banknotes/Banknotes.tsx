import React from 'react';
import s from './Banknotes.module.css'

export const Banknotes = () => {

return (
  <ul className={s.site}>
    {money.map((objFromMoneyArr,index)=>{
      return(
        <li key={index}>
          <span>{objFromMoneyArr.banknotes}</span>
          <span>{objFromMoneyArr.nominal}</span>
          <span>{objFromMoneyArr.number}</span>
        </li>
      )
    })}

  </ul>
)


};

