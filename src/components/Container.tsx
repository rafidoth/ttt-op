import { ReactNode , useContext} from "react"
import styles from "./Container.module.css"
import { darkModeContext } from "../App" 

interface Props{
  children : ReactNode,
  createNewMode : boolean,
  handleNewAdd : (e : MouseEvent)=>void,
}


const Container = ({children, createNewMode, handleNewAdd}: Props) => {
  let classNames = [styles.container]
  const {isDark} = useContext(darkModeContext) 
  if(isDark) classNames.push(styles.bgDark)
  if(createNewMode) classNames.push(styles.cursorPlus)
  return (
    <div 
      className={classNames.join(' ')}
      onClick={(e : MouseEvent)=>{
        if(createNewMode){
          handleNewAdd(e)
        }
      }}
    >
        {children}
    </div>
  )
}
export default Container;
