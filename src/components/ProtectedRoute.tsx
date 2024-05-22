import React, { FC } from 'react'
import {useAuth} from '../hooks/useAuth'
import { Navigate } from 'react-router-dom';
import { childrenProp } from '../type';

const ProtectedRoute:FC<childrenProp> = ({ children }) => {
    const value = useAuth();

    if(!value?.user.id){
        return <Navigate to='/login'/>
    }
    return children;
}

export default ProtectedRoute