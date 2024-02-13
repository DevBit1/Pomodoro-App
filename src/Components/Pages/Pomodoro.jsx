import { useContext } from 'react';
import { AppContext } from '../Context/AppContext';
import useElement from "../CustomHooks/useElement";
import Timer from '../Timer';

function Pomodoro() {

    const { pomodoro } = useContext(AppContext)
    const { val, pause, setPause, restartHandler, minute, seconds, percentage, pathColor, trailColor, textColor } = useElement(pomodoro)


    return (
        <div>
            <Timer 
                minute={minute} 
                seconds={seconds} 
                percentage={percentage} 
                val={val} 
                pause={pause} 
                setPause={setPause} 
                restartHandler={restartHandler}
                pathColor={pathColor}
                trailColor={trailColor}        
                textColor={textColor}
            />
        </div>
    );
}

export default Pomodoro;