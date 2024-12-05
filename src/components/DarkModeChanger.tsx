import sun from'../assets/sun.svg'
import moon from '../assets/moon.svg'
import { darkModeContext } from '../App'
import { useContext } from 'react'

const btnStyle= {
  border : "none",
  outline : "none",
  width : 30,
  height : 30,
  borderRadius : "50%",
  backgroundColor :"transparent" 
}


export default function DarkModeChanger(){
  const {isDark, setIsDark} =  useContext(darkModeContext)
  const handleOnClick = () => setIsDark((prev)=>!prev) 
  if(isDark){
    return(<>
      <button 
        style={btnStyle}
        onClick = {handleOnClick}
      >
        <img src={sun} width={20} />                
      </button>  
    </>)
  }else{
    return(<>
      <button 
        style={btnStyle}
        onClick = {handleOnClick}
      >
        <img src={moon} width={20} />                
      </button>  
    </>)
  }

}
