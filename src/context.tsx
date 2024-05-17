import React, { FC,ReactNode, createContext, useContext, useState } from 'react'

type childrenProp = {
    children: ReactNode;
}
type AppContextType = {
    isSidebarOpen : boolean;
    setIsSidebarOpen : any;
    description : string;
    setDescription : any;
}

const AppContext = createContext<AppContextType | undefined>(undefined)
const AppProvider: FC<childrenProp> = ({children}) => {
    const [isSidebarOpen , setIsSidebarOpen] = useState(false);
    const [description, setDescription] = useState("");
  return (
    <AppContext.Provider value={{isSidebarOpen, setIsSidebarOpen, description,setDescription}}>
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