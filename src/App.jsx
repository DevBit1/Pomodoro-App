import { useEffect, useState } from 'react'
import './App.css'
import { IoMdSettings } from "react-icons/io";
import Settings from './Components/Settings';
import NavBar from './Components/Pages/NavBar';
import { Outlet } from 'react-router-dom';
import { ThemeProvider } from './Components/Context/ThemeContext';

function App() {

  const [setting, setSetting] = useState(false)
  const [currentTheme, setCurrentTheme] = useState("light")

  const darkTheme = () => {
    setCurrentTheme("dark")
  }

  const lightTheme = () => {
    setCurrentTheme("light")
  }

  useEffect(() => {
    const element = document.querySelector("html")

    element.classList.remove("light", "dark")
    element.classList.add(currentTheme)
  }, [currentTheme])


  function settingHandler() {
    setSetting(!setting)
  }

  return (
    <ThemeProvider value={{currentTheme, lightTheme, darkTheme}}>
    <div className='flex h-screen items-center justify-center bg-[#e0e1dd] text-white flex-col dark:bg-[#001523]'>
      {
        setting ?

          (<Settings settingHandler={settingHandler} />) :

          (
            <div className='flex flex-col items items-center w-1/3 '>
              <NavBar className={`mb-[50px]`} />
              <Outlet />
              <IoMdSettings size={`30px`} className='mt-[50px] text-[#1b263b] custom-spin dark:text-white' onClick={() => setSetting(!setting)} />

            </div>
          )
      }
    </div>
    </ThemeProvider>
  )
}

export default App
