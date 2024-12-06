import React from "react"
import { btnStyle } from "./btnStyle"
import GridDark from "../assets/grid_dark.svg"
import GridWhite from "../assets/grid_white.svg"
import { darkModeContext } from "../App"

interface Prop{
  newMode : boolean,
  onNewMode : ()=>void 
}

export default function CreateNewGame({newMode, onNewMode}: Prop){
  const {isDark} = React.useContext(darkModeContext);
  if(isDark){
    return <>
      <button 
        style={btnStyle} 
        onClick={()=>{onNewMode()}}
      >
         <img width={20} src={GridWhite} />
      </button>     
    </>
  }else{
    return <>
      <button 
        style={btnStyle} 
        onClick={()=>{onNewMode()}}
      >
        <img width={20} src={GridDark} />
      </button>     
    </>
  }
}
