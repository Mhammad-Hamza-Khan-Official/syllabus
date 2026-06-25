import { Navigate, Outlet } from "react-router-dom";


export default function OtpRoute() {
    const user = false
    const verifiedByOpt = false

    if(!user) return <Navigate to={"/login"}/>
    else if (!verifiedByOpt) return <Navigate to={"/opt"}/>
    return <Outlet/>
}
