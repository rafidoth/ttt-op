import { useState, useContext } from 'react'
import Result from './components/Result'
import Container from './components/Container'
import SingleGridContainer from './components/SingleGridContainer'
import ToolBox from './components/ToolBox'


export default function AppContainer() {
  const [winner, setWinner] = useState("Not Decided Yet");
  const [isCreateNewMode, setIsCreateNewMove] = useState(false);
  const handleWinner = (winner: string) => { setWinner(winner) }
  const [grids, setGrids] = useState(
    [<SingleGridContainer
      handleWinner={handleWinner}
      position={{ x: 400, y: 200 }}
    />])

  const toggleCreateNewMode = () => {
    setIsCreateNewMove(prev => !prev)
  }
  const addNewGrid = (e: MouseEvent) => {
    let prevGrids = [...grids]
    prevGrids.push(
      <SingleGridContainer
        handleWinner={handleWinner}
        position={{ x: e.clientX, y: e.clientY }}
      />
    );
    setGrids(prevGrids);
  }
  const removeAllGrids = () => {
    setGrids([])
  }
  return (
    <>
      <div
        style={{
          backgroundColor: "#121212"
        }}
      >
        <ToolBox
          isCreateNewMode={isCreateNewMode}
          toggleCreateNewMode={toggleCreateNewMode}
          removeAllGrids={removeAllGrids}
        />
      </div>
      <Container
        createNewMode={isCreateNewMode}
        handleNewAdd={addNewGrid}
      >
        <div>
          {grids.map((grid, indx) => <span key={indx}>{grid}</span>)}
          <div >
            <Result
              winningStatus={winner}
              currentPlayer={"X"}
            />
          </div>
        </div>
      </Container>
    </>
  )
}




