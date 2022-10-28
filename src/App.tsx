import React from 'react';
import {Header} from './component/header_props/Header';
import {Body} from './component/header_props/Body';
import {Footer} from './component/header_props/Footer';
import {Students} from './students/Students';

const students = [
  {id: 1, name: "James", age: 8},
  {id: 2, name: "Robert", age: 18},
  {id: 3, name: "John", age: 28},
  {id: 4, name: "Michael", age: 38},
  {id: 5, name: "William", age: 48},
  {id: 6, name: "David", age: 58},
  {id: 7, name: "Richard", age: 68},
  {id: 8, name: "Joseph", age: 78},
  {id: 9, name: "Thomas", age: 88},
  {id: 10, name: "Charles", age: 98},
  {id: 11, name: "Christopher", age: 100},
]

function App() {
  return (
    <div className="App">
      <Header title={'Шапка сайта'}/>
      <Body title={'Тело сайта'}/>
      <Footer title={'Подвал сайта'}/>
      <Students students={students}/>
    </div>
  );
}

export default App;





