import { createContext, useState } from "react";

export const AppContext = createContext()

function AppContextProvider({children}) {

    const[pomodoro, setPomodoro] = useState(5)
    const[short, setShort] = useState(2)
    const[long, setLong] = useState(10)


    function applyHandler({pomo, sht, lng}){
        setPomodoro(pomo)
        setShort(sht)
        setLong(lng)
    }

    const value = {
        pomodoro,
        setPomodoro,
        short,
        setShort,
        long,
        setLong,
        applyHandler
    }

    return ( 
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
     )
}

export default AppContextProvider;