import React,{useState} from 'react';
import {Header} from './component/header_props/Header';
import {Body} from './component/header_props/Body';
import {Footer} from './component/header_props/Footer';
import {Students} from './component/students/Students';
import {TopCars} from './component/topCars/TopCars';
import {Button} from './component/button/Button';
import {UniversalButton} from './component/button/universal button/UniversalButton';
import {Banknotes } from './component/banknotes/Banknotes';
import Huk from './component/huk/Huk';
import {UniversalInput} from './component/universal input/UniversalInput';







const topCars = [
  {id: 1, manufacturer: 'BMW', model: 'm5ce'},
  {id: 2, manufacturer: 'Mercedes', model: 'e63s'},
  {id: 3, manufacturer: 'Audi', model: 'rs6'},
]

const students = [
  {id: 1, name: 'James', age: 8},
  {id: 2, name: 'Robert', age: 18},
  {id: 3, name: 'John', age: 28},
  {id: 4, name: 'Michael', age: 38},
  {id: 5, name: 'William', age: 48},
  {id: 6, name: 'David', age: 58},
  {id: 7, name: 'Richard', age: 68},
  {id: 8, name: 'Joseph', age: 78},
  {id: 9, name: 'Thomas', age: 88},
  {id: 10, name: 'Charles', age: 98},
  {id: 11, name: 'Christopher', age: 100},
]



function App() {


  const UnBut_1 = (subs:string) => {
    alert(subs)
  }
  const UnBut_2 = (subs_2:string) => {
    alert(subs_2)
  }
  const StupidBut = () => {
    alert('Я самая тупая кнопка')
  }

  return (
    <>

    <div className="App">
      <Header title={'Шапка сайта'}/>
      <Body title={'Тело сайта'}/>
      <Footer title={'Подвал сайта'}/>
      <Students students={students}/>
      <TopCars cars={topCars}/>
      <Button/>
      <UniversalButton name={'Universal Button'} callback={()=>UnBut_1('Я самая Универсальная Кнопка!')}/>
      <UniversalButton name={'Universal Button_2'} callback={()=>UnBut_2('Нет! Это я самая Универсальная')}/>
      <UniversalButton name={'Stupid Button'} callback={StupidBut}/>
      <Huk/>
      <Banknotes/>
      <UniversalInput/>
    </div>
    </>
  );
}

export default App;





