import React from 'react';


export type ButtonForPropsType = {
  name: string
  addTextForGlobal:(text:string) => void
}

export const ButtonFor = (props: ButtonForPropsType) => {
  const onClickButtonHandler = () => {
    props.addTextForGlobal()
  }
  return (
    <div>
      <button onClick={onClickButtonHandler}>{props.name}</button>
    </div>
  );
};

