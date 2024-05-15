import React, { FC,ReactNode, createContext, useContext, useState } from 'react'

type childrenProp = {
    children: ReactNode;
}
type AppContextType = {
    isSidebarOpen : boolean;
    setIsSidebarOpen : any;
}

const AppContext = createContext<AppContextType | undefined>(undefined)
const AppProvider: FC<childrenProp> = ({children}) => {
    const [isSidebarOpen , setIsSidebarOpen] = useState(false);
  return (
    <AppContext.Provider value={{isSidebarOpen, setIsSidebarOpen}}>
        {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = ()=>{
    const context = useContext(AppContext)
    if(!context){
        throw new Error("UseGlobalcontext must be used within app provider.")
    }
    return context;
}

export {AppContext, AppProvider}