import { Children, FC, createContext, useContext,useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "./useLocalStorage";
import { childrenProp } from "../type";

interface StorageItem {
    id:string;
    name:string;
}

type AuthContextType = {
    user :StorageItem;
    login :(data:any) => Promise<void>;
    logout : ()=>void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider:FC<childrenProp> = ({children})=>{

    const [user, setUser] = useLocalStorage("user", null);
    const navigate = useNavigate();

    const login = async(data:any): Promise<void> => { 
        setUser(data);
        navigate('/profile');
    }
    const logout = ()=>{
        setUser(null);
        navigate('/login')
    }
    const value = useMemo(()=>({
        user,
        login,
        logout
    }),[user])

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = ()=>{
    return useContext(AuthContext);
}