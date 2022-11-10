import React, {useState} from 'react';
import {Header} from './component/header_props/Header';
import {Body} from './component/header_props/Body';
import {Footer} from './component/header_props/Footer';
import {Students} from './component/students/Students';
import {TopCars} from './component/topCars/TopCars';
import {Button} from './component/button/Button';
import {UniversalButton} from './component/button/universal button/UniversalButton';
import {Banknotes} from './component/banknotes/Banknotes';
import Huk from './component/huk/Huk';
import {UniversalInput} from './component/universal input/UniversalInput';
import {AloneInput} from './component/universal input/alone input/AloneInput';
import {AloneButton} from './component/universal input/alone button/AloneButton';


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

  let [message, setMessage] = useState([
      {message: 'message1'},
      {message: 'message2'},
      {message: 'message3'},
    ]
  )

  let [aloneInput, setAloneInput] = useState('')
  const addAloneMessage = (aloneInput:string) => {
    let aloneMessage = {message: aloneInput}
    setMessage([aloneMessage, ...message])
  }
 const callbackButtonHandler =()=>{
   addAloneMessage(aloneInput)
   setAloneInput('')
 }


  const addTextForGlobal = (textInput: string) => {
    // console.log(textInput)
    let newMessage = {message: textInput}
    setMessage([newMessage, ...message])
  }

  const UnBut_1 = (subs: string) => {
    alert(subs)
  }
  const UnBut_2 = (subs_2: string) => {
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
        <UniversalButton name={'Universal ButtonFor'} callback={() => UnBut_1('Я самая Универсальная Кнопка!')}/>
        <UniversalButton name={'Universal Button_2'} callback={() => UnBut_2('Нет! Это я самая Универсальная')}/>
        <UniversalButton name={'Stupid ButtonFor'} callback={StupidBut}/>
        <Huk/>
        <Banknotes/>
        <UniversalInput name={'PiP'} addTextForGlobal={addTextForGlobal}/>


        <AloneInput aloneInput={aloneInput} setAloneInput={setAloneInput}/>
        <AloneButton name={'KlaK'} callback={callbackButtonHandler}/>
        {message.map((el, index) => {
          return <div>{el.message}</div>
        })}
      </div>
    </>
  );
}

export default App;





