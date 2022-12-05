import { createContext, useEffect, useState } from "react"
import axiosClient from "../config/axiosClient";

const AppContext = createContext();

const AppProvider = ({children}:any) => {
    return(
        <AppContext.Provider
            value={{

            }}
        >
            { children }
        </AppContext.Provider>
    )
}

export {
    AppProvider
};

export default AppContext;