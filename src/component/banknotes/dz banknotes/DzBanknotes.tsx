import React from 'react';
import s from './DzBanknotes.module.css';

export type FilterType='All'|'Dollars'|'Rubles'
export type MoneyType={
  banknotes:string
  nominal:number
  number:string
}

export type PropsBanknotesType={
  currentMoney:MoneyType[]
  callback:(a:FilterType)=>void
}

export const DzBanknotes = (props:PropsBanknotesType) => {

  return (
    <div>
      <div className={s.site}>
        <ul >
          {props.currentMoney.map((objFromMoneyArr, index) => {
            return (
              <li key={index} className={s.li}>
                <span className={s.span}> {`Банкнота ${objFromMoneyArr.banknotes} номиналом ${objFromMoneyArr.nominal} серийный номер ${objFromMoneyArr.number}`}</span>
              </li>
            )
          })}
        </ul>
        <div>
          <button className={s.all} onClick={()=>props.callback('All')}>all</button>
          <button className={`${s.all} ${s.rub}`} onClick={()=>props.callback('Rubles')}>rubles</button>
          <button className={`${s.all} ${s.usd}`} onClick={()=>props.callback('Dollars')}>dollars</button>
        </div>
      </div>

    </div>
  );
};

