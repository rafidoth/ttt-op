import darkmodeIcon from '../assets/darkmode.svg'
import lightmodeIcon from '../assets/lightmode.svg'
import { darkModeContext } from '../App'
import { useContext } from 'react'

const btnStyle= {
  border : "none",
  outline : "none",
  width : 30,
  height : 30,
  borderRadius : "50%"
}


export default function DarkModeChanger(){
  const dark =  useContext(darkModeContext)

  return(<>
    <button style={btnStyle}>
      <img src={darkmodeIcon} width={20} />                
    </button>  
  </>)
}
