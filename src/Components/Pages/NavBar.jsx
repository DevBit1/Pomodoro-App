import { NavLink } from "react-router-dom";

function NavBar({className}) {
    return ( 
        <div className={`${className} flex w-full justify-between text-[#1b263b] border-2 border-[#1b263b] rounded-full p-1 dark:border-[#bde0fe] dark:text-slate-400`}>
            <NavLink to='pomodoro' className={({isActive}) => `flex items-center px-6 py-2 text-sm ${isActive && "bg-[#ff7b00] text-white dark:bg-[#028090]"} rounded-full`}>Pomodoro</NavLink>
            <NavLink to='ShortBreak' className={({isActive}) => `flex items-center px-6 py-2 text-sm ${isActive && "bg-[#ff7b00] text-white dark:bg-[#028090]"} rounded-full`}>Short Break</NavLink>
            <NavLink to='LongBreak' className={({isActive}) => `flex items-center px-6 py-2 text-sm ${isActive && "bg-[#ff7b00] text-white dark:bg-[#028090]"} rounded-full`}>Long Break</NavLink>
        </div>
     );
}

export default NavBar;