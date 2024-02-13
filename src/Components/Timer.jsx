import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css';
import { FaPlay, FaPause } from "react-icons/fa";


function Timer({ minute, seconds, percentage, val, pause, setPause, restartHandler, pathColor, trailColor, textColor }) {
    return (
        <div>
            <div className={`w-[200px] flex flex-col items-center rounded-full shadow-lg shadow-[#5f7296] dark:shadow-lg dark:shadow-black`}>
                <CircularProgressbarWithChildren
                    value={val}
                    text={`${minute} : ${seconds}`}
                    styles={{
                        path: {
                            stroke: pathColor,
                            strokeWidth: 3,
                        },
                        text: {
                            fontSize: '16px',
                            fill: textColor
                        },
                        trail: {
                            stroke: trailColor
                        }
                    }}
                >
                    {
                        (percentage > minute && minute == 0 && seconds == 0) ?
                            (
                                restartHandler()
                            ) :
                            (
                                pause ?
                                    (
                                        <FaPlay onClick={() => (minute > 0 || seconds > 0) && setPause(!pause)} size={`15px`} className="mt-[100px] text-[#ff9500] hover:scale-150 ease-out duration-200 dark:text-[#02c39a]"/>
                                    ) :
                                    (
                                        <FaPause onClick={() => (minute > 0 || seconds > 0) && setPause(!pause)} size={`15px`} className='mt-[100px] text-[#ff9500] hover:scale-150 ease-out duration-200 dark:text-[#02c39a]' />
                                    )
                            )
                    }
                </CircularProgressbarWithChildren>
            </div>
        </div>
    );
}

export default Timer;