import { useState, useContext } from "react";
import cross from "../assets/cross.svg"
import circle from "../assets/circle.svg"
import styles from "./Square.module.css"
import { darkModeContext } from "../App";


interface Props{
  status : string, 
  onSquareClick : ()=> void,
  isGameEnded: boolean 
}
export default function Square({status, onSquareClick, isGameEnded}: Props){
  const [isDisable, setIsDisable]= useState(false);
  const {isDark} = useContext(darkModeContext)
  let squareClass= [styles.square];

  if(isDark){
    squareClass.push(styles.squareDark)
  }

  if(status ==='X')
    squareClass.push(styles.bgX)
  else if(status ==='O') 
    squareClass.push(styles.bgO)
  else if(isGameEnded) 
    squareClass.push(styles.bgGray)


  const classNames = squareClass.join(' ');

  return (<>
    <button
      type="button"
      className={classNames}
      disabled = {isDisable || isGameEnded}
      onClick={()=>{
        onSquareClick();
        setIsDisable(true);
      }}
    >
    <img src={status==='X' ? cross : ((status==='O') ? circle : " ") } />
    </button>    
  </>);
}
