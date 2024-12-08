import React from 'react'
import DarkModeChanger from './DarkModeChanger'
import CreateNewGame from './CreateNewGame'
import { darkModeContext } from '../App'
import trashDark from '../assets/trash_dark.svg'
import trashWhite from '../assets/trash_white.svg'
import { btnStyle } from './btnStyle'

interface Prop {
  isCreateNewMode: boolean,
  toggleCreateNewMode: () => void,
  removeAllGrids: () => void
}


export default function ToolBox({
  isCreateNewMode,
  toggleCreateNewMode,
  removeAllGrids
}: Prop) {
  return (
    <>
      <DarkModeChanger />
      <CreateNewGame
        newMode={isCreateNewMode}
        onNewMode={toggleCreateNewMode}
      />
      <ClearBoard
        handleOnClick={removeAllGrids}
      />

    </>
  )
}



function ClearBoard({ handleOnClick }: { handleOnClick: () => void }) {
  const { isDark } = React.useContext(darkModeContext)
  if (isDark) {
    return (<>
      <button
        style={btnStyle}
        onClick={handleOnClick}
      >
        <img src={trashWhite} width={20} />
      </button>
    </>)
  } else {
    return (<>
      <button
        style={btnStyle}
        onClick={handleOnClick}
      >
        <img src={trashDark} width={20} />
      </button>
    </>)
  }

}
