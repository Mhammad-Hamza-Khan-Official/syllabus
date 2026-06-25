import { Navigate, Outlet } from "react-router-dom";
// import useAuth from "../hooks/useAuth";/

export default function ProtectedRoute() {
    const { user} = {user : true}
   

    if (!user) return <Navigate to="/login" />;

    // if (!verifiedByOtp) return <Navigate to="/otp" />;

    return <Outlet />;
}