import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { userContext } from '../context/userContext'

function PrivateRoute() {
    const {decodedToken} = useContext(userContext)
    return (
        decodedToken ? <Outlet /> : <Navigate to={"/login"} />
    )
}

export default PrivateRoute