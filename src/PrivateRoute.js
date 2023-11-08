
import {  Navigate, Outlet } from  "react-router-dom"

import { useAuth } from "./AuthContext"




const PrivateRoute = ()=>{
        let {token} = useAuth()

        
        return (
           token ? <Outlet/> : <Navigate to="/login"/>
        )
}

export default PrivateRoute