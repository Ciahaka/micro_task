import React from 'react';
import cars from './TopCars.module.css'



type PropsCarsType={
  id:number
  manufacturer:string
  model:string
}

export type PropsTopType={
  cars:PropsCarsType[]
}

export const TopCars = (props: PropsTopType) => {

  return (
    <div className={cars.cars}>
      <table className={cars.table}>
        <caption> Model Range</caption>
        <tr className={cars.even}>
          <th>Nп/п</th>
          <th>Производитель</th>
          <th>Модель</th>
        </tr>
        {props.cars.map((el,index)=>{
          return(
            <>
              <tr className={cars.lc}>
                <td>{el.id}</td>
                <td>{el.manufacturer}</td>
                <td>{el.model}</td>
              </tr>
            </>
          )
        })}
      </table>
    </div>
  );
}






