import React from 'react';
import cars from './TopCars.module.css'



export const TopCars = () => {
  return (
    <div className={cars.cars}>
      <table className={cars.table}>
        <caption> Model Range </caption>
        <tr className={cars.even} >
          <td>1d</td>
          <th>manufacturer</th>
          <th>model</th>
        </tr>
        <tr className={cars.lc}><td>1</td><td>BMW</td><td>e63s</td></tr>
        <tr className={cars.lc}><td>2</td><td>Mercedes</td><td>e63s</td></tr>
        <tr className={cars.lc}><td>3</td><td>Audi</td><td>e63s</td></tr>
      </table>
    </div>
        )
}



