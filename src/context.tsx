import { useMutationState } from '@tanstack/react-query';
import React, { FC,ReactNode, createContext, useContext, useState } from 'react'

type childrenProp = {
    children: ReactNode;
}
type AppContextType = {
    isSidebarOpen : boolean;
    setIsSidebarOpen : any;
    description : any;
    setDescription : any;
    isEditing : boolean;
    setIsEditing : any;
    editId : string;
    setEditId : any;
    blogs:any;
    setBlogs:any;
}

const AppContext = createContext<AppContextType | undefined>(undefined)
const AppProvider: FC<childrenProp> = ({children}) => {
    // const data = {
    //     "time": new Date().getTime(),
    //     "blocks": [
    //         {
    //             "type": "header",
    //             "data": {
    //                 "text": "Let's start a awesome blog.🥳",
    //                 "level": 3
    //             }
    //         },
    //     ]
    // }
    const [isSidebarOpen , setIsSidebarOpen] = useState(false);
    const [description, setDescription] = useState<any>();
    const [isEditing, setIsEditing] = useState(false);
    const [editId, setEditId] = useState("");
    const [blogs, setBlogs] = useState<any>()
    // const [editorContent, setEditorContent] = useState(data)


  return (
    <AppContext.Provider value={{isSidebarOpen, setIsSidebarOpen, description,setDescription, editId, setEditId, isEditing,setIsEditing,blogs,setBlogs}}>
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