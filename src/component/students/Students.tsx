import React from 'react';
import liForStudents from './Students.module.css'

export type PropsStudentsType = {
  students: Array<StudentsType>
}

type StudentsType = {
  id: number
  name: string
  age: number
}

export const Students = (props: PropsStudentsType) => {
  return (
    <ul className={liForStudents.site}>
      {props.students.map((el, index) => {
        return (
          <li key={el.id} className={liForStudents.liForStudents}>
          <span> {`His name ${el.name} Is old ${el.age}`} </span>
          </li>
        )
      })}
    </ul>
  );
}



