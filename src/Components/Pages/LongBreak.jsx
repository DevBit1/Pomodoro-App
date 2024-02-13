import { useContext } from "react";
import { AppContext } from "../Context/AppContext";
import useElement from "../CustomHooks/useElement";
import Timer from "../Timer";

function LongBreak() {

    const {long} = useContext(AppContext)
    const {  minute, seconds, percentage, val, pause, setPause, restartHandler, pathColor, trailColor, textColor  } = useElement(long)

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

export default LongBreak;