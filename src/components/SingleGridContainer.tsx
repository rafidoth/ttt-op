import Grid from "./Grid"
import React, { MouseEvent } from "react";
import styles from './SingleGridContainer.module.css'

interface Prop{
  handleWinner : (winner : string )=> void
}


export default function SingleGridContainer({handleWinner}:Prop){
  const [xTurn, setXTurn] = React.useState(true);
  const [currPos, setCurrPos] = React.useState({x : 140, y : 90})
  const draggedNode = React.useRef(null);

  const cssTopleft = {
    left: [currPos.x.toString(),"px"].join(''),
    top : [currPos.y.toString(),"px"].join('')
  }
  console.log(cssTopleft)
  
  const handleDragStart = ()=>{
    draggedNode.current.addEventListener('dragend', handleDragEnd)
  }

  const handleDragEnd = (e: MouseEvent)=>{
    setCurrPos({x:e.clientX , y:e.clientY})
  }


  return (<>
    <div 
      draggable
      className={styles.posAbsolute}
      style={cssTopleft}
      onDragStart={handleDragStart}
      ref={draggedNode}
    >
      
    <Grid 
      updateWinner = {handleWinner} 
      xTurn = {xTurn} 
      updateTurn = {()=>setXTurn(!xTurn)}    
    />
    </div>
  </>)
}
