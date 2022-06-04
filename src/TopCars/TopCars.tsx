import React from 'react';
import './Cars.css'

type TypeCars = {
    manufacturer: string,
    model: string
}
type TypeTopCars = {
    topCars: TypeCars[]
}

export const Cars = (props: TypeTopCars) => {
    debugger
    return (
        <table>
            <caption>
                <strong>Top Cars</strong>
            </caption>
            <thead>
            <tr>
                <th>id</th>
                <th>manufacturer</th>
                <th>model</th>
            </tr>
            </thead>
            {props.topCars.map((objectFromTopCarsArray, index) => {
                return (
                <tbody >
                <tr key={index}>
                    <td key={index}>{index+1}</td>
                    <td>{objectFromTopCarsArray.manufacturer}</td>
                    <td>{objectFromTopCarsArray.model}</td>
                </tr>
                </tbody>
                )
            })}
        </table>
    )
}


