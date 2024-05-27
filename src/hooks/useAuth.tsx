import { Children, FC, createContext, useContext,useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "./useLocalStorage";
import { TchildrenProp } from "../type";
import { IStorageItem } from "../type";


type AuthContextType = {
    user :IStorageItem;
    login :(data:any) => Promise<void>;
    logout : ()=>void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider:FC<TchildrenProp> = ({children})=>{

    const [user, setUser] = useLocalStorage("user", null);
    const navigate = useNavigate();

    const login = async(data:any): Promise<void> => { 
        console.log(data)
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