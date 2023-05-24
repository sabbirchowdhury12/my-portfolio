/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext, } from "react";
import { darkModeContextType } from "../utiles/model";



const IUserContextState: darkModeContextType = {
    isDarkMode: false,
    toggleIsDarkMode: () => { }
}

const darkModeContext = createContext<darkModeContextType>(IUserContextState)



export default darkModeContext;