import React, {useState} from 'react';
import s from './Banknotes.module.css'

type FilterType='All'|'Dollars'|'Rubles'
export const Banknotes = () => {
  const [money, setMoney] = useState([
    { banknotes: 'Dollars', nominal: 100, number: ' a1234567890' },
    { banknotes: 'Dollars', nominal: 50, number: ' z1234567890' },
    { banknotes: 'Rubles', nominal: 100, number: ' w1234567890' },
    { banknotes: 'Dollars', nominal: 100, number: ' e1234567890' },
    { banknotes: 'Dollars', nominal: 50, number: ' c1234567890' },
    { banknotes: 'Rubles', nominal: 100, number: ' r1234567890' },
    { banknotes: 'Dollars', nominal: 50, number: ' x1234567890' },
    { banknotes: 'Rubles', nominal: 50, number: ' v1234567890' },
  ])
  const[filter,setFilter]=useState<FilterType>('All')

  let currentMoney = money;
  if (filter === 'Dollars') {
    currentMoney = money.filter(filteredMoney => filteredMoney.banknotes === 'Dollars');
  }
  if (filter === 'Rubles') {
    currentMoney = money.filter(filteredMoney => filteredMoney.banknotes === 'Rubles');
  }

  const onClickFilterHandler = (nameButton: FilterType) => {
    setFilter(nameButton)
  }

return (
  <div className={s.site}>
    <ul >
      {currentMoney.map((objFromMoneyArr, index) => {
        return (
          <li key={index} className={s.li}>
            <span className={s.span}> {`Банкнота ${objFromMoneyArr.banknotes} номиналом ${objFromMoneyArr.nominal} серийный номер ${objFromMoneyArr.number}`}</span>
          </li>
        )
      })}
    </ul>
    <div>
      <button className={s.all} onClick={() => onClickFilterHandler('All')}>all</button>
      <button className={`${s.all} ${s.rub}`} onClick={() => onClickFilterHandler('Rubles')}>rubles</button>
      <button className={`${s.all} ${s.usd}`} onClick={() => onClickFilterHandler("Dollars")}>dollars</button>
    </div>
  </div>
)


};

