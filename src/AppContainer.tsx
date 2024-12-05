import { useState } from 'react'
import Grid from './components/Grid'
import Result from './components/Result'
import Container from './components/Container'
import DarkModeChanger from './components/DarkModeChanger'


export default function AppContainer(){
  const [xTurn, setXTurn] = useState(true);
  const [winner, setWinner] = useState("Not Decided Yet");
  const handleWinner = function(winner : string){
    setWinner(winner);
  }
  return (
    <>
    <Container>
      <div>
        <DarkModeChanger/> 
      </div>
      <div >
        <Grid 
          updateWinner = {handleWinner} 
          xTurn = {xTurn} 
          updateTurn = {()=>setXTurn(!xTurn)}    
        />
        <Result 
          winningStatus={winner} 
          currentPlayer={xTurn? "X": "O"}
        />
      </div>
    </Container>
    </>
  )
}
