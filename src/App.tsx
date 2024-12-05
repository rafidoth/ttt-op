import React, { Dispatch, SetStateAction } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
import AppContainer from './AppContainer'

interface DarkModeContext{
  isDark : boolean,
  setIsDark : Dispatch<SetStateAction<boolean>>
}  

const defaultDarkModeState = {
  isDark : true,
  setIsDark : () =>{}
} as DarkModeContext;

export const darkModeContext =  React.createContext(defaultDarkModeState);


function App() {
  const [isDark, setIsDark] = React.useState(true);
  return (<darkModeContext.Provider value={{isDark, setIsDark}}>
    <AppContainer/> 
  </darkModeContext.Provider>)
}

export default App
