import { useState } from "react";
import cross from "../assets/cross.svg"
import circle from "../assets/circle.svg"
import styles from "./Square.module.css"



interface Props{
  status : string, 
  onSquareClick : ()=> void,
  disableAtGameEnd : boolean 
}

export default function Square({status, onSquareClick, disableAtGameEnd}: Props){
  const [isDisable, setIsDisable]= useState(false);
  let squareClass= [styles.square];

  if(status ==='X')
    squareClass.push(styles.bgRed)
  else if(status ==='O') 
    squareClass.push(styles.bgGreen)

  const classNames = squareClass.join(' ');
  console.log(classNames)
  return (<>
    <button
      type="button"
      className={classNames}
      disabled = {isDisable || disableAtGameEnd}
      onClick={()=>{
        onSquareClick();
        setIsDisable(true);
      }}
    >
    <img src={status==='X' ? cross : ((status==='O') ? circle : " ") } />
    </button>    
  </>);
}
