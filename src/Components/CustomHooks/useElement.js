import { useState, useEffect } from 'react'
import useTheme from '../Context/ThemeContext'

function useElement(time) {

    const {currentTheme} = useTheme()

    const pathColor = currentTheme === "light" ? "#ffea00" : "#02c39a"
    const trailColor = currentTheme === "light" ? "#e0e1dd" : "#001d3d"
    const textColor = currentTheme === "light" ? "#ff9500" : "#02c39a"
    
    const [pause, setPause] = useState(true)
    const [minute, setMinute] = useState(time)
    const [seconds, setSeconds] = useState(0)
    const [percentage, setPercentage] = useState(time)
    let intervalID

    const val = Math.floor((((minute * 60) + seconds) / (percentage*60)) * 100)

    function restartHandler() {
        setPause(!pause)
        setMinute(time)
    }

    useEffect(() => {
        pause ?
            (
                clearInterval(intervalID)
            ) :
            (
                intervalID = setInterval(() => {
                    setSeconds((prev) => {
                        if(prev > 0){
                            return prev-1
                        }
                        else{
                            setMinute((prev) => {
                                if(prev > 0)
                                    return prev-1
                                else{
                                    return prev
                                }
                            })
                            return ((minute > 0 ? 60 : 0))
                        }
                    })
                    clearInterval(intervalID)
                }, 1000)
            )

        // Clean up the interval when the component is unmounted
        return () => clearInterval(intervalID);
    }, [seconds, pause]);



    const data = {
        minute, 
        seconds,
        percentage,
        val,
        pause,
        setPause,
        restartHandler,
        pathColor,
        trailColor,
        textColor
    }

    return data;
}

export default useElement;