import { ReactNode , useContext} from "react"
import styles from "./Container.module.css"
import { darkModeContext } from "../App" 

interface Props{
  children : ReactNode
}


const Container = ({children}: Props) => {
  let classNames = [styles.container]
  const {isDark} = useContext(darkModeContext) 
  if(isDark) classNames.push(styles.bgDark)
  return (
    <div 
      className={classNames.join(' ')}
    >
        {children}
    </div>
  )
}
export default Container;
