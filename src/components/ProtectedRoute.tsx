import React, { FC } from 'react'
import {useAuth} from '../hooks/useAuth'
import { Navigate } from 'react-router-dom';
import { TchildrenProp } from '../type';

const ProtectedRoute:FC<TchildrenProp> = ({ children }) => {
    const value = useAuth();

    if(!value?.user.id){
        return <Navigate to='/login'/>
    }
    return children;
}

export default ProtectedRoute