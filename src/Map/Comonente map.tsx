import React from "react";

type TypeLessonMap = {
    // students:Array<TypeQueueForRocket>
    students: TypeQueueForRocket[]
}
type TypeQueueForRocket = {
    id: number,
    name: string,
    age: number
}

export const LessonMap = (props: TypeLessonMap) => {

    return (
        <div>
            <ul>
                {props.students.map((objectRocket, index) => {
                    return (
                        <li key={objectRocket.id}>
                            <span>{objectRocket.name}</span>
                            <span> age: {objectRocket.age}</span>
                        </li>
                    )
                })}


            </ul>
        </div>
    )
}



