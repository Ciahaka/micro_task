import React, {useState} from 'react';

import {DzBanknotes, FilterType} from './dz banknotes/DzBanknotes';


export const Banknotes = () => {

  const [money, setMoney] = useState([
    {banknotes: 'Dollars', nominal: 100, number: ' a1234567890'},
    {banknotes: 'Dollars', nominal: 50, number: ' z1234567890'},
    {banknotes: 'Rubles', nominal: 100, number: ' w1234567890'},
    {banknotes: 'Dollars', nominal: 100, number: ' e1234567890'},
    {banknotes: 'Dollars', nominal: 50, number: ' c1234567890'},
    {banknotes: 'Rubles', nominal: 100, number: ' r1234567890'},
    {banknotes: 'Dollars', nominal: 50, number: ' x1234567890'},
    {banknotes: 'Rubles', nominal: 50, number: ' v1234567890'},
  ])

  let currentMoney = money;

  const [filter, setFilter] = useState('All')

  if (filter === 'all') {
    currentMoney = money
  }

  if (filter === 'Dollars') {
    currentMoney = money.filter(filteredMoney => filteredMoney.banknotes === 'Dollars');
  }
  if (filter === 'Rubles') {
    currentMoney = money.filter(filteredMoney => filteredMoney.banknotes === 'Rubles');
  }

  let onClickFilterHandler = (nameButton: FilterType) => {
    setFilter(nameButton)
  }

  return (
    <DzBanknotes currentMoney={currentMoney} callback={onClickFilterHandler}/>
    //  <div className={s.site}>
    //    <ul >
    //      {currentMoney.map((objFromMoneyArr, index) => {
    //        return (
    //          <li key={index} className={s.li}>
    //            <span className={s.span}> {`Банкнота ${objFromMoneyArr.banknotes} номиналом ${objFromMoneyArr.nominal} серийный номер ${objFromMoneyArr.number}`}</span>
    //          </li>
    //        )
    //      })}
    //    </ul>
    //    <div>
    //      <button className={s.all} onClick={() => onClickFilterHandler('All')}>all</button>
    //      <button className={`${s.all} ${s.rub}`} onClick={() => onClickFilterHandler('Rubles')}>rubles</button>
    //      <button className={`${s.all} ${s.usd}`} onClick={() => onClickFilterHandler("Dollars")}>dollars</button>
    //    </div>
    //  </div>
  )
};

