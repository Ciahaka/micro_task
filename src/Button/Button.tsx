import React from "react";
import './Button.css'

type ButtonType={
  name:string
  callBack:()=>void
}

export const Button = (props:ButtonType) => {
  const onClickHandler=()=>{
    props.callBack()
  }
  return (
    <>
      <button onClick={onClickHandler}>{props.name}</button>

    </>
  )
}

