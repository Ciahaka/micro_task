import React, {useState} from 'react';                    //Banknotes
// import './App.css';
import './Banknots/Banknots.css'
// import React from 'react';
// import React, {MouseEvent, useState} from "react";     //Button
// import './Button/Button.css'                           //Button Style
// import {Header} from "./Start/Header";
// import {Body} from "./Start/Body";
// import {Footer} from "./Start/Footer";
// import {LessonMap} from "./Map/Comonente map";
// import {Cars} from "./TopCars/TopCars";
// import {Button} from "./Button/Button";
// import {hasSubscribers} from "diagnostics_channel";

//-----------------Banknotes----------------------------------------------------------------------

type FilterType = 'All' | 'Ruble' | 'Dollar'

function App() {
  const [money, setMoney] = useState([
    {banknote: 'Dollar ', nominal: 100, number: ' a1234567890'},
    {banknote: 'Dollar ', nominal: 50, number: ' z1234567890'},
    {banknote: 'Ruble ', nominal: 100, number: ' w1234567890'},
    {banknote: 'Dollar ', nominal: 100, number: ' e1234567890'},
    {banknote: 'Dollar ', nominal: 50, number: ' c1234567890'},
    {banknote: 'Ruble ', nominal: 100, number: ' r1234567890'},
    {banknote: 'Dollar ', nominal: 50, number: ' x1234567890'},
    {banknote: 'Ruble ', nominal: 50, number: ' v1234567890'},
  ])

  const [filter, setFilter] = useState<FilterType>('All')

  let allBank = money;
  if (filter === 'Dollar') {
    allBank = money.filter((launderedRubles) => launderedRubles.banknote === 'Dollar');
  }
  if (filter === 'Ruble') {
    allBank = money.filter((launderedRubles) => launderedRubles.banknote === 'Ruble');
  }


  const onClickFilterHandler = (nameButton: FilterType) => {
    setFilter(nameButton)
  }

  return (
    <>
      <ul className={'App'}>
        {allBank.map((objFromMoneyArr, index) => {
          debugger
          return (
            <li key={index}>
              <span>{objFromMoneyArr.banknote}</span>
              <span>{objFromMoneyArr.nominal}</span>
              <span>{objFromMoneyArr.number}</span>
            </li>
          )
        })}
      </ul>
      <div style={{margin: '30px'}}>
        <button className={'btn'} onClick={() => onClickFilterHandler('All')}>{'All'}</button>
        <button className={'btn'} onClick={() => onClickFilterHandler('Ruble')}>{'Ruble'}</button>
        <button className={'btn'} onClick={() => onClickFilterHandler('Dollar')}>{'Dollar'}</button>
      </div>

    </>

  )
}

export default App;


//-----------------Hook----------------------------------------------------------------------------
// function App() {
//   //let a = 1
//   let[a,setA]=useState(1)
//  const onClickHandlerClick=()=>{
//     setA( ++a);
//    console.log(a)
//  }
//
//   const onClickHandlerReset=()=> {
//     setA(--a);
//     console.log(a)
//   }
//
//   return (
//     <div className='App'>
//       <h1>{a}</h1>
//       <button className="btn" onClick={onClickHandlerClick}>Click</button>
//       <button className="btn" onClick={onClickHandlerReset}>Reset</button>
//     </div>
//   );
// }
// export default App;

//------------------Button-------------------------------------------------------------------------
// function App() {
//   const MyGoodYoutubeChanel=(subscribers:string,age:number,address:string)=>{console.log(subscribers,age,address)}
//   const MyBadYoutubeChanel=(subscribers:string,age:number,address:string)=>{console.log(subscribers,age,address)}
//   const MyFavoriteYoutubeChannel=(subscribers:string,age:string,address:number)=>{console.log(subscribers,age,address)}
//   const YourStupidYoutubeChannel=(subscribers:string)=>(console.log(subscribers))
//
//   return (
//     <>
//       <Button name={'My Good Youtube  Chanel'} callBack={()=>MyGoodYoutubeChanel('Hello! I am diligent Petya!',18,'From Klaipeda')}/>
//       <Button name={'My Bad Youtube  Chanel'}callBack={()=>MyBadYoutubeChanel('Fuck, Im Yura and Im here',45,'From Muhosransk')}/>
//       <Button name={'My Favorite Youtube Channel'}callBack={()=>MyFavoriteYoutubeChannel('Im just a test. I have no one!','Infinity. I am machine',3997365170474376)}/>
//       <Button name={'Your Stupid Youtube Channel'} callBack={()=>YourStupidYoutubeChannel('Im a dumb button')}/>
//     </>
//   )
//--------------Button Start--------------------------------------------------------------------
//   const firstGuest = (event:MouseEvent<HTMLButtonElement>) => {
//       console.log('Hello! I am diligent Petya!')
//   }
//   const secondGuest =(event:MouseEvent<HTMLButtonElement>)=> {
//       console.log('Fuck, Im Yura and Im here')
//   }

// const onClickHandler = (name: string) => {
//   console.log(name)
// }


//   return (
//     <>
//       {/*<button onClick={(event) => {console.log('Hello!')}}>My Youtube Chanel_1</button>*/}
//       <button onClick={(event) => onClickHandler('Hello! I am diligent Petya!')}>My Good Youtube  Chanel</button>
//       <button onClick={(event) => onClickHandler('Fuck, Im Yura and Im here')}>My Bad Youtube  Chanel</button>
//       <button onClick={() => onClickHandler('Im just a test. I have no one!')}>My Favorite Youtube Channel</button>
//     </>
//   );
// }

// export default App
//-------------------Body------------------------------------------------------------------
//function App() {
// return (
//     <>
//         <Header titleForHeader={'New Header'}/>
//         <Body titleForBody = {'New Body'}/>
//         <Footer titleForFooter = {'New Footer'}/>

//     </>
// );

//-------------------Students------------------------------------------------------------

// let students = [
//     {id: 1, name: "James", age: 8},
//     {id: 2, name: "Robert", age: 18},
//     {id: 3, name: "John", age: 28},
//     {id: 4, name: "Michael", age: 38},
//     {id: 5, name: "William", age: 48},
//     {id: 6, name: "David", age: 58},
//     {id: 7, name: "Richard", age: 68},
//     {id: 8, name: "Joseph", age: 78},
//     {id: 9, name: "Thomas", age: 88},
//     {id: 10, name: "Charles", age: 98},
//     {id: 11, name: "Christopher", age: 100},
//
// ];
//
// return (
//     <LessonMap students={students}/>
// )

//-------------------Cars-------------------------------------------------------------------------

// const topCars = [
//     {manufacturer:"BMW",model:'m5cs'},
//     {manufacturer:"Mercedes",model:'e63s'},
//     {manufacturer:"Audi",model:'rs6'}
// ];
// return (
//     <Cars topCars={topCars}/>
// )

//---------------------------------------------------------------------------------------------------


// }
//  export default App;

