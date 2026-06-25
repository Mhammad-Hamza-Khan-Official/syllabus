import { Navigate, Outlet } from "react-router-dom";


export default function PublicRoute() {
    const user = false
    if (user) return <Navigate to={"/dashboard"}/>
    return <Outlet/>
}
