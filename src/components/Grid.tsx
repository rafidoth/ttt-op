import { useState , useContext} from "react";
import Square from "./Square";
import calculateWinner from "../GameLogic/CalculateWinner";
import styles from "./Grid.module.css" 
import { darkModeContext } from "../App";

interface Props{
  updateWinner : (winner : string) => void,
  xTurn : boolean,
  updateTurn : ()=> void
}



export default function Grid({updateWinner, xTurn, updateTurn}: Props){
  const [gridState, setGridState] = useState([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ]);

  const [gameEnd, setGameEnd] = useState(false);
  const { isDark } = useContext(darkModeContext)

  let handleClick = function handleClick(row: number, col:number){
    let prevGridState = gridState.map(row=> [...row]);

    if(xTurn) prevGridState[row][col] = "X";
    else prevGridState[row][col] = "O";

    setGridState(prevGridState);
    updateTurn();

    let winner = calculateWinner(prevGridState);
    if(winner !== "Not Decided Yet"){
      setGameEnd(true);
      console.log(winner)
    }
    updateWinner(winner)
  } 

  let arr = [];
  for(let i =0; i<3; i++){
    arr.push(Array.from({ length: 3 }, (_, i) => i ))
  }

  let grid = [];
  for(let row = 0; row<3; row++){
    let gridRow = [];
    for(let col = 0; col < 3; col++){
      gridRow.push(
        <Square 
          key ={row.toString() + col.toString()} 
          status={gridState[row][col]}
          onSquareClick = {()=> handleClick(row,col)}
          isGameEnded = {gameEnd}
        />)
    }
    grid.push(
      <div className={styles.gridRow} key = {row}>{gridRow}</div>
    )
  }

  
  let classNames = [styles.grid];
  if(isDark) classNames.push(styles.gridDark)

  if(xTurn && !gameEnd) classNames.push(styles.borderX);
  else if(!xTurn && !gameEnd) classNames.push(styles.borderO)
  else if(gameEnd) classNames.push(styles.borderE)

  
  return (
    <>
      <div className={classNames.join(' ')}>
        {grid}       
      </div>
    </>
  )
}
