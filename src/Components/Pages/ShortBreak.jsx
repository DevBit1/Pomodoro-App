import { useContext } from "react";
import { AppContext } from "../Context/AppContext";
import useElement from "../CustomHooks/useElement";
import Timer from '../Timer';

function ShortBreak() {

    const {short} = useContext(AppContext)
    const {  minute, seconds, percentage, val, pause, setPause, restartHandler, pathColor, trailColor, textColor  } = useElement(short)

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

export default ShortBreak;