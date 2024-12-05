import { useState } from 'react'
import Result from './components/Result'
import Container from './components/Container'
import DarkModeChanger from './components/DarkModeChanger'
import SingleGridContainer from './components/SingleGridContainer'


export default function AppContainer(){
  const [winner, setWinner] = useState("Not Decided Yet");
  const handleWinner = (winner : string) =>{setWinner(winner)}
  return (
    <>
    <Container>
      <div>
        <DarkModeChanger/> 
      </div>
      <SingleGridContainer handleWinner={handleWinner}/> 
      <div >
        <Result 
          winningStatus={winner} 
          currentPlayer={"X"}
        />
      </div>
    </Container>
    </>
  )
}
