import { useContext, useEffect, useState } from "react";
import { IoArrowBackOutline } from "react-icons/io5";
import { AppContext } from "./Context/AppContext";
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import useTheme from "./Context/ThemeContext";


function Settings({ settingHandler }) {

    const { pomodoro, short, long, applyHandler } = useContext(AppContext)
    const {currentTheme, lightTheme, darkTheme} = useTheme()

    const [data, setData] = useState({ pomo: pomodoro, sht: short, lng: long })
    const [reset, setReset] = useState(false)


    useEffect(() => {       //Used this bcs in react we can't use .then and .catch with setter functions provided by 
        //useState bcs their asynchronous behviour is given by react not the setter function itself they are not promises
        applyHandler(data)
    }, [reset])


    function submitHandler() {
        applyHandler(data)
        settingHandler()
    }

    function resetHandler() {
        setData({ pomo: 5, sht: 2, lng: 10 })
        setReset(!reset)
    }

    function changeHandler(modeStatus) {
        if(modeStatus){
            lightTheme()
        }
        else{
            darkTheme()
        }
    }


    return (
        <div className="flex flex-col items-center gap-5 w-1/4 px-10 pt-10 pb-5 rounded-2xl bg-[#343a40] text-white shadow-lg shadow-[#495057] dark:bg-[#bee9e8] dark:shadow-xl dark:shadow-black dark:text-[#1b4965]">
            <form
                className="flex flex-col items-center gap-3"
                onSubmit={(e) => e.preventDefault()}
            >
                <div 
                    className="bg-slate-300 rounded-full p-2 dark:bg-slate-900"
                    onClick={() => changeHandler(currentTheme === "dark")}    
                >
                    {
                        currentTheme === "dark" ?
                        <CiLight size={`25px`} className="text-white"/> :
                        <MdDarkMode size={`25px`} className="text-[#1b263b]"/>
                    }
                </div>

                <div className="flex w-full justify-between mb-[30px]">
                    <input
                        type="text"
                        className="w-[50px] rounded-lg text-center dark:bg-slate-500 dark:text-white"
                        value={data.pomo}
                        disabled
                    />
                    :
                    <input
                        type="text"
                        className="w-[50px] rounded-lg text-center dark:bg-slate-500 dark:text-white"
                        value={data.sht}
                        disabled
                    />
                    :
                    <input
                        type="text"
                        className="w-[50px] rounded-lg text-center dark:bg-slate-500 dark:text-white"
                        value={data.lng}
                        disabled
                    />
                </div>

                <label className="flex items-center gap-2 flex-col w-full">

                    <div className="flex items-center gap-2 w-full justify-between">
                        <span>Pomodoro</span>
                        <input
                            type="range"
                            value={data.pomo}
                            min={5}
                            max={60}
                            step={5}
                            className="appearance-none bg-white rounded-lg h-1 dark:bg-[#03045e]"
                            onChange={(e) => {
                                setData((prev) => (
                                    { ...prev, pomo: Number(e.target.value) }
                                ))
                            }}
                        />
                    </div>
                </label>

                <label className="flex items-center gap-2 flex-col w-full">

                    <div className="flex items-center gap-2 w-full justify-between">
                        <span>Short Break</span>
                        <input
                            type="range"
                            value={data.sht}
                            min={2}
                            max={20}
                            step={2}
                            className="appearance-none bg-white rounded-lg h-1 dark:bg-[#03045e]"
                            onChange={(e) => {
                                setData((prev) => (
                                    { ...prev, sht: Number(e.target.value) }
                                ))
                            }}
                        />
                    </div>
                </label>

                <label className="flex items-center gap-2 flex-col w-full">

                    <div className="flex items-center gap-2 w-full justify-between">
                        <span>Long Break</span>
                        <input
                            type="range"
                            value={data.lng}
                            min={10}
                            max={30}
                            step={10}
                            className="appearance-none bg-white rounded-lg h-1 dark:bg-[#03045e]"
                            onChange={(e) => {
                                setData((prev) => (
                                    { ...prev, lng: Number(e.target.value) }
                                ))
                            }}
                        />
                    </div>
                </label>

                <div className="flex gap-2 mt-[30px] w-full justify-between">
                    <button className="border-2 w-[100px] rounded-lg hover:bg-white hover:text-[#343a40] dark:border-[#1b4965] dark:hover:bg-[#1b4965] dark:hover:text-white" onClick={() => submitHandler()}>Apply</button>
                    <button className="border-2 w-[100px] rounded-lg hover:bg-white hover:text-[#343a40] dark:border-[#1b4965] dark:hover:bg-[#1b4965] dark:hover:text-white" onClick={() => resetHandler()}>Reset</button>
                </div>
            </form>
            <IoArrowBackOutline size={`30px`} onClick={() => settingHandler()} className="mt-[20px]" />
        </div>
    );
}

export default Settings;




